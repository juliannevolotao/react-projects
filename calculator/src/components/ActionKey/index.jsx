import React from 'react';

import {KeyContainer} from './styles.js';

export default function ActionKey(props) {

    return (
        <KeyContainer>
            {props.children}
        </KeyContainer>
    )
}