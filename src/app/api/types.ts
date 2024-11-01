export interface Response<P = {}> {
  payload: P;
  is_error: boolean;
  message: null | string;
  errors: string[];
  status_code: number;
  status: number;
}
