// ----------------------------------------------------------
// It's used to change the html output that we get
// from the server cause without it it's a bit scuffed
// ----------------------------------------------------------

export const formatHtmlResponse = (html: string): string => {
  const formattedHtml = html
    .replace(/\t/g, "")
    .replace(/\n/g, "")

    // Because html has <p></p> tags with <br />
    // there are 2 spaces when there should be only 1
    .replace(/<br\/>/g, "")

    // Left, center & right align doesn't work,
    // soffice uses:  <p align="center">...</p>
    // we need:       <p style="text-align: center">...</p>
    .replace(/align="left"/g, "")
    .replace(/align="center"/g, 'style="text-align: center"')
    .replace(/align="right"/g, 'style="text-align: right"')

    // Text color & highlight doesn't work,
    // soffice uses:  <p align="center">...</p>
    // we need:       <p style="text-align: center">...</p>
    .replace(/align="center"/g, 'style="text-align: center"');

  return formattedHtml;
};
