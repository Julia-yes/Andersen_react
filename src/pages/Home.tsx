import TableRow from "components/TableRow";
import { DataContext } from "context/dataContext";
import { TypeListProp } from "enums/typeListProp";
import { useContext } from "react";
import { styled } from "styled-components";

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
`;

function Home() {
  const { data } = useContext(DataContext);
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
      <tbody>
        {data.map((dataItem, index) => (
          <TableRow item={dataItem} key={dataItem.id} index={index} type={TypeListProp.CONTAINER} />
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Home;
