import { IListItem } from "./listItem";

export interface ITableRow extends IListItem {
  content: IListItem[];
}
