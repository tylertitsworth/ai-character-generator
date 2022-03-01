import React from 'react';
import Link from 'next/link';

import { Sidebar, Sideaction } from '../styles/globals'

export default function SideNavbar(props) {
    return (
        <Sidebar>
            <ul>
                <li>
                    <Link href="/">
                        <Sideaction>Getting Started</Sideaction>
                    </Link>
                </li>
                <li>
                    <Link href="/backstory">
                        <Sideaction>Backstory</Sideaction>
                    </Link>
                </li>
                <li>
                    <Link href="/review">
                        <Sideaction>Review</Sideaction>
                    </Link>
                </li>
            </ul>
        </Sidebar>
    )
}