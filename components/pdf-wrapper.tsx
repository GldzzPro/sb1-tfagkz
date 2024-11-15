"use client";
import ReactDOMServer from "react-dom/server";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { createGenerateId, JssProvider, SheetsRegistry } from "react-jss";

interface PDFWrapperProps {
  children: React.ReactNode;
  className?: string;
}

type FullDocumentProps = {
  title?: string;
  children: React.ReactNode;
  styles?: string; // Extracted styles to embed in <head>
};

const FullDocument: React.FC<FullDocumentProps> = ({
  title = "Document",
  children,
  styles,
}) => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <style type="text/css">{styles}</style>
    </head>
    <body>{children}</body>
  </html>
);

const PDFWrapper = ({ children, className = "" }: PDFWrapperProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generatePDF = async () => {
    if (!contentRef.current) return;
    setIsGenerating(true);

    try {
      const response = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          html: `<!DOCTYPE html>${htmlContent}`,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.details || "PDF generation failed");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "document.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Success",
        description: "PDF generated successfully",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to generate PDF",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  // Collect styles and render static HTML for iframe and PDF generation
  const sheets = new SheetsRegistry();
  const generateId = createGenerateId();
  const htmlContent = ReactDOMServer.renderToStaticMarkup(
    <JssProvider registry={sheets} generateId={generateId}>
      <FullDocument title="Styled Document" styles={sheets.toString()}>
        {children}
      </FullDocument>
    </JssProvider>
  );

  return (
    <div className="space-y-4">
      <Button
        onClick={generatePDF}
        className="flex items-center gap-2"
        variant="outline"
        disabled={isGenerating}
      >
        <FileDown className="h-4 w-4" />
        {isGenerating ? "Generating PDF..." : "Download as PDF"}
      </Button>
      <div ref={contentRef} className={className}>
        <iframe
          srcDoc={`<!DOCTYPE html>${htmlContent}`}
          style={{ width: "100%", height: "500px", border: "none" }}
        />
      </div>
    </div>
  );
};

export default PDFWrapper;
