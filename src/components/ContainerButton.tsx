import { useState } from "react";
import Button from "./Button";
import { IListItem } from "interfaces/listItem";

type IProps = {
  content: IListItem[];
  callback(): void;
};

function ContainerButton({ content, callback }: IProps) {
  const [isShown, setShown] = useState(false);
  const showList = () => {
    setShown(!isShown);
    callback();
  };
  return (
    <>
      <span>({content.length})</span>
      <Button callback={showList}>
        <span className="material-icons">{isShown ? "remove" : "add"}</span>
      </Button>
    </>
  );
}

export default ContainerButton;
