const nameParser = (name) => {
  if (name) {
    const ary = name.split(" ");
    const newArray = ary.map((item, index) =>
      index === 0
        ? item.trim()
        : item.trim().charAt(0).toUpperCase() + item.trim().slice(1)
    );
    return newArray.join("");
  }
  return "";
};

const pageTitleParser = (pageTitle) => {
  if (pageTitle) {
    const ary = pageTitle.split(" ");
    const newArray = ary.map(
      (item, index) =>
        item.trim().charAt(0).toUpperCase() + item.trim().slice(1)
    );
    return newArray.join(" ");
  }
  return "";
};

export { nameParser, pageTitleParser };
