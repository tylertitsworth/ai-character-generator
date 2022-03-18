import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { getClass, getStory } from '../redux/selectors';
import { FooterDiv } from '../styles/globals'

export default function Footer() {
    return (
        <FooterDiv>
            <h5>Created by:</h5>
            <h5><a href="https://github.com/titswort" target="_blank" rel="noopener noreferrer">Tyler Titsworth</a></h5>
            <h5><a href="https://github.com/MiguelCoding" target="_blank" rel="noopener noreferrer">Miguel Ruiz</a></h5>
            <h5><a href="https://github.com/kjiroux" target="_blank" rel="noopener noreferrer">Kira L. Jiroux</a></h5>
        </FooterDiv>
    )
}