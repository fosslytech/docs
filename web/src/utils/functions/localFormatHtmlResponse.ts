// For local testing/development of { formatHtmlResponse }
export const localFormatHtmlResponse = (html: string): string => {
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
    .replace(/""/g, '')

    // Text highlight doesn't work
    // soffice uses:  <span style="background: *">123</span>
    // we need:       <mark data-color="*" style="background-color: *; color: inherit">123</mark>
    .replace(/""/g, '')

    // Title doesn't work,
    // soffice uses:  <font size="6" style="font-size: 28pt"><b>Title + </b></font>
    // we need:       ?
    .replace(/""/g, '');

  return formattedHtml;
};
