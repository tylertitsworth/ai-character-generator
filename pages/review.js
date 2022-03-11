import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Document, Page, Text } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer'
import Layout from '../components/Layout';
import { Action, ButtonDisplay } from '../styles/globals'

function TestDocument() {
    // You need to wrap things in the <Text> tag
    return (
        <Document>
            <Page size="letter">
                <Text>text 1</Text>
            </Page>
            <Page>
                <Text>test 2</Text>
            </Page>
        </Document>
    )
}
// https://github.com/diegomura/react-pdf
export default function Review() {
    const [ isClient, setIsClient ] = useState(false);
    useEffect(() => { setIsClient(true); }, [])
    return (
        <Layout Title="Review Information">
        {isClient && (
            <>
                <PDFViewer>
                    <TestDocument/>
                </PDFViewer>
                <ButtonDisplay>
                    <PDFDownloadLink document={<TestDocument/>} fileName={"AI_Generated_Character_Sheet.pdf"}>
                        <Action>Download PDF</Action>
                    </PDFDownloadLink>
                    <Link href="/backstory">
                        <Action>Go Back</Action>
                    </Link>
                </ButtonDisplay>
            </>
        )}
        </Layout>
    )
}
