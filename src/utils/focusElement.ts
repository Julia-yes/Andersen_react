import { deleteFocus } from "./deleteFocus";

export function focusElement(e: React.MouseEvent<HTMLTableSectionElement>) {
  deleteFocus();
  const elem = e.target as HTMLElement;
  const currentCell = findTDElem(elem);
  if (currentCell) currentCell.classList.add("onFocus");
}

function findTDElem(elem: HTMLElement) {
  if (elem.tagName === "TD") {
    return elem;
  } else {
    if (elem.parentElement) return findTDElem(elem.parentElement);
  }
}
