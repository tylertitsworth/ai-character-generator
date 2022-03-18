import React from 'react';
import { Frame, Page, Title } from '../styles/globals'

import Footer from './Footer';
import Sidebar from './SideNavbar'

export default function Layout(props) {
    return (
        <Frame>
            <Sidebar />
            <Page>
                <Title>{props.Title}</Title>
                {props.children}
                <footer><Footer/></footer>
            </Page>
        </Frame>
    )
}