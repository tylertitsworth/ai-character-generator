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
            <h5>Tyler Titsworth</h5>
            <h5>Miguel Ruiz</h5>
            <h5>Kira L. Jiroux</h5>
        </FooterDiv>
    )
}