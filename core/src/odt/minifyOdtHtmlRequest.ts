// ----------------------------------------------------------
// It's used to reduce the amount of text we store in db
// since a lot of it is long and repeated
// ----------------------------------------------------------

export const minifyOdtHtmlRequest = (html: string): string => {
  const minifiedHtml = html
    // In: <* style="text-align: *"> ( p, h1, h2, h3, h4 )
    // Out: <*sta*>
    .replace(/<([\w\d]+)\s+style="text-align:\s+(\w+)">/, "<$1sta$2>")
    // In: <td colspan="*" rowspan="*">
    // Out: <tdcs*rs*>
    .replace(/<td\s+colspan="(\d+)"\s+rowspan="(\d+)">/g, "<tdcs$1rs$2>")
    // In: <td colspan="*" rowspan="*" colwidth="*">
    // Out: <tdcs*rs*cw*>
    .replace(
      /<td\s+colspan="(\d+)"\s+rowspan="(\d+)"\s+colwidth="([\d,]+)">/g,
      "<tdcs$1rs$2cw$3>"
    );

  return minifiedHtml;
};
