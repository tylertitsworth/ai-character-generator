import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import {
    getClass,
    getRace,
    getAbilityScores,
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
    var currClass = useSelector(getClass)
    var allClasses = useSelector(getAllClasses)


    var currAbilityScores = useSelector(getAbilityScores)
    const [strMod, setStrMod] = useState(Math.floor((currAbilityScores[0] - 10) / 2))
    const [dexMod, setDexMod] = useState(Math.floor((currAbilityScores[1] - 10) / 2))
    const [conMod, setConMod] = useState(Math.floor((currAbilityScores[2] - 10) / 2))
    const [intMod, setIntMod] = useState(Math.floor((currAbilityScores[3] - 10) / 2))
    const [wisMod, setWisMod] = useState(Math.floor((currAbilityScores[4] - 10) / 2))
    const [chaMod, setChaMod] = useState(Math.floor((currAbilityScores[5] - 10) / 2))


    var currClassData
    var spellCastingMod
    var spellAttackBonus
    var spellCastingAbility
    var currSpellCastingAbility
    if (allClasses != undefined) {
        allClasses.forEach((option) => {
            if (option[1].name == currClass) {
                currClassData = option[1]
                spellCastingAbility = option[1].spellcasting.spellcasting_ability.name

            }
        })
        if (spellCastingAbility == "STR") {
            spellCastingMod = strMod;
        }
        else if (spellCastingAbility == "DEX") {
            spellCastingMod = dexMod
        }
        else if (spellCastingAbility == "CON") {
            spellCastingMod = conMod;
        }
        else if (spellCastingAbility == "INT") {
            spellCastingMod = intMod;
        }
        else if (spellCastingAbility == "WIS") {
            spellCastingMod = wisMod;
        }
        else if (spellCastingAbility == "CHA") {
            spellCastingMod = chaMod;
        }
        spellAttackBonus = (spellCastingMod + 2)
    }

    return (
        <CharSheet onChange={(e) => { e.preventDefault(); }}>
            <StyledHeader>
                <CharName>
                    <label>Spellcasting Class</label><input name="charname" value={currClass} onChange={(e) => { e.preventDefault(); }}></input>
                </CharName>
                <SpellMisc>
                    <div>
                        <label>Spellcasting Ability</label>
                        <input value={spellCastingAbility} onChange={(e) => { e.preventDefault(); }}></input>
                    </div>
                    <div>
                        <label>Spell Save DC</label>
                        <input value={"+" + (8 + spellAttackBonus)}></input>
                    </div>
                    <div>
                        <label>Spell Attack Bonus</label>
                        <input value={"+" + (spellCastingMod + 2) }></input>
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