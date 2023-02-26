type SupportedType =
  | "pdf"
  | "ppt"
  | "pptx"
  | "xls"
  | "xlsx"
  | "doc"
  | "docx"
  | "csv"
  | "xml"
  | "html"
  | "txt"
  | "odt"
  | "ods"
  | "odp";

// ----------------------------------------------------------
// Get content type from file extension
// ----------------------------------------------------------

export const getContentType = (fileExt: SupportedType): string => {
  switch (fileExt) {
    case "pdf":
      return "application/pdf";
    case "ppt":
      return "application/vnd.ms-powerpoint";
    case "pptx":
      return "application/vnd.openxmlformats-officedocument.preplyentationml.preplyentation";
    case "xls":
      return "application/vnd.ms-excel";
    case "xlsx":
      return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    case "doc":
      return "application/msword";
    case "docx":
      return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    case "csv":
      return "application/octet-stream";
    case "xml":
      return "application/xml";
    case "html":
      return "text/html";
    case "txt":
      return "text/plain";

    case "odt":
      return "application/vnd.oasis.opendocument.text";
    case "ods":
      return "application/vnd.oasis.opendocument.spreadsheet";
    case "odp":
      return "application/vnd.oasis.opendocument.presentation";

    default:
      return "text/plain";
  }
};
