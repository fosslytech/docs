// ----------------------------------------------------------
// It's used to change the html output that we get
// from the server cause without it it's a bit scuffed
// ----------------------------------------------------------

export const formatOdtHtmlRequest = (html: string): string => {
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
    .replace(
      /<table class="my-custom-paragraph">(.+?)<\/table>/g,
      (_match, p1) => {
        return `<table width="100%" cellpadding="4" cellspacing="0">${p1}</table>`;
      }
    );

  return formattedHtml;
};
