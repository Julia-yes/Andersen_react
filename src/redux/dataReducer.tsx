import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockData } from "utils/mockData";
import { IActionProps } from "interfaces/actionProps";
import { TypeListProp } from "enums/typeListProp";
import { ITableRow } from "interfaces/tableRow";

export interface DataState {
  data: ITableRow[];
}

const initialState: DataState = {
  data: mockData,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    deleteItem: (state, action: PayloadAction<IActionProps>) => {
      if (action.payload.type === TypeListProp.CONTAINER) {
        state.data = state.data.filter((item) => item.id !== action.payload.id);
      } else {
        const newData = [...state.data];
        const newDataItem = state.data.find((item) => item.id === action.payload.parrentId);
        if (newDataItem) {
          const index = state.data.indexOf(newDataItem);
          newDataItem.content = newDataItem?.content.filter(
            (item) => item.id !== action.payload.id
          );
          newData.splice(index, 1, newDataItem);
          state.data = newData;
        }
      }
    },
  },
});

export const { deleteItem } = dataSlice.actions;

//export const selectData = (state: RootState) => state.data.search;

export default dataSlice.reducer;
