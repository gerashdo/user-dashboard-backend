
export type ApiPaths = {
  users: string
  auth: string
};

export type ErrorResponseBody = {
  ok: boolean
  errors: Record<string, {msg: string}>
}
