import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
    getClass,
    getRace,
    getAbilityScores,
    getSkills,
    getAllClasses,
    getAllRaces,
    getAllBackgrounds,
    getAllAlignments,
    getAllSkills
} from '../redux/selectors'

import {
    writeClass,
    writeRace
} from '../redux/actions'

import {
	FlexRow, CharSheet, Charname, Misc, MainContent,
	Attributes, Scores, Score, Modifier, AttrApplications, Inspiration,
	ProficiencyBonus, LabelContainer, ListSection, ListTextInput, ListCheckboxInput,
	PassivePerception, OtherProficiencies, Combat, CombatScore, Hitpoints, RegularHitpoints,
	TemporaryHitpoints, MaxHitpoints, CurrentHitpoints, HitDice, TotalHitDice, RemainingHitDice,
	DeathSaves, Marks, SuccessOrFail, Bubbles, AttacksAndSpellcasting, Equipment, Money,
	Flavor, Features
} from '../styles/charactersheet'


export default function CharacterSheet() {
    const allClasses = useSelector(getAllClasses)
    const allRaces = useSelector(getAllRaces)
    const allBackgrounds = useSelector(getAllBackgrounds)
    const allAlignments = useSelector(getAllAlignments)
    const allAbilityScores = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]
    const allSkills = useSelector(getAllSkills)
    var currClass = useSelector(getClass)
    var currRace = useSelector(getRace)
    var currSkills = useSelector(getSkills)
    var currAbilityScores = useSelector(getAbilityScores)

    const dispatch = useDispatch();

    var currClassData = []
    var currRaceData = []

    console.log("Class: " + currClass + " Race: " + currRace);

    allClasses.forEach((option, index) => {
        if (option[1].name === currClass) {
            currClassData = option[1]
        }
    })

    allRaces.forEach((option, index) => {
        if (option[1].name === currRace) {
            currRaceData = option[1]
        }
    })

    console.log(currRaceData)
    console.log(currClassData)              // I wanted to use this data to fill out other valuese like hit_dice, etc
                                            // but my DnD knowledge has run out :( I don't know what should go where.
                                            // Like the value hit_dice only returns a singular number (6, 8, 10), but hit
                                            // dice themselves in the game are 1d6 or 2d10

    /*
    - Header information contains all top section
    - Main Content contains all other information ( Separated into Sections )
        * ( Section 1 )
        -- Attributes:
            --- Scores (Ability Scores)
            --- AttrApplications
                ---- Inspiration
                ---- Proficiency Bonus
                ---- Saving Throws
                ---- Skills
        -- Passive Perception:
            --- Passive Wisdom
        -- Other Proficiencies

        * ( Section 2)
        -- Combat
            --- Armor Class
            --- Initiative
            --- Speed
            --- Hitpoints
            --- Hit Dice
            --- Deathsaves
        -- Attacks & Spellcasting
        -- Equipment

        * ( Section 3)
        -- Flavor
            --- Personality
            --- Ideals
            --- Bonds
            --- Flaws
        -- Features & Traits
    */

	return (
            <CharSheet>
                <header>
                    <Charname>
                        <label>Character Name</label><input name="charname" placeholder="Character Name"></input>
                    </Charname>
                    <Misc>
                        <ul>
                            <li>
                                <label>Class & Level</label>
                            <select value={currClass} onChange={(event) => { dispatch(writeClass(event.target.value)) }}>
                                    {allClasses.map((option, i) =>
                                        <option key={i} value={option[1].name}>{option[1].name} 1</option>
                                    )
                                    }
                                </select>
                            </li>
                            <li>
                                <label>Background</label>
                                <select  >
                                    {allBackgrounds.map((option, i) =>
                                        <option key={i} value={option[1].name}>{option[1].name}</option>
                                    )
                                    }
                                </select>
                            </li>
                            <li>
                                <label>Player Name</label>
                                <input placeholder="Your Name"></input>
                            </li>
                            <li>
                                <label>Race</label>
                            <select value={currRace} onChange={(event) => { dispatch(writeRace(event.target.value)) }}>
                                    {allRaces.map((option, i) =>
                                        <option key={i} value={option[1].name}>{option[1].name}</option>
                                    )
                                    }
                                </select>
                            </li>
                            <li>
                                <label>Alignment</label>
                                <select  >
                                    {allAlignments.map((option, i) =>
                                        <option key={i} value={option[1].name}>{option[1].name}</option>
                                    )
                                    }
                                </select>
                            </li>
                            <li>
                                <label>Experience Points</label>
                                <input placeholder="3240"></input>
                            </li>
                        </ul>
                    </Misc>
                </header>
                <MainContent>
                    <section>
                        <Attributes>
                            <Scores>
                                <ul>
                                    <li>
                                        <Score>
                                            <label>Strength</label>
                                        <div name="Strengthscore" placeholder="10">{currAbilityScores[0]}</div>
                                        </Score>
                                        <Modifier>
                                            <input name="Strengthmod" placeholder="+0"></input>
                                        </Modifier>
                                    </li>
                                    <li>
                                        <Score>
                                            <label>Dexterity</label>
                                        <div name="Dexterityscore" placeholder="10">{currAbilityScores[1]}</div>
                                        </Score>
                                        <Modifier>
                                            <input name="Dexteritymod" placeholder="+0"></input>
                                        </Modifier>
                                    </li>
                                    <li>
                                        <Score>
                                            <label>Constitution</label>
                                        <div name="Constitutionscore" placeholder="10">{currAbilityScores[2]}</div>
                                        </Score>
                                        <Modifier>
                                            <input name="Constitutionmod" placeholder="+0"></input>
                                        </Modifier>
                                    </li>
                                    <li>
                                        <Score>
                                            <label>Intelligence</label>
                                        <div name="Intelligencescore" placeholder="10">{currAbilityScores[3]}</div>
                                        </Score>
                                        <Modifier>
                                            <input name="Intelligencemod" placeholder="+0"></input>
                                        </Modifier>
                                    </li>
                                    <li>
                                        <Score>
                                            <label>Wisdom</label>
                                        <div name="Wisdomscore" placeholder="10">{currAbilityScores[4]}</div>
                                        </Score>
                                        <Modifier>
                                            <input name="Wisdommod" placeholder="+0"></input>
                                        </Modifier>
                                    </li>
                                    <li>
                                        <Score>
                                            <label>Charisma</label>
                                        <div name="Charismascore" placeholder="10">{currAbilityScores[5]}</div>
                                        </Score>
                                        <Modifier>
                                            <input name="Charismamod" placeholder="+0"></input>
                                        </Modifier>
                                    </li>
                                </ul>
                            </Scores>
                            <AttrApplications>
                                <Inspiration>
                                    <LabelContainer>
                                        <label>Inspiration</label>
                                    </LabelContainer>
                                    <input type="checkbox" />
                                </Inspiration>
                                <ProficiencyBonus>
                                    <LabelContainer>
                                        <label>Proficiency Bonus</label>
                                    </LabelContainer>
                                    <input placeholder="+2" />
                                </ProficiencyBonus>
                                <ListSection>
                                    <ul>
                                        {allAbilityScores.map((ability, i) =>
                                            <li key={i}>
                                                <label>{ability}</label><ListTextInput placeholder="+0" /><ListCheckboxInput type="checkbox" />
                                            </li>
                                        )
                                        }
                                    </ul>
                                    <div>Saving Throws</div>
                                </ListSection>
                                <ListSection>
                                    <ul>
                                    {allSkills.sort(function (a, b) {
                                        if (a[1].name.toLowerCase() < b[1].name.toLowerCase()) return -1;
                                        if (a[1].name.toLowerCase() > b[1].name.toLowerCase()) return 1;
                                        return 0;
                                    }).map((skill, i) => 
                                        <li key={i}>
                                            <label>{skill[1].name}</label><ListTextInput placeholder="+0" /><ListCheckboxInput type="checkbox" />
                                            <span>({skill[1].ability_score.name})</span>
                                        </li>

                                    )}
                                    </ul>
                                    <div>Skills</div>
                                </ListSection>
                            </AttrApplications>
                        </Attributes>
                        <PassivePerception>
                            <LabelContainer>
                                <label>Passive Wisdom (Perception)</label>
                            </LabelContainer>
                            <input placeholder="10" />
                        </PassivePerception>
                        <OtherProficiencies>
                        <label>Other Proficiences and Languages</label>
                        <ul>
                            {currRaceData.languages.map((trait, i) =>
                                <li key={i}>{trait.name}</li>
                            )
                            }
                        </ul>
                        
                       
                        </OtherProficiencies>
                    </section>
                    <section>
                        <Combat>
                            <CombatScore>
                                <div>
                                    <label>Armor Class</label><input placeholder="10" type="text" />
                                </div>
                            </CombatScore>
                            <CombatScore>
                                <div>
                                    <label>Initiative</label><input placeholder="+0" type="text" />
                                </div>
                            </CombatScore>
                            <CombatScore>
                                <div>
                                <label>Speed</label><input placeholder={currRaceData.speed} type="text" />
                                </div>
                            </CombatScore>
                            <Hitpoints>
                                <RegularHitpoints>
                                    <MaxHitpoints>
                                    <label>Hit Point Maximum</label><input placeholder="10" />
                                    </MaxHitpoints>
                                    <CurrentHitpoints>
                                        <label>Current Hit Points</label><input />
                                    </CurrentHitpoints>
                                </RegularHitpoints>
                                <TemporaryHitpoints>
                                    <label>Temporary Hit Points</label><input />
                                </TemporaryHitpoints>
                        </Hitpoints>
                            <FlexRow>
                                <HitDice>
                                    <div>
                                        <TotalHitDice>
                                            <label>Total</label><input placeholder="2d10" />
                                        </TotalHitDice>
                                        <RemainingHitDice>
                                            <label>Hit Dice</label><input />
                                        </RemainingHitDice>
                                    </div>
                                </HitDice>
                                <DeathSaves>
                                <div>
                                    <LabelContainer>
                                        <label>Death Saves</label>
                                    </LabelContainer>
                                    <Marks>
                                        <SuccessOrFail>
                                            <label>Successes</label>
                                            <Bubbles>
                                                <input name="deathsuccess1" type="checkbox" />
                                                <input name="deathsuccess2" type="checkbox" />
                                                <input name="deathsuccess3" type="checkbox" />
                                            </Bubbles>
                                        </SuccessOrFail>
                                        <SuccessOrFail>
                                            <label>Failures</label>
                                            <Bubbles>
                                                <input name="deathfail1" type="checkbox" />
                                                <input name="deathfail2" type="checkbox" />
                                                <input name="deathfail3" type="checkbox" />
                                            </Bubbles>
                                        </SuccessOrFail>
                                    </Marks>
                                </div>
                    </DeathSaves>
                            </FlexRow>
                        </Combat>
                        <AttacksAndSpellcasting>
                            <div>
                                <label>Attacks & Spellcasting</label>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>
                                                Name
                                            </th>
                                            <th>
                                                Atk Bonus
                                            </th>
                                            <th>
                                                Damage/Type
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input name="atkname1" type="text" />
                                            </td>
                                            <td>
                                                <input name="atkbonus1" type="text" />
                                            </td>
                                            <td>
                                                <input name="atkdamage1" type="text" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input name="atkname2" type="text" />
                                            </td>
                                            <td>
                                                <input name="atkbonus2" type="text" />
                                            </td>
                                            <td>
                                                <input name="atkdamage2" type="text" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input name="atkname3" type="text" />
                                            </td>
                                            <td>
                                                <input name="atkbonus3" type="text" />
                                            </td>
                                            <td>
                                                <input name="atkdamage3" type="text" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <textarea></textarea>
                            </div>
                        </AttacksAndSpellcasting>
                        <Equipment>
                            <div>
                                <label>Equipment</label>
                                <Money>
                                    <ul>
                                        <li>
                                            <label>CP</label><input />
                                        </li>
                                        <li>
                                            <label>SP</label><input />
                                        </li>
                                        <li>
                                            <label>EP</label><input />
                                        </li>
                                        <li>
                                            <label>GP</label><input />
                                        </li>
                                        <li>
                                            <label>PP</label><input />
                                        </li>
                                    </ul>
                                </Money>
                                <textarea placeholder="Equipment list here"></textarea>
                            </div>
                        </Equipment>
                    </section>
                    <section>
                        <Flavor>
                            <div>
                                <label>Personality</label><textarea></textarea>
                            </div>
                            <div>
                                <label>Ideals</label><textarea></textarea>
                            </div>
                            <div>
                                <label>Bonds</label><textarea></textarea>
                            </div>
                            <div>
                                <label>Flaws</label><textarea></textarea>
                            </div>
                        </Flavor>
                        <Features>
                            <div>
                            <label>Features & Traits</label>
                            <ul>
                                {currRaceData.traits.map((trait, i) =>
                                    <li key={i}>{trait.name}</li>
                                )
                                }

                            </ul>
                            </div>
                        </Features>
                    </section>
                </MainContent>
            </CharSheet>
	)

}


