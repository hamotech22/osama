export function getErrorType(error) {
  if (!navigator.onLine) return "offline";
  if (error.code === "ECONNABORTED" || error.code === "ETIMEDOUT") return "timeout";
  if (!error.response) return "network";
  if (error.response.status >= 500) return "server";
  return "unknown";
}
