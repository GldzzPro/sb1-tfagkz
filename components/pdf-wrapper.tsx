'use client';

import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PDFWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PDFWrapper = ({ children, className = '' }: PDFWrapperProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generatePDF = async () => {
    if (!contentRef.current) return;
    setIsGenerating(true);

    try {
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          html: contentRef.current.innerHTML,
          options: {
            margin: { top: '2cm', right: '2cm', bottom: '2cm', left: '2cm' },
          },
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.details || 'PDF generation failed');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'document.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      toast({
        title: 'Success',
        description: 'PDF generated successfully',
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || 'Failed to generate PDF',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-4">
      <Button
        onClick={generatePDF}
        className="flex items-center gap-2"
        variant="outline"
        disabled={isGenerating}
      >
        <FileDown className="h-4 w-4" />
        {isGenerating ? 'Generating PDF...' : 'Download as PDF'}
      </Button>
      <div ref={contentRef} className={className}>
        {children}
      </div>
    </div>
  );
};

export default PDFWrapper;