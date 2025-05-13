export const colorGenerator = (): string => {
  return Math.floor(Math.random() * 16777215).toString(16);
};
export const formatDate = (
  dateString: string,
  includeTime?: boolean,
): string => {
  const tempDate = new Date(dateString);
  if (includeTime) {
    return tempDate.toLocaleDateString(undefined, {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  const date = tempDate.toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return date;
};
