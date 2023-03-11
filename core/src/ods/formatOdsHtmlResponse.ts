import { convertToNumberingScheme, countHtmlTableColumns } from "../utils";

// ----------------------------------------------------------
// It's used to change the html output that we get
// from the server cause without it it's a bit scuffed
// ----------------------------------------------------------

export const formatOdsHtmlResponse = (html: string): string => {
  const numCols = countHtmlTableColumns(html);
  let counterRow = 1;

  const headerRow = `<tr><th></th>${Array.from({ length: numCols })
    .map((_, i) => `<th>${convertToNumberingScheme(i)}</th>`)
    .join("")}</tr>`;

  const formattedHtml = html
    .replace(/\t/g, "")
    .replace(/\n/g, "")
    .replace(/<br>/g, "")

    // Left, center & right align doesn't work,
    // soffice uses:  <td ... align="center">...</td>
    // we need:       <td ...><p style="text-align: center">...</p></td>
    .replace(
      /<td(?:\scolspan=?(\d+)?)?(?:\srowspan=?(\d+)?)?(?:\sheight="?(\d+)"?)?(?:\salign="?(\w+)"?)?(?:\svalign=?(\w+)?)?(?:\ssdval="?([\w;]+)"?)?(?:\ssdnum="?([\d;]+)"?)?>\s*(.*?)\s*<\/td>/g,
      (
        match,
        colspan,
        rowspan,
        height,
        align,
        valign,
        sdval,
        sdnum,
        content
      ) => {
        // Set default values if attributes are not present
        colspan = colspan || 1;
        rowspan = rowspan || 1;
        align = align || "left";

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
