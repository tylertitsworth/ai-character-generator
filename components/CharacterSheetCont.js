import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import {
    getClass,
    getRace,
    getStory,
    getAllClasses,
    getAllRaces,
    getAllBackgrounds,
    getAllAlignments,
    getAllSkills
} from '../redux/selectors'

import {
    FlexRow, FlexColumn, FlexPage, CharSheet, CharName, Misc, MainContent,
    CharacterAppearance, AlliesAndOrganizations, Symbol, Backstory, AdditionalFeatures,
    Treasure
} from '../styles/charactersheet'

export default function CharacterSheetCont() {
    var currStory = useSelector(getStory)
    return (
        <CharSheet onChange={(e) => { e.preventDefault(); }}>
            <header>
                <CharName>
                    <label>Character Name</label><input name="charname" placeholder="Character Name"></input>
                </CharName>
                <Misc>
                    <ul>
                        <li>
                            <label>Age</label>
                            <input placeholder="30"></input>
                        </li>
                        <li>
                            <label>Height</label>
                            <input placeholder="6'2"></input>
                        </li>
                        <li>
                            <label>Weight</label>
                            <input placeholder="150 lbs"></input>
                        </li>
                        <li>
                            <label>Eyes</label>
                            <input placeholder="Blue"></input>
                        </li>
                        <li>
                            <label>Skin</label>
                            <input placeholder="Pale-green"></input>
                        </li>
                        <li>
                            <label>Hair</label>
                            <input placeholder="Golden"></input>
                        </li>
                    </ul>
                </Misc>
            </header>
            <MainContent>
                <FlexPage>
                    <FlexRow>
                        <CharacterAppearance>
                            <div>
                                <label>Character Appearance</label>
                            </div>
                        </CharacterAppearance>
                        <AlliesAndOrganizations>
                            <section>
                                <textarea></textarea>
                           
                                <Symbol>
                                    <label>Symbols</label>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    Name
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr><td><input /></td></tr>
                                        </tbody>
                                    </table>
                                </Symbol>
                            </section>
                            <label>Allies & Organizations</label>
                        </AlliesAndOrganizations>
                    </FlexRow>
                    <FlexRow>
                        <Backstory>
                            <div>
                                <label>Character Backstory</label><textarea value={currStory}onChange={(e) =>{e.preventDefault();}}></textarea>
                            </div>
                        </Backstory>
                        <FlexColumn>
                            <AdditionalFeatures>
                                <div>
                                    <label>Additional Features & Traits</label><textarea></textarea>
                                </div>
                            </AdditionalFeatures>
                            <Treasure>
                                <div>
                                    <label>Treasure</label><textarea></textarea>
                                </div>
                            </Treasure>
                                
                        </FlexColumn>
                    </FlexRow>
                </FlexPage>
            </MainContent>
        </CharSheet>
    )
}