export type PostType = {
  _id: string;
  title: string;
  content: string;
  __v: number;
  comments: CommentType[];
  date: string;
  isPublic: boolean;
  views: number;
  comments_count?: number;
};

export type CommentType = {
  _id?: string;
  username: string;
  title: string;
  content: string;
  date?: string;
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
