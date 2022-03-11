import React from 'react';
import Link from 'next/link';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer'
import Layout from '../components/Layout';

import { Action, ButtonDisplay } from '../styles/globals'

function TestDocument() {
    return (
        <Document>
            <Page size="letter">
                <View>
                    <Text>Test Section</Text>
                </View>
            </Page>
            <Page>
                <Text>Section 2</Text>
            </Page>
        </Document>
    )
}
// https://github.com/diegomura/react-pdf
export default function Review() {
    return (
        <Layout Title="Review Information">
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

        </Layout>
    )
}
