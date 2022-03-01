import React from 'react';

import { Frame, Page, Title } from '../styles/globals'
import Sidebar from './SideNavbar'

export default function Layout(props) {
    return (
        <Frame>
            <Sidebar />
            <Page>
                <Title>{props.Title}</Title>
                {props.children}
            </Page>
        </Frame>
    )
}