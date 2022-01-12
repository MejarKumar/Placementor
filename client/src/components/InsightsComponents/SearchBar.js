import styled from "styled-components";
const InputField = styled.input`
  width: 90%;
  margin: 2rem 2.5%;
  height: 3rem;
  padding: 0 1rem;
  outline: none;
  border: rgba(138, 94, 191, 1) solid 1.5px;
  border-radius: 7.5px;
  color: rgba(138, 94, 191, 1);
  font-weight: 700;
`;

const Button = styled.button`
  height: 3rem;
  margin: 2rem 2.5%;
  padding: 0 1rem;
  width: 30%;
  background: linear-gradient(
    90deg,
    rgba(238, 109, 152, 1) 15%,
    rgba(138, 94, 191, 1) 85%
  );
  color: #fff;
  outline: none;
  border: none;
  border-radius: 7.5px;
  position: absolute;
  transform: translateX(-100%);
  cursor: pointer;
`;
export default function SearchBar() {
  return (
    <>
      <InputField placeholder="Search Here"></InputField>
      <Button>Search</Button>
    </>
  );
}
