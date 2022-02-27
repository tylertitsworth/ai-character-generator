import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Link from 'next/link';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Layout from '../components/Layout';

import GeneralCharacter from './generalcharacter'

const client = new ApolloClient({
    uri: "https://www.dnd5eapi.co/graphql", 
    cache: new InMemoryCache()
});

export default function Home() {
    return (
        <ApolloProvider client={client}>
            <Layout>
                <GeneralCharacter />
            </Layout>
        </ApolloProvider>
    )
}
