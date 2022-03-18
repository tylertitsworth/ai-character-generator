import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { getClass, getStory } from '../redux/selectors';
import { Sidebar, Sideaction } from '../styles/globals'
import Footer from './Footer';

export default function SideNavbar(props) {
    var currClass = useSelector(getClass)
    var currStory = useSelector(getStory)
    const router = useRouter();

    return (
        <Sidebar>
            <ul>
                <li>
                    <Link href="/">
                        <Sideaction active={router.pathname == "/" ? "active" : ""}>Getting Started</Sideaction>
                    </Link>
                </li>
                {currClass != undefined ? <>
                    <li>
                        <Link href="/backstory">
                            <Sideaction active={router.pathname == "/backstory" ? "active" : ""}>Build Backstory</Sideaction>
                        </Link>
                    </li>
                    {currStory != undefined ? 
                        <li>
                            <Link href="/review">
                                <Sideaction active={router.pathname == "/review" ? "active" : ""}>Review Results</Sideaction>
                            </Link>
                        </li>
                        : <></> }
                </> : <></>}

            </ul>
        </Sidebar>
    )
}