export function formatDate(date: Date) {
  return `${date.toLocaleString("en-US", {
    month: "short",
  })} ${date.getDate()} ${date.getFullYear()}`;
}
