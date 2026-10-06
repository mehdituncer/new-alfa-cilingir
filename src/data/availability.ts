export function getAvailability(date: Date): boolean {
  const hour = Number(new Intl.DateTimeFormat('en-GB', {timeZone:'Europe/Istanbul', hour:'2-digit',hourCycle:'h23'}).format(date));
  return hour >= 7 && hour < 24;
}
