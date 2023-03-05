import { unMinifyOdsHtmlResponse } from "./ods/unMinifyOdsHtmlResponse";
import { unMinifyOdtHtmlResponse } from "./odt/unMinifyOdtHtmlResponse";

export const unMinifyHtmlRequest = (
  format: "odt" | "ods",
  html: string
): string => {
  switch (format) {
    case "odt":
      return unMinifyOdtHtmlResponse(html);

    case "ods":
      return unMinifyOdsHtmlResponse(html);

    default:
      return html;
  }
};
