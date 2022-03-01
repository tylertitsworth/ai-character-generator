import React from 'react';

import { Frame, Title } from '../styles/globals'

export default function Layout(props) {
    return (
        <Frame>
            <Title>{props.Title}</Title>
            {props.children}
        </Frame>
    )
}