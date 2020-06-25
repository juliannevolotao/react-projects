import styled from "styled-components";

export const KeyContainer = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${(props) => `${props.darkMode ? "#454545" : "#E4E4E4"}`};
  color: ${(props) => `${props.darkMode ? "#FFFFFF" : "#404040"}`};
  font-size: 40px;
  border-radius: 5px;
  font-weight: bold;
  border: none;
  margin-bottom: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    transform: scale(.98);
    filter: brightness(.9);
  }
`;
