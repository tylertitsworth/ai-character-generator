import React from 'react';
import Link from 'next/link';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Layout from '../components/Layout';

import GeneralCharacter from './generalcharacter'




export default function Home() {
    return (
        <Layout>
            <GeneralCharacter />
        </Layout>
    )
}
