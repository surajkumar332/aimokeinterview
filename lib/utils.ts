export function formatDate(date: Date) {
  return new Date(date).toLocaleDateString();
}


export function calculateScore(correct: number, total: number) {
  return Math.round((correct / total) * 100);
}

export function formatTime(seconds: number) {

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function generateId() {
  return Math.random().toString(36).substring(2, 10);
}