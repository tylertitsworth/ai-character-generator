import React from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { query } from '../hooks/qltree';

export default function GeneralCharacter() {
    const { data, loading, error } = useQuery(query);
    if(!loading || error) { console.log(data); }
    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li>
                    <Link href="/backstory">
                        <a>Continue</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}