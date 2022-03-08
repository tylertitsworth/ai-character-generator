import React from 'react';
import Link from 'next/link';
import Pdf from 'react-to-pdf'

import Layout from '../components/Layout';
import { Action, ButtonDisplay } from '../styles/globals'

const ref = React.createRef();

export default function Review() {
    return (
        <Layout Title="Review Information">
            <div ref={ref}> PDF Container </div>
            <ButtonDisplay>
                <Pdf targetRef={ref} filename="AI-Generated-5e-Character.pdf">
                    {({ toPdf }) => <Action onClick={toPdf}>Download PDF</Action>}
                </Pdf>
                <Link href="/backstory">
                    <Action>Go Back</Action>
                </Link>
            </ButtonDisplay>
        </Layout>
    )
}