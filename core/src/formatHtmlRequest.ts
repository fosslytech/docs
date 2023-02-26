import { formatOdsHtmlRequest } from "./ods/formatOdsHtmlRequest";
import { formatOdtHtmlRequest } from "./odt/formatOdtHtmlRequest";

export const formatHtmlRequest = (
  format: "odt" | "ods",
  html: string
): string => {
  switch (format) {
    case "odt":
      return formatOdtHtmlRequest(html);

    case "ods":
      return formatOdsHtmlRequest(html);

    default:
      return html;
  }
};
