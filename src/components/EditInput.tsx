import { ChangeEvent } from "react";

type IProps = {
  text: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
};

const EditInput = ({ text, handleChange, handleClick }: IProps) => {
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          handleChange(e);
        }}
      ></input>
      <button onClick={handleClick}>
        <span className="material-icons">check</span>
      </button>
    </>
  );
};

export default EditInput;
