export const deleteFocus = () => {
  const allCells = document.querySelectorAll("td");
  allCells.forEach((item) => item.classList.remove("onFocus"));
};
