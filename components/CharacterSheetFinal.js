import React, { useState, useEffect } from 'react';

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

import {
    FlexRow, FlexColumn, SpellPage, CharSheet, CharName, MainContent,
    StyledHeader, SpellMisc, Cantrips, SpellColumn, KnownSpells, SpellLevel,
    Spell
} from '../styles/charactersheet'

export default function CharacterSheetFinal() {
    return (
        <CharSheet>
            <StyledHeader>
                <CharName>
                    <label>Spellcasting Class</label><input name="charname" ></input>
                </CharName>
                <SpellMisc>
                    <div>
                        <label>Spellcasting Ability</label>
                        <input ></input>
                    </div>
                    <div>
                        <label>Spell Save DC</label>
                        <input ></input>
                    </div>
                    <div>
                        <label>Spell Attack Bonus</label>
                        <input ></input>
                    </div>

                </SpellMisc>
            </StyledHeader>
            <MainContent>
                <SpellPage>
                    <SpellColumn>
                        <Cantrips>
                            <SpellLevel>
                                <h1>0</h1>
                                <label>Cantrips</label>
                            </SpellLevel>
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                        </Cantrips>
                        <KnownSpells>
                            <SpellLevel>
                                <h1>1</h1>
                                <input placeholder="slots total" /><input placeholder="slots expended"/>
                            </SpellLevel>
                            <Spell><input type="checkbox"/><input type="text" placeholder="Spell Name" /></Spell>
                            <Spell><input type="checkbox"/><input type="text"/></Spell>
                            <Spell><input type="checkbox"/><input type="text"/></Spell>
                            <Spell><input type="checkbox"/><input type="text"/></Spell>
                            <Spell><input type="checkbox"/><input type="text"/></Spell>
                            <Spell><input type="checkbox"/><input type="text"/></Spell>
                            <Spell><input type="checkbox"/><input type="text"/></Spell>
                            <Spell><input type="checkbox"/><input type="text"/></Spell>
                            <Spell><input type="checkbox"/><input type="text"/></Spell>
                            <Spell><input type="checkbox"/><input type="text"/></Spell>
                        </KnownSpells>
                        <KnownSpells>
                            <SpellLevel>
                                <h1>2</h1>
                                <input /><input />
                            </SpellLevel>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                        </KnownSpells>
                    </SpellColumn>
                    <SpellColumn>
                        <KnownSpells>
                            <SpellLevel>
                                <h1>3</h1>
                                <input /><input  />
                            </SpellLevel>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                        </KnownSpells>
                        <KnownSpells>
                            <SpellLevel>
                                <h1>4</h1>
                                <input /><input />
                            </SpellLevel>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                        </KnownSpells>
                        <KnownSpells>
                            <SpellLevel>
                                <h1>5</h1>
                                <input /><input />
                            </SpellLevel>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                        </KnownSpells>
                    </SpellColumn>
                    <SpellColumn>
                        <KnownSpells>
                            <SpellLevel>
                                <h1>6</h1>
                                <input /><input />
                            </SpellLevel>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                        </KnownSpells>
                        <KnownSpells>
                            <SpellLevel>
                                <h1>7</h1>
                                <input /><input />
                            </SpellLevel>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                        </KnownSpells>
                        <KnownSpells>
                            <SpellLevel>
                                <h1>8</h1>
                                <input /><input />
                            </SpellLevel>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                        </KnownSpells>
                        <KnownSpells>
                            <SpellLevel>
                                <h1>9</h1>
                                <input /><input />
                            </SpellLevel>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                            <Spell><input type="checkbox" /><input type="text" /></Spell>
                        </KnownSpells>
                    </SpellColumn>
                </SpellPage>
            </MainContent>
        </CharSheet>
    )
}