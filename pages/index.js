import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import Link from 'next/link';

import { Provider } from 'react-redux';
import store from '../redux/store';

import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout';

import GeneralCharacter from './generalcharacter'

const client = new ApolloClient({
    uri: "https://www.dnd5eapi.co/graphql", 
    cache: new InMemoryCache()
});

export default function Home() {
    return (
        <ApolloProvider client={client}>
            <Layout Title="Let's Get Started...">
                <GeneralCharacter />
            </Layout>
        </ApolloProvider>
    )
}