import { ChangeEvent } from "react";

type IProps = {
  text: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
};

const EditInput = ({ text, handleChange, handleClick }: IProps) => {
  const handleKey = (e: any) => {
    if (e.code === "Enter") {
      handleClick();
    }
  };
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          handleChange(e);
        }}
        onKeyDown={handleKey}
        onBlur={handleClick}
        autoFocus
      ></input>
    </>
  );
};

export default EditInput;
