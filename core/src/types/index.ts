export interface IApiResponse<Data> {
  error: boolean;
  message: string;
  data: Data;
}
