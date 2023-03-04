import { minifyOdsHtmlRequest } from "./ods/minifyOdsHtmlRequest";

export const minifyHtmlRequest = (
  format: "odt" | "ods",
  html: string
): string => {
  switch (format) {
    case "odt":
      return html;

    case "ods":
      return minifyOdsHtmlRequest(html);

    default:
      return html;
  }
};
