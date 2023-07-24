import { deleteFocus } from "./deleteFocus";

export function handleKey(e: KeyboardEvent) {
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
  if (
    focusedElem?.dataset.type === "container" &&
    (e.code === "Tab" || e.code === "ArrowRight") &&
    (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "BODY")
  ) {
    e.preventDefault();
    Array.from(focusedElem.children).forEach((item) => {
      Array.from(item.children).forEach((childItem) => {
        (childItem as HTMLElement).focus();
      });
    });
  } else if (
    focusedElem?.dataset.type === "container" &&
    e.code === "ArrowLeft" &&
    document.activeElement?.tagName === "BUTTON"
  ) {
    Array.from(focusedElem.children).forEach((item) => {
      (item.children[0] as HTMLElement).focus();
    });
  } else {
    switch (e.code) {
      case "Tab":
      case "ArrowRight":
        e.preventDefault();
        deleteFocus();
        const rightElement =
          allCells[
            indexFocusedElem !== undefined && indexFocusedElem < allCells.length - 1
              ? indexFocusedElem + 1
              : 0
          ];
        rightElement.classList.add("onFocus");
        focusElement(rightElement);
        break;
      case "ArrowLeft":
        deleteFocus();
        const leftElement =
          allCells[
            indexFocusedElem !== undefined && indexFocusedElem > 0
              ? indexFocusedElem - 1
              : allCells.length - 1
          ];
        leftElement.classList.add("onFocus");
        focusElement(leftElement);
        break;
      case "ArrowUp":
        deleteFocus();
        const topElement =
          allCells[
            indexFocusedElem !== undefined && indexFocusedElem > CellsInRow - 1
              ? indexFocusedElem - CellsInRow
              : indexFocusedElem !== undefined
              ? allCells.length - (CellsInRow - indexFocusedElem)
              : 0
          ];
        topElement.classList.add("onFocus");
        focusElement(topElement);
        break;
      case "ArrowDown":
        deleteFocus();
        const bottomElement =
          allCells[
            indexFocusedElem !== undefined && indexFocusedElem < allCells.length - CellsInRow
              ? indexFocusedElem + CellsInRow
              : indexFocusedElem
              ? indexFocusedElem % CellsInRow
              : allCells.length - 1
          ];
        bottomElement.classList.add("onFocus");
        focusElement(bottomElement);
        break;
      case "Enter":
        if (focusedElem?.dataset.type === "item") {
        }

        break;
    }
  }
}

const focusElement = (elem: HTMLTableCellElement) => {
  if (elem.dataset.type === "description" || elem.dataset.type === "item") {
    (document.activeElement as HTMLElement).blur();
  }
  if (elem.dataset.type === "container" || elem.dataset.type === "item") {
    Array.from(elem.children).forEach((item) => {
      (item.children[0] as HTMLElement).focus();
    });
  } else {
    Array.from(elem.children).forEach((item) => {
      (item as HTMLElement).focus();
    });
  }
};
