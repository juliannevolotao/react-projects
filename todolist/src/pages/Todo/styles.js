import styled from 'styled-components';

export const BackgroundStl = styled.div`
    width: 100%;
    background-color: ${(props) => props.darkMode ? "#414141" : "#23B18F"};
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const ContentContainerStl = styled.div`
    width: 100%;
    max-width: 1024px;
    height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`

export const ModeButtonStl = styled.button`
    width: 32px;
    height: 32px;
    background-color: ${(props) => `${props.darkMode ? "#7A7A7A" : "#F9F9F9"}` };
    box-shadow: 0px 0px 10px rgba(0,0,0, .25);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    border-radius: 50px;

`

export const TodoContainerStl = styled.div`
    width: 100%;
    background-color: ${(props) => `${props.darkMode ? "#7A7A7A" : "#F9F9F9"} `};
    padding: 50px 30px;
    box-shadow: 0px 0px 30px rgba(0,0,0, .25);
    box-sizing: border-box;
    border-radius: 10px;
    min-height: 550px;
`

export const TitleStl = styled.h2`
    font-size: 30px;
    text-transform: uppercase;
    color: ${props => `${props.darkMode ? "#FFFFFF" : "#23B18F"}`};
`

export const ContainerHeaderStl = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const ButtonAddStl = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    box-shadow: 0px 0px 10px rgba(0,0,0, .25);
    background-color: ${props => props.darkMode ? "#FFFFFF" : "#23B18F"}
`
