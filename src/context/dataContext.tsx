import { TypeListProp } from "enums/typeListProp";
import { ITableRow } from "interfaces/tableRow";
import { createContext, memo, PropsWithChildren, useState } from "react";
import { mockData } from "utils/mockData";

interface IDataContext {
  data: ITableRow[];
  setNewData(
    id: number,
    type: TypeListProp.CONTAINER | TypeListProp.ITEM,
    parrentId?: number
  ): void;
}

export const DataContext = createContext<IDataContext>({
  data: [],
  setNewData: () => {},
});

export const DataProvider = memo(({ children }: PropsWithChildren) => {
  const [data, setData] = useState(mockData);

  const setNewData = (
    id: number,
    type: TypeListProp.CONTAINER | TypeListProp.ITEM,
    parrentId?: number
  ) => {
    if (type === TypeListProp.CONTAINER) {
      setData(data.filter((item) => item.id !== id));
    } else {
      const newData = [...data];
      const newDataItem = data.find((item) => item.id === parrentId);
      if (newDataItem) {
        const index = data.indexOf(newDataItem);
        newDataItem.content = newDataItem?.content.filter((item) => item.id !== id);
        newData.splice(index, 1, newDataItem);
        setData(newData);
      }
    }
  };

  return (
    <DataContext.Provider
      value={{
        data,
        setNewData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
});
