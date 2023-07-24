import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockData } from "utils/mockData";
import { IActionProps } from "interfaces/actionProps";
import { TypeListProp } from "enums/typeListProp";
import { ITableRow } from "interfaces/tableRow";
import { IActionPropsWithText } from "interfaces/actionPropsWithText";

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
    changeCheckbox: (state, action: PayloadAction<IActionProps>) => {
      if (action.payload.type === TypeListProp.CONTAINER) {
        const changedElement = state.data.find((item) => item.id === action.payload.id);
        if (changedElement) {
          const value = !changedElement.checkbox;
          changedElement.checkbox = value;
          changedElement.content.map((item) => (item.checkbox = value));
        }
      } else {
        if (action.payload.parrentId) {
          const parrentElement = state.data.find((item) => item.id === action.payload.parrentId);
          if (parrentElement) {
            const changedElement = parrentElement.content.find(
              (item) => item.id === action.payload.id
            );
            if (changedElement) changedElement.checkbox = !changedElement.checkbox;
          }
        }
      }
    },
    changeDescription: (state, action: PayloadAction<IActionPropsWithText>) => {
      if (action.payload.type === TypeListProp.CONTAINER) {
        const changedElement = state.data.find((item) => item.id === action.payload.id);
        if (changedElement) {
          changedElement.description = action.payload.text;
        }
      } else {
        if (action.payload.parrentId) {
          const parrentElement = state.data.find((item) => item.id === action.payload.parrentId);
          if (parrentElement) {
            const changedElement = parrentElement.content.find(
              (item) => item.id === action.payload.id
            );
            if (changedElement) changedElement.description = action.payload.text;
          }
        }
      }
    },
    changeName: (state, action: PayloadAction<IActionPropsWithText>) => {
      if (action.payload.type === TypeListProp.CONTAINER) {
        const changedElement = state.data.find((item) => item.id === action.payload.id);
        if (changedElement) {
          changedElement.name = action.payload.text;
        }
      } else {
        if (action.payload.parrentId) {
          const parrentElement = state.data.find((item) => item.id === action.payload.parrentId);
          if (parrentElement) {
            const changedElement = parrentElement.content.find(
              (item) => item.id === action.payload.id
            );
            if (changedElement) changedElement.name = action.payload.text;
          }
        }
      }
    },
  },
});

export const { deleteItem, changeCheckbox, changeDescription, changeName } = dataSlice.actions;

export default dataSlice.reducer;
