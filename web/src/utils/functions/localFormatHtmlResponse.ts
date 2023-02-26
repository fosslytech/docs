// For local testing/development of { localFormatOdtHtmlResponse }
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

export const localFormatHtmlResponse = (format: string, html: string) => {
  switch (format) {
    case 'odt':
      return localFormatOdtHtmlResponse(html);

    default:
      break;
  }
};
