import React from 'react';
import Link from 'next/link';

import Layout from '../components/Layout';
import { Action } from '../styles/globals'

export default function Review() {
    return (
        <Layout Title="Review Information">
            <ul>
                <li>
                    <Link href="/download">
                        <Action>Continue</Action>
                    </Link>
                </li>
                <li>
                    <Link href="/backstory">
                        <Action>Go Back</Action>
                    </Link>
                </li>
            </ul>
        </Layout>
    )
}