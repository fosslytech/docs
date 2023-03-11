// For local testing/development of { formatHtmlResponse }
const localFormatOdtHtmlResponse = (html: string): string => {
  const formattedHtml = html
    .replace(/\t/g, '')
    .replace(/\n/g, '')

    // Because html has <p></p> tags with <br />
    // there are 2 spaces when there should be only 1
    .replace(/<br\/>/g, '')

    // Left, center & right align doesn't work,
    // soffice uses:  <p align="center">...</p>
    // we need:       <p style="text-align: center">...</p>
    .replace(/align="left"/g, '')
    .replace(/align="center"/g, 'style="text-align: center"')
    .replace(/align="right"/g, 'style="text-align: right"')

    // Text color doesn't work,
    // soffice uses:  <font color="*">123</font>
    // we need:       <span style="color: *">123</span>
    .replace(/<font color="([^"]+)">([^<]+)<\/font>/g, (_match, p1, p2) => {
      return `<span style="color: ${p1}">${p2}</span>`;
    })

    // Text highlight doesn't work
    // soffice uses:  <span style="background: *">123</span>
    // we need:       <mark data-color="*" style="background-color: *; color: inherit">123</mark>
    .replace(/<span style="background: ([^"]+)">([^<]+)<\/span>/g, (_match, p1, p2) => {
      return `<mark data-color="${p1}" style="background-color: ${p1}; color: inherit">${p2}</mark>`;
    })

    // Title doesn't work,
    // soffice uses:  <font size="6" style="font-size: 28pt"><b>Title + </b></font>
    // we need:       <strong>Title+ <mark data-color="transparent" style="background-color: transparent; color: inherit">center</mark></strong>
    .replace(/<font size="6" style="font-size: 28pt"><b>([^<]+)<\/b><\/font>/g, (_match, p1) => {
      return `<h1 style="text-align: center">${p1}</h1>`;
    });

  return formattedHtml;
};

const countHtmlTableColumns = (html: string): number => {
  const parser = new DOMParser();
  const htmlTable = parser.parseFromString(html, 'text/html').querySelector('table');

  // Count the number of columns
  let colCount = 0;
  htmlTable.querySelectorAll('tr').forEach((row) => {
    let rowColCount = 0;
    row.querySelectorAll('td, th').forEach((cell) => {
      rowColCount += parseInt(cell.getAttribute('colspan') || '1', 10);
    });
    colCount = Math.max(colCount, rowColCount);
  });

  return colCount;
};

const convertToNumberingScheme = (number: number) => {
  const baseChar = 'A'.charCodeAt(0);
  let letters = '';
  let counter = number + 1;

  do {
    counter -= 1;
    letters = String.fromCharCode(baseChar + (counter % 26)) + letters;
    counter = (counter / 26) >> 0; // quick `floor`
  } while (counter > 0);

  return letters;
};

// For local testing/development of { formatHtmlResponse }
const localFormatOdsHtmlResponse = (html: string): string => {
  let counterRow = 1;

  const numCols = countHtmlTableColumns(html);

  const headerRow = `<tr><th></th>${Array.from({ length: numCols })
    .map((_, i) => `<th>${convertToNumberingScheme(i)}</th>`)
    .join('')}</tr>`;

  const formattedHtml = html
    .replace(/\t/g, '')
    .replace(/\n/g, '')
    .replace(/<br>/g, '')

    // Left, center & right align doesn't work,
    // soffice uses:  <td ... align="center">...</td>
    // we need:       <td ...><p style="text-align: center">...</p></td>
    .replace(
      /<td(?:\scolspan=?(\d+)?)?(?:\srowspan=?(\d+)?)?(?:\sheight="?(\d+)"?)?(?:\salign="?(\w+)"?)?(?:\svalign=?(\w+)?)?(?:\ssdval="?([\w;]+)"?)?(?:\ssdnum="?([\d;]+)"?)?>\s*(.*?)\s*<\/td>/g,
      (match, colspan, rowspan, height, align, valign, sdval, sdnum, content) => {
        // Set default values if attributes are not present
        colspan = colspan || 1;
        rowspan = rowspan || 1;
        align = align || 'left';

        // Return the desired output string
        return `<td colspan="${colspan}" rowspan="${rowspan}"><p style="text-align: ${align}">${content}</p></td>`;
      }
    )

    // Add a header cell at the beginning of each new row with numbers 1, 2, 3...
    .replace(/<tr>/g, () => {
      const th = `<th>${counterRow}</th>`;
      counterRow = counterRow + 1;
      return `<tr>${th}`;
    })

    // Add a header row at the beginning with letters A, B, C...
    .replace(/<tr/i, `${headerRow}<tr`);

  return formattedHtml;
};

export const localFormatHtmlResponse = (format: string, html: string) => {
  switch (format) {
    case 'odt':
      return localFormatOdtHtmlResponse(html);

    case 'ods':
      return localFormatOdsHtmlResponse(html);

    default:
      return html;
  }
};
