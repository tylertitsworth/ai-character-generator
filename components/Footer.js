import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { getClass, getStory } from '../redux/selectors';
import { FooterDiv } from '../styles/globals'

export default function Footer(props) {
    return (

        <FooterDiv>
            <h4>Created by:</h4>
            <section>
                <h5>Tyler Titsworth</h5>
                <h5>Miguel Ruiz</h5>
                <h5>Kira L. Jiroux</h5>
             </section>
        </FooterDiv>
    )
}