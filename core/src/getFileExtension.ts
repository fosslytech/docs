type SupportedType =
  | "application/pdf"
  | "application/vnd.ms-powerpoint"
  | "application/vnd.openxmlformats-officedocument.preplyentationml.preplyentation"
  | "application/vnd.ms-excel"
  | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  | "application/msword"
  | "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  | "application/octet-stream"
  | "application/xml"
  | "text/html"
  | "text/plain"
  | "application/vnd.oasis.opendocument.text"
  | "application/vnd.oasis.opendocument.spreadsheet"
  | "application/vnd.oasis.opendocument.presentation";

// ----------------------------------------------------------
// Get file extension from content type
// ----------------------------------------------------------

export const getFileExtension = (fileExt: SupportedType): string => {
  switch (fileExt) {
    case "application/pdf":
      return "pdf";
    case "application/vnd.ms-powerpoint":
      return "ppt";
    case "application/vnd.openxmlformats-officedocument.preplyentationml.preplyentation":
      return "pptx";
    case "application/vnd.ms-excel":
      return "xls";
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return "xlsx";
    case "application/msword":
      return "doc";
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return "docx";
    case "application/octet-stream":
      return "csv";
    case "application/xml":
      return "xml";
    case "text/html":
      return "html";
    case "text/plain":
      return "txt";

    case "application/vnd.oasis.opendocument.text":
      return "odt";
    case "application/vnd.oasis.opendocument.spreadsheet":
      return "ods";
    case "application/vnd.oasis.opendocument.presentation":
      return "odp";

    default:
      return "text/plain";
  }
};
