import styled from "styled-components";
import TextInput from "./TextInput";

function _Password({ className }) {
  return <TextInput className={className} />;
}

const Password = styled(_Password)``;
export default Password;
