import React from 'react';
import Link from 'next/link';

import Layout from '../components/Layout';

export default function Backstory() {
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