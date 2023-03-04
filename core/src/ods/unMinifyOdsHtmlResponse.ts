// ----------------------------------------------------------
// Just reverts the minify function
// ----------------------------------------------------------

export const unMinifyOdsHtmlResponse = (html: string): string => {
  const unMinifiedHtml = html
    // In: <psta*>
    // Out: <p style="text-align: *">
    .replace(/<psta(\w+)>/, '<p style="text-align: $1">')
    // In: <tdcs*rs*>
    // Out: <td colspan="*" rowspan="*">
    .replace(/<(td|th)cs(\d+)rs(\d+)>/g, '<$1 colspan="$2" rowspan="$3">')
    // In: <tdcs*rs*cw*>
    // Out: <td colspan="*" rowspan="*" colwidth="*">
    .replace(
      /<(td|th)cs(\d+)rs(\d+)cw([\d,]+)>/g,
      '<$1 colspan="$2" rowspan="$3" colwidth="$4">'
    );

  return unMinifiedHtml;
};
