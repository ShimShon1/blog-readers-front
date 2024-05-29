export type PostType = {
  _id: string;
  title: string;
  content: string;
  __v: number;
  comments: Comment[];
  date: string;
  isPublic: boolean;
  views: number;
};

export type Comment = {
  _id?: string;
  username: string;
  title: string;
  content: string;
};

export type errorObject = {
  type: string;
  value: string;
  msg: string;
  path: string;
  location: string;
};

export type APIError = {
  errors: errorObject[];
};
export function isAPIError(
  error: APIError | unknown
): error is APIError {
  return (error as APIError)?.errors !== undefined;
}
