import React from 'react';
import Link from 'next/link';
import { Action, ButtonDisplay, Embed } from '../styles/globals'
import Layout from '../components/Layout';

export default function Download() {
    return (
        <Layout Title="Download Character Sheet">
            <Embed src="https://media.wizards.com/2016/dnd/downloads/5E_CharacterSheet_Fillable.pdf" scrolling="auto" />
            <ButtonDisplay>
                <Action>Download Character Sheet as PDF</Action>
                <Link href="/">
                    <Action>Start Over</Action>
                </Link>
            </ButtonDisplay>
        </Layout>
    )
}