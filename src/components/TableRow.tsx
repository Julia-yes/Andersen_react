import { ITableRow } from "interfaces/tableRow";
import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { IListItem } from "interfaces/listItem";
import ContainerButton from "./ContainerButton";
import { TypeListProp } from "enums/typeListProp";
import { Colors } from "enums/colors";
import { useAppDispatch } from "redux/hooks";
import { deleteItem } from "redux/dataReducer";

const StyledCellContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledCell = styled.td`
  cursor: pointer;
  &:hover {
    background-color: ${Colors.BLUE_GRAY};
  }
`;

type IProps = {
  item: ITableRow | IListItem;
  index: number;
  type: TypeListProp.CONTAINER | TypeListProp.ITEM;
  parrentId?: number;
};

function TableRow({ item, index, type, parrentId }: IProps) {
  const [isShown, setShown] = useState(false);
  const dispatch = useAppDispatch();

  const showItems = () => {
    setShown(!isShown);
  };
  const handleClick = () => {
    if (parrentId) dispatch(deleteItem({ id: item.id, type, parrentId }));
    dispatch(deleteItem({ id: item.id, type }));
  };

  return (
    <>
      <tr>
        <StyledCell>
          <StyledCellContainer>
            {item.name}
            {"content" in item && <ContainerButton content={item.content} callback={showItems} />}
          </StyledCellContainer>
        </StyledCell>
        <StyledCell>
          <input type="checkbox" defaultChecked={item.checkbox} />
        </StyledCell>
        <StyledCell>{item.description}</StyledCell>
        <StyledCell>
          <Button callback={handleClick}>
            <span className="material-icons">delete</span>
          </Button>
        </StyledCell>
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
