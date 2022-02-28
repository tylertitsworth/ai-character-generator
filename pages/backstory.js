import React from 'react';
import Link from 'next/link';

import Layout from '../components/Layout';

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
            <Layout>
                <h1>Backstory</h1>
                <ul>
                    <li>
                        <Link href="/review">
                            <a>Continue</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Go Back</a>
                        </Link>
                    </li>
                </ul>
            </Layout>
    )
}