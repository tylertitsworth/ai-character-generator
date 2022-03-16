import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ReactToPdf from '../components/ReactToPdf'
import Layout from '../components/Layout';
import CharacterSheet from '../components/CharacterSheet';
import CharacterSheetCont from '../components/CharacterSheetCont';
import CharacterSheetFinal from '../components/CharacterSheetFinal';

import { Action, ButtonDisplay, Error } from '../styles/globals'
import { CharSheetContainer } from '../styles/charactersheet';

import { useSelector } from 'react-redux';
import {
    getClass,
    getRace,
    getAllClasses,
    getAllRaces,
    getAllBackgrounds,
    getAllAlignments,
    getAllSkills
} from '../redux/selectors'

const ref = React.createRef();

export default function Review() {
    const allClasses = useSelector(getAllClasses)
    const allRaces = useSelector(getAllRaces)
    const allBackgrounds = useSelector(getAllBackgrounds)
    const allAlignments = useSelector(getAllAlignments)
    const allAbilityScores = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]
    const allSkills = useSelector(getAllSkills)
    var currClass = useSelector(getClass)
    var currRace = useSelector(getRace)
    let width = 0               // how to make dynamically check? Works through typical functionality
    if (allClasses != undefined) width = screen.width;
    return (

        <Layout Title="Review Information">
            {allClasses != undefined ? <>
                <CharSheetContainer>
                    <div ref={ref}>
                        <CharacterSheet />
                        <CharacterSheetCont />
                        <CharacterSheetFinal />
                    </div>
                </CharSheetContainer>
                <ButtonDisplay>
                {width > 360 ? 
                    <ReactToPdf targetRef={ref} imgWidth={210} filename="AI-Generated-5e-Character.pdf">
                        {({ toPdf }) => <Action onClick={toPdf}>Download PDF</Action>}
                    </ReactToPdf>  : <Action>PDF Available on Web</Action>}
                    <Link href="/backstory">
                        <Action>Go Back</Action>
                    </Link>
                </ButtonDisplay>
            </> : <Error>
                <h1>Please start this process from the beginning.</h1>
                <Link href="/">
                    <Action>To The Beginning</Action>
                </Link>
            </Error>}
        </Layout>

    )
}