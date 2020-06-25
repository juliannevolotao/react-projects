import React, {useState, useEffect} from 'react';

import Calculator from './pages/Calculator';
import { Container } from './mainStyle';

export default function App () {
    const [darkMode, setDarkMode]= useState(false);

    const handleChangeColorTheme = (mode) => {
        setDarkMode(mode);
    }

    return (
        <> 
            <Container dark={darkMode}>
                <Calculator changeDarkMode={(mode) => handleChangeColorTheme(mode)} />
            </Container>
        </>
    )
}