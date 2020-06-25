import React, { useState, useEffect } from "react";

import {
  CalcAndSwitch,
  SwitchButton,
  CalculatorContainer,
  CalculatorScreen,
  CountLine,
  ResultLine,
  ClearButtons,
  ClearButton,
  MiddleContent,
  MiddleNumbers,
  MiddleActions,
  BottomButtons,
  EqualButton,
  Button,
  
} from "./styles";
import { FiMoon, FiSun } from "react-icons/fi";
import { FaPlus, FaMinus, FaTimes, FaDivide, FaEquals } from "react-icons/fa";

import NumberKey from "../../components/NumberKey/index.jsx";
import ActionKey from "../../components/ActionKey/index.jsx";

export default function Calculator({ changeDarkMode }) {
  const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  const [darkMode, setDarkMode] = useState(false);

  const handleChangeColorTheme = () => {
    setDarkMode(!darkMode);
    changeDarkMode(!darkMode);
  };

  const handleKeyClick = (keyValue) => {
    console.log(keyValue);
  };

  return (
    <>
      <CalcAndSwitch>
        <SwitchButton
          onClick={() => handleChangeColorTheme()}
          darkMode={darkMode}
        >
          {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
        </SwitchButton>
        <CalculatorContainer darkMode={darkMode}>
          {/* Visor de resultado */}
          <CalculatorScreen darkMode={darkMode}>
            <CountLine> 2 + 4 </CountLine>
            <ResultLine> = 6</ResultLine>
          </CalculatorScreen>

          {/* Botões de limpar e apagar */}
          <ClearButtons>
            <ClearButton onClick={() => handleKeyClick("clear")}> Clear </ClearButton>
            <ClearButton onClick={() => handleKeyClick("backspace")}> Backspace </ClearButton>
          </ClearButtons>

          <MiddleContent>
            {/* Teclado numérico de 1 a 7 */}
            <MiddleNumbers>
              {numbers.map((number) => (
                <Button key={number} onClick={() => handleKeyClick(number)}>
                  <NumberKey darkMode={darkMode}>{number}</NumberKey>
                </Button>
              ))}
            </MiddleNumbers>

            {/* Botões de ação + = * / */}
            <MiddleActions>
              <Button onClick={() => handleKeyClick("/")}>
                <ActionKey>
                  <FaDivide size={30} />
                </ActionKey>
              </Button>

              <Button onClick={() => handleKeyClick("*")}>
                <ActionKey>
                  <FaTimes size={30} />
                </ActionKey>
              </Button>

              <Button onClick={() => handleKeyClick("-")}>
                <ActionKey>
                  <FaMinus size={30} />
                </ActionKey>
              </Button>

              <Button onClick={() => handleKeyClick("+")}>
                <ActionKey>
                  <FaPlus size={30} />
                </ActionKey>
              </Button>
            </MiddleActions>
          </MiddleContent>

          {/* Botões de baixo 0 . = */}
          <BottomButtons>
            <Button onClick={() => handleKeyClick(0)}>
              <NumberKey darkMode={darkMode}> 0 </NumberKey>
            </Button>

            <Button onClick={() => handleKeyClick(".")}>
              <NumberKey darkMode={darkMode}> . </NumberKey>
            </Button>

            <EqualButton onClick={() => handleKeyClick("=")}>
              <FaEquals size={40} />
            </EqualButton>
          </BottomButtons>
        </CalculatorContainer>
      </CalcAndSwitch>
    </>
  );
}
