import TableRow from "components/TableRow";
import { TypeListProp } from "enums/typeListProp";
import { styled } from "styled-components";
import { Colors } from "enums/colors";
import { handleKey } from "utils/handleKey";
import { focusElement } from "utils/focusElement";
import { useAppSelector } from "redux/hooks";

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    border: 1px solid grey;
  }
  td {
    padding: 10px;
    width: 25%;
  }
  .onFocus {
    background-color: ${Colors.BLUE_GRAY};
  }
`;

function Home() {
  document.body.addEventListener("keydown", handleKey);
  const data = useAppSelector((state) => state.data.data);

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Checkbox</th>
          <th>Description</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody onClick={focusElement}>
        {data.map((dataItem, index) => (
          <TableRow item={dataItem} key={dataItem.id} index={index} type={TypeListProp.CONTAINER} />
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Home;
