export interface Response<P = {}> {
  payload: P;
  is_error: boolean;
  errors: null | string[];
  statusMessage: string;
  status_code: number;
}
