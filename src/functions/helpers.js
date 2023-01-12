export const buildScoreTitle = (el) => {
  const currency = "$";
  switch (el.length) {
    case 7:
      return `${
        currency + el.slice(0, 1) + "," + el.slice(1, 4) + "," + el.slice(-3)
      }`;
    case 6:
      return `${currency + el.slice(0, 3) + "," + el.slice(-3)}`;
    case 5:
      return `${currency + el.slice(0, 2) + "," + el.slice(-3)}`;
    case 4:
      return `${currency + el.slice(0, 1) + "," + el.slice(-3)}`;
    default:
      return `${currency + el}`;
  }
};
