"use client";
import React, { useEffect, useRef } from "react";
import { createRoot, Root } from "react-dom/client";
import { SheetsRegistry, JssProvider, createGenerateId } from "react-jss";

interface IframeSandboxProps {
  children: React.ReactNode;
}

// Generate a separate style registry and JSS ID generator for isolated styling
const sheets = new SheetsRegistry();
const generateId = createGenerateId();

const IframeSandbox: React.FC<IframeSandboxProps> = ({ children }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const rootRef = useRef<Root | null>(null); // Store root instance

  useEffect(() => {
    if (!iframeRef.current) return;

    const iframeDocument = iframeRef.current.contentDocument;
    const iframeWindow = iframeRef.current.contentWindow;

    if (!iframeDocument || !iframeWindow) return;

    // Create a div to serve as the root for React rendering in the iframe
    const mountNode = iframeDocument.createElement("div");
    iframeDocument.body.appendChild(mountNode);

    // Use createRoot to render the children into the iframe document
    rootRef.current = createRoot(mountNode);
    rootRef.current.render(
      <JssProvider registry={sheets} generateId={generateId}>
        {children}
      </JssProvider>
    );

    // Inject the collected CSS into the iframe's head
    const style = iframeDocument.createElement("style");
    style.textContent = sheets.toString();
    iframeDocument.head.appendChild(style);
    console.log({ style });
    // Clean up on unmount
    return () => {
      if (rootRef.current) {
        rootRef.current.unmount();
        rootRef.current = null;
      }
    };
  }, [children]);

  return (
    <iframe
      ref={iframeRef}
      sandbox="allow-scripts allow-same-origin"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
  );
};

export default IframeSandbox;
