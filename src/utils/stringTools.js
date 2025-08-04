export const getScoreTitleInGenitive = (a) => {
  if (a >= 5 && a <= 19) return "очков";
  if (a % 10 == 1) return "очко";
  if ([1, 2, 3, 4].includes(a % 10)) return "очка";
  if ([5, 6, 7, 8, 9, 0].includes(a % 10)) return "очков";
};

export const getAttemptsTitleInGenitive = (a) => {
  if (a >= 5 && a <= 19) return "попыток";
  if (a % 10 == 1) return "попытка";
  if ([1, 2, 3, 4].includes(a % 10)) return "попытки";
  if ([5, 6, 7, 8, 9, 0].includes(a % 10)) return "попыток";
};

export const getCurrentDateDDMMYYYY = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  return `${day}.${month}.${year}`;
};

export const getCurrentDateTime = () => {
  const now = new Date();

  // Форматирование времени (HH:MM:SS)
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Форматирование даты (DD.MM.YYYY)
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Месяцы от 0 до 11
  const year = now.getFullYear();
  const dateString = `${day}.${month}.${year}`;

  // Объединение времени и даты
  return `${timeString} ${dateString}`;
};
