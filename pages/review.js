import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Pdf from 'react-to-pdf'
import { jsPDF } from 'jspdf';
import Layout from '../components/Layout';
import CharacterSheet from '../components/CharacterSheet';
import CharacterSheetCont from '../components/CharacterSheetCont';
import CharacterSheetFinal from '../components/CharacterSheetFinal';
import { Action, ButtonDisplay, Error, FlexRow } from '../styles/globals'


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

    return (
        <Layout Title="Review Information">

            {allClasses !== undefined ?
                <>
                    <div ref={ref}>
                        <CharacterSheet />
                    </div>
                    <div>
                        <CharacterSheetCont />
                    </div>
                    <div>
                        <CharacterSheetFinal />
                    </div>

                    <ButtonDisplay>
                        <Pdf targetRef={ref} filename="AI-Generated-5e-Character.pdf">
                            {({ toPdf }) => <Action onClick={toPdf}>Download PDF</Action>}
                        </Pdf>
                        <Link href="/backstory">
                            <Action>Go Back</Action>
                        </Link>
                    </ButtonDisplay>
                </>
                :
                <Error>
                    <h1>You must start this process from the very beginning.</h1>
                    <Link href="/">
                        <Action>To The Beginning</Action>
                    </Link>
                </Error>
            }
        </Layout>
    )
}

