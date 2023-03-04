// ----------------------------------------------------------
// It's used to reduce the amount of text we store in db
// since a lot of it is long and repeated
// ----------------------------------------------------------

export const minifyOdsHtmlRequest = (html: string): string => {
  const minifiedHtml = html
    // In: <p style="text-align: *">
    // Out: <psta*>
    .replace(/<p\s+style="text-align:\s+(\w+)">/, "<psta$1>")
    // In: <td colspan="*" rowspan="*">
    // Out: <tdcs*rs*>
    .replace(/<(td|th)\s+colspan="(\d+)"\s+rowspan="(\d+)">/g, "<$1cs$2rs$3>")
    // In: <td colspan="*" rowspan="*" colwidth="*">
    // Out: <tdcs*rs*cw*>
    .replace(
      /<(td|th)\s+colspan="(\d+)"\s+rowspan="(\d+)"\s+colwidth="([\d,]+)">/g,
      "<$1cs$2rs$3cw$4>"
    );

  return minifiedHtml;
};
