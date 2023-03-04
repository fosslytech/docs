import { unMinifyOdsHtmlResponse } from "./ods/unMinifyOdsHtmlResponse";

export const unMinifyHtmlRequest = (
  format: "odt" | "ods",
  html: string
): string => {
  switch (format) {
    case "odt":
      return html;

    case "ods":
      return unMinifyOdsHtmlResponse(html);

    default:
      return html;
  }
};
