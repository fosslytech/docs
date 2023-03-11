export const countHtmlTableColumns = (html: string): number => {
  const parser = new DOMParser();
  const htmlTable = parser
    .parseFromString(html, "text/html")
    .querySelector("table");

  if (!htmlTable) return 0;

  // Count the number of columns
  let colCount = 0;

  htmlTable.querySelectorAll("tr").forEach((row) => {
    let rowColCount = 0;
    row.querySelectorAll("td, th").forEach((cell) => {
      rowColCount += parseInt(cell.getAttribute("colspan") || "1", 10);
    });
    colCount = Math.max(colCount, rowColCount);
  });

  return colCount;
};

export const convertToNumberingScheme = (number: number) => {
  const baseChar = "A".charCodeAt(0);
  let letters = "";
  let counter = number + 1;

  do {
    counter -= 1;
    letters = String.fromCharCode(baseChar + (counter % 26)) + letters;
    counter = (counter / 26) >> 0; // quick `floor`
  } while (counter > 0);

  return letters;
};
