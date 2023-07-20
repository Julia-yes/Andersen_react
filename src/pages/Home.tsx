import TableRow from "components/TableRow";
import { DataContext } from "context/dataContext";
import { TypeListProp } from "enums/typeListProp";
import { useContext } from "react";
import { styled } from "styled-components";
import { Colors } from "enums/colors";

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
  const { data } = useContext(DataContext);

  const focusElement = (e: React.MouseEvent<HTMLTableSectionElement>) => {
    const allCells = document.querySelectorAll("td");
    allCells.forEach((item) => item.classList.remove("onFocus"));
    const elem = e.target as HTMLElement;
    const currentCell = findTDElem(elem);
    if (currentCell) currentCell.classList.add("onFocus");
  };

  function findTDElem(elem: HTMLElement) {
    if (elem.tagName === "TD") {
      return elem;
    } else {
      if (elem.parentElement) return findTDElem(elem.parentElement);
    }
  }

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
