import React from 'react';
import Link from 'next/link';

export default function GeneralCharacter() {
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