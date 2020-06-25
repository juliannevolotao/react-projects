import styled from 'styled-components';

export const KeyContainer = styled.div`
    width: 80px;
    height: 50px;
    background-color: #7460C6;
    color: white;
    border-radius: 5px;
    transition: all .3s;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        transform: scale(.98);
        filter: brightness(.9);
    }
`;