// For local testing/development of { formatOdtHtmlRequest }
const formatOdtHtmlRequest = (html: string): string => {
  const formattedHtml = html

    // Text highlight doesn't work
    // tiptap uses:   <mark data-color="*2" style="background-color: *2; color: inherit">*3</mark>
    // we need:       <font color="*1"><span style="background: *2">*3</span></font>
    .replace(
      /<mark data-color="([^"]+)" style="background-color: ([^;]+); color: inherit">([^<]+)<\/mark>/g,
      (_match, _p1, p2, p3) => {
        return `<font color="inherit"><span style="background: ${p2}">${p3}</span></font>`;
      }
    )

    // Table width doesn't work,
    // tiptap uses:   <table class="my-custom-paragraph">*</table>
    // we need:       <table width="100%" cellpadding="4" cellspacing="0">*</table>
    .replace(/<table class="my-custom-paragraph">(.+?)<\/table>/g, (_match, p1) => {
      return `<table width="100%" cellpadding="4" cellspacing="0">${p1}</table>`;
    });

  return formattedHtml;
};

const formatOdsHtmlRequest = (html: string): string => {
  const formattedHtml = html
    // Remove tbody
    .replace(/<tbody>/g, '')
    .replace(/<\/tbody>/g, '')

    // strong -> b
    .replace(/<strong/g, '<b')
    .replace(/<\/strong>/g, '</b>')

    // em -> i
    .replace(/<em/g, '<i')
    .replace(/<\/em>/g, '</i>')

    // th -> td
    .replace(/<th/g, '<td')
    .replace(/<\/th>/g, '</td>')

    // Add attributes to table
    .replace(/<table>/, '<table cellspacing="0" border="0"><colgroup span="2" width="85"></colgroup>')

    // Left, center & right align doesn't work,
    // we need:          <td ... align="center">...</td>
    // tiptap uses:      <td ...><p style="text-align: center">...</p></td>
    .replace(
      /<td\s+colspan="(\d+)"\s+rowspan="(\d+)"><p(?:\s+style="text-align:\s*(\w+)")?>([^<]*)<\/p><\/td>/gi,
      (match, colspan, rowspan, align, content) => {
        align = align || 'right';

        return `<td colspan="${colspan}" rowspan="${rowspan}" align="${align}" ${
          content ? `sdval="${content}"` : ''
        } sdnum="1033;">${content ? content : '<br>'}</td>`;
      }
    );

  return formattedHtml;
};

export const localFormatHtmlRequest = (format: string, html: string) => {
  switch (format) {
    case 'odt':
      return formatOdtHtmlRequest(html);

    case 'ods':
      return formatOdsHtmlRequest(html);

    default:
      return html;
  }
};
