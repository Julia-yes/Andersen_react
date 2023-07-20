import { ITableRow } from "interfaces/tableRow";
import { useContext, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { IListItem } from "interfaces/listItem";
import ContainerButton from "./ContainerButton";
import { DataContext } from "context/dataContext";
import { TypeListProp } from "enums/typeListProp";

const StyledCell = styled.div`
  display: flex;
  justify-content: space-around;
`;

type IProps = {
  item: ITableRow | IListItem;
  index: number;
  type: TypeListProp.CONTAINER | TypeListProp.ITEM;
  parrentId?: number;
};

function TableRow({ item, index, type, parrentId }: IProps) {
  console.log(item, index, type, parrentId);
  const { setNewData } = useContext(DataContext);
  const [isShown, setShown] = useState(false);

  const showItems = () => {
    setShown(!isShown);
  };
  const deleteItem = () => {
    setNewData(item.id, type, parrentId && parrentId);
  };
  return (
    <>
      <tr>
        <td>
          <StyledCell>
            {item.name}
            {"content" in item && <ContainerButton content={item.content} callback={showItems} />}
          </StyledCell>
        </td>
        <td>
          <input type="checkbox" defaultChecked={item.checkbox} />
        </td>
        <td>{item.description}</td>
        <td>
          <Button callback={deleteItem}>
            <span className="material-icons">delete</span>
          </Button>
        </td>
      </tr>
      {isShown &&
        "content" in item &&
        item.content.map((dataItem, index) => (
          <TableRow
            item={dataItem}
            key={dataItem.id}
            index={index}
            type={TypeListProp.ITEM}
            parrentId={item.id}
          />
        ))}
    </>
  );
}

export default TableRow;
