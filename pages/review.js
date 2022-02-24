import React from 'react';
import Link from 'next/link';

import Layout from '../components/Layout';

export default function Review() {
    return (
        <Layout>
            <h1>Review Information</h1>
            <ul>
                <li>
                    <Link href="/download">
                        <a>Continue</a>
                    </Link>
                </li>
                <li>
                    <Link href="/backstory">
                        <a>Go Back</a>
                    </Link>
                </li>
            </ul>
        </Layout>
    )
}