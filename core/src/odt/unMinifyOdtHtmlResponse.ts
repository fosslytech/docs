// ----------------------------------------------------------
// Just reverts the minify function
// ----------------------------------------------------------

export const unMinifyOdtHtmlResponse = (html: string): string => {
  const unMinifiedHtml = html
    // In: <psta*>
    // Out: <p style="text-align: *">
    .replace(/<([\w\d]+)sta(\w+)>/, '<$1 style="text-align: $2">')
    // In: <tdcs*rs*>
    // Out: <td colspan="*" rowspan="*">
    .replace(/<tdcs(\d+)rs(\d+)>/g, '<td colspan="$1" rowspan="$2">')
    // In: <tdcs*rs*cw*>
    // Out: <td colspan="*" rowspan="*" colwidth="*">
    .replace(
      /<tdcs(\d+)rs(\d+)cw([\d,]+)>/g,
      '<td colspan="$1" rowspan="$2" colwidth="$3">'
    );

  return unMinifiedHtml;
};
