export interface PostModel {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export interface ErrorMessage {
  message: string;
}

export interface UseAPIHookModel {
  path: string;
  method: "GET";
}

export interface ResponseModel {
  data: null | any | any[];
  loading: boolean;
  error: string | null;
}
