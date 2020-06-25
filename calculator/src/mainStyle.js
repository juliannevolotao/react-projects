import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => `${ props.dark ? '#414141' : '#7C67CD'}`};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;
