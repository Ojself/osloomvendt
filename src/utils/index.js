export const ignoreUnwantedKeysForNumberInput = (e) => {
  if (
    ['e', '+', ',', '-', '.', 'ArrowUp', 'ArrowDown'].some(
      (key) => e.key === key
    )
  ) {
    e.preventDefault();
  }
};

export const drunkAnimation = (shouldAnimate) => {
  return shouldAnimate
    ? {
        x: Array.from({ length: 5 }).map(
          (_) => Math.floor(Math.random() * 8) - 4
        ),
        y: Array.from({ length: 5 }).map(
          (_) => Math.floor(Math.random() * 8) - 4
        ),
        filter: ['hue-rotate(0)', 'hue-rotate(360)'],
        transition: {
          duration: 10,
          repeat: Infinity,
          repeatType: 'mirror',
        },
      }
    : {};
};

export const anonymizeEmail = (email) => {
  const [username, domain] = email.split('@');
  const usernameLength = username.length;

  const maskedUsername = `${username.charAt(0)}${'*'.repeat(
    usernameLength - 2
  )}${username.charAt(usernameLength - 1)}`;
  return `${maskedUsername}@${domain}`;
};

export const getWeekDay = (date) => {
  const splittedDate = date.split('.');
  let yyyy = parseInt(splittedDate[2], 10);
  let mm = parseInt(splittedDate[1], 10);
  let dd = parseInt(splittedDate[0], 10);

  const weekday = new Date(yyyy, mm - 1, dd).getDay();

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return weekdays[weekday];
};

export const addNDayToEvent = (startDate, i) => {
  const addedNumber = i > 2 ? 2 : i >= 1 ? 1 : 0;
  let result = new Date(startDate);
  result.setDate(result.getDate() + addedNumber);
  return result;
};

export function getDateOfIsoWeek(week, year, returnEndOfWeek = false) {
  week = parseFloat(week);
  year = parseFloat(year);

  if (week < 1 || week > 53) {
    throw new RangeError('ISO 8601 weeks are numbered from 1 to 53');
  } else if (!Number.isInteger(week)) {
    throw new TypeError('Week must be an integer');
  } else if (!Number.isInteger(year)) {
    throw new TypeError('Year must be an integer');
  }

  const simple = new Date(year, 0, 1 + (week - 1) * 7, 5);

  const dayOfWeek = simple.getDay();

  const isoWeekStart = simple;

  isoWeekStart.setDate(simple.getDate() - dayOfWeek + 1);
  if (dayOfWeek > 4) {
    isoWeekStart.setDate(isoWeekStart.getDate() + 7);
  }

  if (
    isoWeekStart.getFullYear() > year ||
    (isoWeekStart.getFullYear() == year &&
      isoWeekStart.getMonth() == 11 &&
      isoWeekStart.getDate() > 28)
  ) {
    throw new RangeError(`${year} has no ISO week ${week}`);
  }
  if (returnEndOfWeek) {
    const isoWeekEnd = new Date(isoWeekStart);
    isoWeekEnd.setDate(isoWeekEnd.getDate() + 7); // Add 6 days to get to the end of the week
    return isoWeekEnd;
  }

  return isoWeekStart;
}
