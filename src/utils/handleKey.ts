import { deleteFocus } from "./deleteFocus";

export function handleKey(e: KeyboardEvent) {
  console.log(e.code);
  const tableBody = document.querySelector("tbody") || document;
  const allCells = Array.from(document.querySelectorAll("td"));
  const allRows = Array.from(tableBody.querySelectorAll("tr"));
  const CellsInRow = allCells.length / allRows.length;
  const focusedElem = allCells.find((elem) => {
    if (elem.classList.contains("onFocus")) return elem;
    else {
      return null;
    }
  });

  const indexFocusedElem = focusedElem ? allCells.indexOf(focusedElem) : undefined;
  console.log(indexFocusedElem, CellsInRow);
  switch (e.code) {
    case "Tab":
    case "ArrowRight":
      e.preventDefault();
      deleteFocus();
      allCells[
        indexFocusedElem !== undefined && indexFocusedElem < allCells.length - 1
          ? indexFocusedElem + 1
          : 0
      ].classList.add("onFocus");
      break;
    case "ArrowLeft":
      deleteFocus();
      allCells[
        indexFocusedElem !== undefined && indexFocusedElem > 0
          ? indexFocusedElem - 1
          : allCells.length - 1
      ].classList.add("onFocus");
      break;
    case "ArrowUp":
      deleteFocus();
      allCells[
        indexFocusedElem !== undefined && indexFocusedElem > CellsInRow - 1
          ? indexFocusedElem - CellsInRow
          : indexFocusedElem !== undefined
          ? allCells.length - (CellsInRow - indexFocusedElem)
          : 0
      ].classList.add("onFocus");
      break;
    case "ArrowDown":
      deleteFocus();
      allCells[
        indexFocusedElem !== undefined && indexFocusedElem < allCells.length - CellsInRow
          ? indexFocusedElem + CellsInRow
          : indexFocusedElem
          ? indexFocusedElem % CellsInRow
          : allCells.length - 1
      ].classList.add("onFocus");
      break;
  }
}
