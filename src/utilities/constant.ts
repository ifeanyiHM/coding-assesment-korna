export const formatDate = (date: string | undefined): string => {
  if (!date) return "";

  const now = new Date();
  const target = new Date(date);
  const diffMs = now.getTime() - target.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  // If less than 9 days ago → show "x days ago"
  if (diffDays < 9) {
    return diffDays === 0
      ? "Today"
      : `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  }

  // If within the same year → show "Mon Day" (e.g., "Oct 9")
  if (now.getFullYear() === target.getFullYear()) {
    return target.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }

  // If more than a year → show "Month Day, Year"
  return target.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
