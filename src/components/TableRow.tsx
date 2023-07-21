import { ITableRow } from "interfaces/tableRow";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { IListItem } from "interfaces/listItem";
import ContainerButton from "./ContainerButton";
import { TypeListProp } from "enums/typeListProp";
import { Colors } from "enums/colors";
import { useAppDispatch } from "redux/hooks";
import { deleteItem, changeCheckbox, changeDescription, changeName } from "redux/dataReducer";
import EditInput from "./EditInput";

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
  const [editModeName, setEditModeName] = useState(false);
  const [editModeDescription, setEditModeDescription] = useState(false);
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const dispatch = useAppDispatch();

  const showItems = () => {
    setShown(!isShown);
  };
  const handleClick = () => {
    if (parrentId) dispatch(deleteItem({ id: item.id, type, parrentId }));
    dispatch(deleteItem({ id: item.id, type }));
  };

  const handleChange = () => {
    if (parrentId) dispatch(changeCheckbox({ id: item.id, type, parrentId }));
    dispatch(changeCheckbox({ id: item.id, type }));
  };

  const changeInputName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const openEditModeName = () => {
    setEditModeName(true);
  };

  const closeEditModeName = () => {
    setEditModeName(false);
    if (parrentId) dispatch(changeName({ id: item.id, type, text: name, parrentId }));
    dispatch(changeName({ id: item.id, text: name, type }));
  };

  const changeInputDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.currentTarget.value);
  };

  const openEditModeDescription = () => {
    setEditModeDescription(true);
  };

  const closeEditModeDescription = () => {
    setEditModeDescription(false);
    if (parrentId) dispatch(changeDescription({ id: item.id, type, text: description, parrentId }));
    dispatch(changeDescription({ id: item.id, text: description, type }));
  };

  return (
    <>
      <tr>
        <StyledCell>
          <StyledCellContainer onDoubleClick={openEditModeName}>
            {editModeName ? (
              <EditInput
                text={name}
                handleChange={changeInputName}
                handleClick={closeEditModeName}
              />
            ) : (
              name
            )}
            {"content" in item && <ContainerButton content={item.content} callback={showItems} />}
          </StyledCellContainer>
        </StyledCell>
        <StyledCell>
          <input type="checkbox" checked={item.checkbox} onChange={handleChange} />
        </StyledCell>
        <StyledCell onDoubleClick={openEditModeDescription}>
          {editModeDescription ? (
            <EditInput
              text={description}
              handleChange={changeInputDescription}
              handleClick={closeEditModeDescription}
            />
          ) : (
            description
          )}
        </StyledCell>
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
