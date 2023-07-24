import { ITableRow } from "interfaces/tableRow";

export const mockData: ITableRow[] = [
  {
    name: "expense",
    id: 1,
    checkbox: true,
    description: "all expenses",
    content: [
      {
        name: "Groceries",
        id: 11,
        checkbox: true,
        description: "food and goods",
      },
      {
        name: "Transport",
        id: 12,
        checkbox: true,
        description: "petrol and travel",
      },
      {
        name: "Health",
        id: 13,
        checkbox: true,
        description: "tests and visits to doctors",
      },
      {
        name: "Leisure",
        id: 14,
        checkbox: true,
        description: "entertainments",
      },
    ],
  },
  {
    name: "income",
    id: 2,
    checkbox: true,
    description: "all incomes",
    content: [
      {
        name: "Salary",
        id: 21,
        checkbox: true,
        description: "permanent salary",
      },
      {
        name: "Gifts",
        id: 22,
        checkbox: true,
        description: "gifts and cash",
      },
    ],
  },
];
