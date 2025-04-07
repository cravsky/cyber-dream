import pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts?.default?.vfs || pdfFonts.pdfMake?.vfs;

export const generateDreamPDF = ({ dreamText, additional, interpretation }) => {
    // Sanitize input: remove symbols but preserve Polish characters
    const clean = (text) =>
        text?.replace(
            /[^\x00-\x7FąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s.,:;!?'"()\[\]{}\-–—\/\\\n\r]+/g,
            ''
        ) || '';

    const dateStr = new Date().toLocaleDateString('pl-PL').replace(/\./g, '-');

    const docDefinition = {
        pageMargins: [40, 60, 40, 60],
        content: [
            { text: 'Interpretacja Snu', style: 'header' },
            { text: dateStr, style: 'date' },
            { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }] },
            '\n',

            { text: 'Opis Snu', style: 'subheader' },
            { text: clean(dreamText), style: 'content' },
            '\n',

            { text: 'Informacje Dodatkowe', style: 'subheader' },
            { text: clean(additional), style: 'content' },
            '\n',

            { text: 'Interpretacja', style: 'subheader' },
            { text: clean(interpretation), style: 'content' },
        ],
        styles: {
            header: {
                fontSize: 24,
                bold: true,
                alignment: 'center',
                color: '#7B9EF9',
                margin: [0, 0, 0, 10],
            },
            date: {
                fontSize: 10,
                alignment: 'center',
                color: '#999',
                margin: [0, 0, 0, 10],
            },
            subheader: {
                fontSize: 16,
                bold: true,
                color: '#AAB4F9',
                margin: [0, 10, 0, 5],
            },
            content: {
                fontSize: 12,
                lineHeight: 1.4,
            },
        },
        defaultStyle: {
            font: 'Roboto',
        },
        footer: (currentPage, pageCount) => ({
            text: `Strona ${currentPage} z ${pageCount}`,
            alignment: 'center',
            margin: [0, 10, 0, 0],
            fontSize: 9,
            color: '#999',
        }),
    };

    pdfMake.createPdf(docDefinition).download(`interpretacja-snu_${dateStr}.pdf`);
};
