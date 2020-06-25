import styled from "styled-components";

export const CalcAndSwitch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: fit-content;
  width: 440px;
  height: 95vh;
`;

export const SwitchButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  background-color: ${(props) => `${props.darkMode ? "#7A7A7A" : "#FFFFFF"}`};
  color: ${(props) => `${props.darkMode ? "#FFFFFF" : "#7460C6"}`};
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CalculatorContainer = styled.div`
  width: 100%;
  height: calc(100% - 52px);
  border-radius: 10px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => `${props.darkMode ? "#7A7A7A" : "#FFFFFF"}`};
  padding: 30px;
  box-sizing: border-box;
  transition: all 0.3s;
`;

export const CalculatorScreen = styled.div`
  width: 100%;
  background-color: ${(props) => `${props.darkMode ? "#A0A0A0" : "#E4E4E4"}`};
  height: 120px;
  border-radius: 5px;
  transition: all 0.3s;
  padding: 20px 30px;
  box-sizing: border-box;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center
`;

export const CountLine = styled.p`
  font-size: 26px;
  color: ${(props) => `${props.darkMode ? "#FFFFFF" : "#6B6B6B"}`};
`;

export const ResultLine = styled.h3`
  font-size: 38px;
  color: ${(props) => `${props.darkMode ? "#FFFFFF" : "#404040"}`};
`;

export const ClearButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const ClearButton = styled.button`
  background-color: #9D88F3;
  color: white;
  font-weight: bold;
  font-size: 14px;
  width: calc((100% / 2) - 10px);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  text-transform: uppercase;
  border-radius: 5px;
  transition: all .2s;
  cursor: pointer;

  &:hover {
    transform: scale(0.98);
    box-shadow: 0px 0px 2px #9D88F3;
  }

  &:active {
    background-color: #7460C6;
  }

`

export const MiddleContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const MiddleNumbers = styled.div`
  width: calc(100% - 100px);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row-reverse;
`;

export const MiddleActions = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const BottomButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

`; 

export const EqualButton = styled.button`
  width: 180px;
  height: 80px;
  background-color: #7460C6;
  border:none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  border-radius: 5px;
  color: white;

  &:hover {
    transform: scale(.98);
    filter: brightness(.9);
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
`;

