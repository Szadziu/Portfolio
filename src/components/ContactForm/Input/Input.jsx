import * as P from "./parts";

const Input = ({ errors, name, id, placeholder }) => {
  return (
    <>
      <P.Input
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
      ></P.Input>
      <P.Comment>{errors}</P.Comment>
    </>
  );
};

export default Input;
