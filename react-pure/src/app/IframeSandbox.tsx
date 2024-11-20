"use client";
import React, { useEffect, useRef } from "react";
import { createRoot, Root } from "react-dom/client";
import { SheetsRegistry, JssProvider, createGenerateId } from "react-jss";

interface IframeSandboxProps {
  children: React.ReactNode;
}

const IframeSandbox: React.FC<{ path: string }> = ({ path }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <iframe
      ref={iframeRef}
      sandbox="allow-scripts allow-same-origin"
      src={path}
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
  );
};

export default IframeSandbox;
