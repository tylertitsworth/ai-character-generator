import React from 'react';
import Link from 'next/link';

import { Action } from '../styles/globals'
import Layout from '../components/Layout';

export default function Download() {
    return (
        <Layout Title="Backstory">
                <ul>
                    <li>
                        <Action>Download Character Sheet as PDF</Action>
                    </li>
                    <li>
                        <Link href="/">
                            <Action>Start Over</Action>
                        </Link>
                    </li>
                </ul>
        </Layout>
    )
}