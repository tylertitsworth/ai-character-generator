import React from 'react';
import Link from 'next/link';

import Layout from '../components/Layout';
import { Action } from '../styles/globals'

import store from '../redux/store';
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
import { writeSubclass } from '../redux/actions'

function TestStore() {
    const dispatch = useDispatch();
    dispatch(writeSubclass("--- changed value ---"))
    return 0;
}

export default function Backstory() {

    var test = TestStore()

    return (
            <Layout Title="Backstory">
                <ul>
                    <li>
                        <Link href="/review">
                            <Action>Continue</Action>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Action>Go Back</Action>
                        </Link>
                    </li>
                </ul>
            </Layout>
    )
}