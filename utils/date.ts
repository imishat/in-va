export function formateDate(date: string | number | Date) {
  return new Date(date).toLocaleDateString('default', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
}
