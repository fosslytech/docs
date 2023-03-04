export const corsHeadersDev = {
  "Access-Control-Allow-Origin":
    "http://localhost:3000, https://staging-docs.fossly.tech",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

export const corsHeadersProd = {
  "Access-Control-Allow-Origin": "https://docs.fossly.tech",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};
