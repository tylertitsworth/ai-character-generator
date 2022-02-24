import React from 'react';
import Link from 'next/link';

import Layout from '../components/Layout';

export default function Download() {
    return (
        <Layout>
            <h1>Download Page</h1>
            <ul>
                <li>
                    <button>Download</button>
                </li>
                <li>
                    <Link href="/">
                        <a>Start Anew</a>
                    </Link>
                </li>
            </ul>
        </Layout>
    )
}