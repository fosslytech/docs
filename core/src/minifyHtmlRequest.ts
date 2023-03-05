import { minifyOdsHtmlRequest } from "./ods/minifyOdsHtmlRequest";
import { minifyOdtHtmlRequest } from "./odt/minifyOdtHtmlRequest";

export const minifyHtmlRequest = (
  format: "odt" | "ods",
  html: string
): string => {
  switch (format) {
    case "odt":
      return minifyOdtHtmlRequest(html);

    case "ods":
      return minifyOdsHtmlRequest(html);

    default:
      return html;
  }
};
