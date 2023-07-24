import { TypeListProp } from "enums/typeListProp";

export interface IActionProps {
  id: number;
  type: TypeListProp.CONTAINER | TypeListProp.ITEM;
  parrentId?: number;
}
