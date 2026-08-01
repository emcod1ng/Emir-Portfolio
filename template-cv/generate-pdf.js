import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

(async () => {
    try {
        let html = fs.readFileSync('cv-template.html', 'utf8');
        
        // Convert the image to base64 so puppeteer guarantees it renders
        const imgPath = path.resolve('../portfolio/public/profile.jpg');
        const imgData = fs.readFileSync(imgPath);
        const base64Image = `data:image/jpeg;base64,${imgData.toString('base64')}`;
        
        // Replace the image path with the base64 string
        html = html.replace(/<img src="[^"]*">/, `<img src="${base64Image}">`);
        
        // Inject robust CSS for multi-page printing
        const fixCss = `
        <style>
            @media print {
                @page { margin: 0; size: A4; }
                body { 
                    padding: 0 !important; 
                    margin: 0 !important; 
                    /* Ovo je trik koji ponavlja pozadinu na svakoj stranici papira */
                    background: linear-gradient(to right, var(--primary) 0%, var(--primary) 35%, white 35%, white 100%) !important;
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                }
                .cv-container {
                    width: 100% !important;
                    max-width: 100% !important;
                    box-shadow: none !important;
                    background: transparent !important;
                    min-height: auto !important;
                }
                .sidebar { 
                    background: transparent !important; 
                    padding: 2.5rem 2rem !important;
                    -webkit-box-decoration-break: clone;
                    box-decoration-break: clone;
                }
                .main-content { 
                    background: transparent !important; 
                    padding: 2.5rem 2.5rem !important;
                    -webkit-box-decoration-break: clone;
                    box-decoration-break: clone;
                }
                
                /* Sprečavanje "sečenja" teksta i naslova na pola između stranica */
                .experience-item, .project-item, .sidebar-section {
                    page-break-inside: avoid;
                    break-inside: avoid;
                }
                h1, h2, h3, h4, h5 {
                    page-break-after: avoid;
                    break-after: avoid;
                }
            }
        </style>
        `;
        html = html.replace('</head>', `${fixCss}</head>`);
        
        console.log('Launching browser...');
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();
        
        await page.setContent(html, { waitUntil: 'networkidle0' });
        
        const outputPath = path.resolve('../portfolio/public/cv.pdf');
        
        console.log(`Generating PDF to ${outputPath}...`);
        await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
        });
        
        console.log('PDF successfully generated!');
        await browser.close();
    } catch (error) {
        console.error('Error generating PDF:', error);
        process.exit(1);
    }
})();
