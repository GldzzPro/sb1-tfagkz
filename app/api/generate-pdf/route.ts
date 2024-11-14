import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function POST(req: NextRequest) {
  try {
    const { html, options } = await req.json();

    // Configure Puppeteer for WebContainer environment
    const browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
      ],
    });

    const page = await browser.newPage();
    
    // Set viewport for consistent rendering
    await page.setViewport({
      width: 1200,
      height: 800,
      deviceScaleFactor: 1,
    });

    // Inject required styles and content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            /* Base styles */
            body {
              font-family: system-ui, -apple-system, sans-serif;
              line-height: 1.5;
              color: #1a1a1a;
              background: white;
              margin: 0;
              padding: 0;
            }
            
            /* Tailwind-like utilities */
            .container { max-width: 1200px; margin: 0 auto; }
            .grid { display: grid; }
            .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .gap-4 { gap: 1rem; }
            .space-y-2 > * + * { margin-top: 0.5rem; }
            .space-y-6 > * + * { margin-top: 1.5rem; }
            .p-8 { padding: 2rem; }
            .pt-6 { padding-top: 1.5rem; }
            .mb-4 { margin-bottom: 1rem; }
            .mb-8 { margin-bottom: 2rem; }
            
            /* Typography */
            h1 { font-size: 2.25rem; font-weight: 700; }
            h2 { font-size: 1.875rem; font-weight: 600; }
            h3 { font-size: 1.25rem; font-weight: 500; }
            .text-gray-600 { color: #4b5563; }
            .text-gray-700 { color: #374151; }
            .text-gray-800 { color: #1f2937; }
            
            /* Borders */
            .border-t { border-top: 1px solid #e5e7eb; }
            .rounded-lg { border-radius: 0.5rem; }
            
            /* Shadows */
            .shadow-lg {
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                         0 4px 6px -2px rgba(0, 0, 0, 0.05);
            }
          </style>
        </head>
        <body>
          ${html}
        </body>
      </html>
    `;

    await page.setContent(htmlContent, {
      waitUntil: ['networkidle0', 'domcontentloaded'],
    });

    // Generate PDF with improved options
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      ...options,
      margin: {
        top: '2cm',
        right: '2cm',
        bottom: '2cm',
        left: '2cm',
        ...options?.margin,
      },
    });

    await browser.close();

    return new NextResponse(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=document.pdf',
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF', details: error.message },
      { status: 500 }
    );
  }
}