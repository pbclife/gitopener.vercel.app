export const getFormattedDate = (date: Date): string => {
  const months: string[] = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
  ];

  const dateCoord = date.toLocaleString().split('T')[0].split('-');

  return `${dateCoord[2]} ${months[Number(dateCoord[1]) - 1]} ${dateCoord[0]}`;
};
