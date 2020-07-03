import React from "react";

import {
  BackgroundStl,
  ModeButtonStl,
  TodoContainerStl,
  ContentContainerStl,
  TitleStl,
  ContainerHeaderStl,
  ButtonAddStl
} from "./styles.js";

export default function Todo() {
  return (
    <BackgroundStl>
      <ContentContainerStl>
        <ModeButtonStl></ModeButtonStl>

        <TodoContainerStl>
            <ContainerHeaderStl>
                <TitleStl>Let's do something</TitleStl>
                <ButtonAddStl> </ButtonAddStl>
            </ContainerHeaderStl>

        </TodoContainerStl>
      </ContentContainerStl>
    </BackgroundStl>
  );
}
