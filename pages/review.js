import React from 'react';
import Link from 'next/link';
import { Document, Page, usePDF } from '@react-pdf/renderer';
import Layout from '../components/Layout';

import { Action, ButtonDisplay } from '../styles/globals'

function TestDocument() {
    console.log(`Building slug: ${slug}`)
    return (
        <Document>
            <Page size="letter">
                <div>test 1</div>
            </Page>
            <Page>
                <div>test 2</div>
            </Page>
        </Document>
    )
}
// https://github.com/diegomura/react-pdf
export default function Review() {
    const [ PDF, setPDF ] = usePDF({ document: TestDocument })
    if (PDF.loading) return <div>Loading</div>;
    if (PDF.error) return <div>Error in PDF Creation</div>;
    return (
        <Layout Title="Review Information">
        
            <ButtonDisplay>
                    <Action href={PDF.url} download="AI_Generated_Character_Sheet.pdf" >Download PDF</Action>
                <Link href="/backstory">
                    <Action>Go Back</Action>
                </Link>
            </ButtonDisplay>

        </Layout>
    )
}