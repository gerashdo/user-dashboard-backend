
export type ApiPaths = {
  users: string;
};

export type ErrorResponseBody = {
  ok: boolean
  errors: Record<string, {msg: string}>
}
