// ----------------------------------------------------------
// It's used to change the html output that we get
// from the server cause without it it's a bit scuffed
// ----------------------------------------------------------

import { formatOdsHtmlResponse } from "./ods/formatOdsHtmlResponse";
import { formatOdtHtmlResponse } from "./odt/formatOdtHtmlResponse";

export const formatHtmlResponse = (
  format: "odt" | "ods",
  html: string
): string => {
  switch (format) {
    case "odt":
      return formatOdtHtmlResponse(html);

    case "ods":
      return formatOdsHtmlResponse(html);

    default:
      return html;
  }
};
