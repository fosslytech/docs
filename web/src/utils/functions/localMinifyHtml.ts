export const localMinifyOdsHtmlRequest = (html: string): string => {
  const minifiedHtml = html
    // In: <p style="text-align: *">
    // Out: <psta*>
    .replace(/<p\s+style="text-align:\s+(\w+)">/, '<psta$1>')
    // In: <td colspan="*" rowspan="*">
    // Out: <tdcs*rs*>
    .replace(/<(td|th)\s+colspan="(\d+)"\s+rowspan="(\d+)">/g, '<$1cs$2rs$3>')
    // In: <td colspan="*" rowspan="*" colwidth="*">
    // Out: <tdcs*rs*cw*>
    .replace(/<(td|th)\s+colspan="(\d+)"\s+rowspan="(\d+)"\s+colwidth="([\d,]+)">/g, '<$1cs$2rs$3cw$4>');

  return minifiedHtml;
};
export const localUnMinifyOdsHtmlResponse = (html: string): string => {
  const unMinifiedHtml = html
    // In: <psta*>
    // Out: <p style="text-align: *">
    .replace(/<psta(\w+)>/, '<p style="text-align: $1">')
    // In: <tdcs*rs*>
    // Out: <td colspan="*" rowspan="*">
    .replace(/<(td|th)cs(\d+)rs(\d+)>/g, '<$1 colspan="$2" rowspan="$3">')
    // In: <tdcs*rs*cw*>
    // Out: <td colspan="*" rowspan="*" colwidth="*">
    .replace(/<(td|th)cs(\d+)rs(\d+)cw([\d,]+)>/g, '<$1 colspan="$2" rowspan="$3" colwidth="$4">');

  return unMinifiedHtml;
};
