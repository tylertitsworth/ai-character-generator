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
    FlexRowAlternate, CharSheet, CharName, Misc, MainContent,
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
    var allSkills = useSelector(getAllSkills)
    var currClass = useSelector(getClass)
    var currRace = useSelector(getRace)
    var currSkills = useSelector(getSkills)
    var currAbilityScores = useSelector(getAbilityScores)

    const [strMod, setStrMod] = useState(Math.floor((currAbilityScores[0] - 10) / 2))
    const [dexMod, setDexMod] = useState(Math.floor((currAbilityScores[1] - 10) / 2))
    const [conMod, setConMod] = useState(Math.floor((currAbilityScores[2] - 10) / 2))
    const [intMod, setIntMod] = useState(Math.floor((currAbilityScores[3] - 10) / 2))
    const [wisMod, setWisMod] = useState(Math.floor((currAbilityScores[4] - 10) / 2))
    const [chaMod, setChaMod] = useState(Math.floor((currAbilityScores[5] - 10) / 2))

    allSkills = allSkills.sort(function (a, b) {
        if (a[1].name.toLowerCase() < b[1].name.toLowerCase()) return -1;
        if (a[1].name.toLowerCase() > b[1].name.toLowerCase()) return 1;
        return 0;
    })
    const dispatch = useDispatch();

    var currClassData = []
    var currRaceData = []

    //console.log("Class: " + currClass + " Race: " + currRace);

    allClasses.forEach((option) => {
        if (option[1].name === currClass) {
            currClassData = option[1]
            
        }
    })

    allRaces.forEach((option) => {
        if (option[1].name === currRace) {
            currRaceData = option[1]
        }
    })
    var savingThrows = currClassData.saving_throws
    var savingThrowsProf = [false,false,false,false,false,false]

    console.log(savingThrows)

    const [skillRadio, setSkillRadio] = useState({
        'acrobatics': currSkills.includes("Acrobatics"),
        'animal_handling': currSkills.includes("Animal Handling"),
        'arcana': currSkills.includes("Arcana"),
        'athletics': currSkills.includes("Athletics"),
        'deception': currSkills.includes("Deception"),
        'history': currSkills.includes("History"),
        'insight': currSkills.includes("Insight"),
        'intimidation': currSkills.includes("Intimidation"),
        'investigation': currSkills.includes("Investigation"),
        'medicine': currSkills.includes("Medicine"),
        'nature': currSkills.includes("Nature"),
        'perception': currSkills.includes("Perception"),
        'performance': currSkills.includes("Performance"),
        'persuasion': currSkills.includes("Persuasion"),
        'religion': currSkills.includes("Religion"),
        'sleight_of_hand': currSkills.includes("Sleight of Hand"),
        'stealth': currSkills.includes("Stealth"),
        'survival': currSkills.includes("Survival")
    })

    savingThrows.forEach((option) => {
        if (option.name == "STR") {
            savingThrowsProf[0] = true
        }
        if (option.name == "DEX") {
            savingThrowsProf[1] = true
        }
        if (option.name == "CON") {
            savingThrowsProf[2] = true
        }
        if (option.name == "INT") {
            savingThrowsProf[3] = true
        }
        if (option.name == "WIS") {
            savingThrowsProf[4] = true
        }
        if (option.name == "CHA") {
            savingThrowsProf[5] = true
        }

    })

    const [proficiencyBonus, setProficiencyBonus] = useState({
        'str': savingThrowsProf[0],
        'dex': savingThrowsProf[1],
        'con': savingThrowsProf[2],
        'int': savingThrowsProf[3],
        'wis': savingThrowsProf[4],
        'cha': savingThrowsProf[5]
    })

    console.log(currClassData)
    console.log(allBackgrounds)
    console.log(proficiencyBonus)

    const personalityTraits = allBackgrounds[0][1].personality_traits.from
    const ideals = allBackgrounds[0][1].ideals.from
    const bonds = allBackgrounds[0][1].bonds.from
    const flaws = allBackgrounds[0][1].flaws.from

    const [personality, setPersonality] = useState(personalityTraits[0])
    const [ideal, setIdeal] = useState(ideals[0].desc)
    const [bond, setBond] = useState(bonds[0])
    const [flaw, setFlaw] = useState(flaws[0])

    const [hpMax, setHpMax] = useState(currClassData.hit_die + conMod)

    return (
        <CharSheet onChange={(e) => { e.preventDefault(); }}>
            <header>
                <CharName>
                    <label>Character Name</label><input name="CharName" placeholder="Character Name"></input>
                </CharName>
                <Misc>
                    <ul>
                        <li>
                            <label>Class & Level</label>
                            <select value={currClass} onChange={(event) => { dispatch(writeClass(event.target.value)) }}>
                                {allClasses.map((option, i) =>
                                    <option key={i} value={option[1].name} onChange={(e) => { e.preventDefault()}}>{option[1].name} 1</option>
                                )}
                            </select>
                        </li>
                        <li>
                            <label>Background</label>
                            <select>
                                {allBackgrounds.map((option, i) =>
                                    <option key={i} value={option[1].name} onChange={(e) => { e.preventDefault() }}>{option[1].name}</option>
                                )}
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
                                    <option key={i} value={option[1].name} onChange={(e) => { e.preventDefault() }}>{option[1].name}</option>
                                )}
                            </select>
                        </li>
                        <li>
                            <label>Alignment</label>
                            <select  >
                                {allAlignments.map((option, i) =>
                                    <option key={i} value={option[1].name} onChange={(e) => { e.preventDefault() }}>{option[1].name}</option>
                                )}
                            </select>
                        </li>
                        <li>
                            <label>Experience Points</label>
                            <input placeholder="0"></input>
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
                                        <div name="Strengthmod"><h4>{ strMod > -1 ? "+"+strMod : strMod }</h4></div>
                                    </Modifier>
                                </li>
                                <li>
                                    <Score>
                                        <label>Dexterity</label>
                                        <div name="Dexterityscore" placeholder="10">{currAbilityScores[1]}</div>
                                    </Score>
                                    <Modifier>
                                        <div name="Dexteritymod"><h4>{dexMod > -1 ? "+" + dexMod : dexMod}</h4></div>
                                    </Modifier>
                                </li>
                                <li>
                                    <Score>
                                        <label>Constitution</label>
                                        <div name="Constitutionscore" placeholder="10">{currAbilityScores[2]}</div>
                                    </Score>
                                    <Modifier>
                                        <div name="Constitutionmod"><h4>{conMod > -1 ? "+" + conMod : conMod}</h4></div>
                                    </Modifier>
                                </li>
                                <li>
                                    <Score>
                                        <label>Intelligence</label>
                                        <div name="Intelligencescore" placeholder="10">{currAbilityScores[3]}</div>
                                    </Score>
                                    <Modifier>
                                        <div name="Intelligencemod"><h4>{intMod > -1 ? "+" + intMod : intMod}</h4></div>
                                    </Modifier>
                                </li>
                                <li>
                                    <Score>
                                        <label>Wisdom</label>
                                        <div name="Wisdomscore" placeholder="10">{currAbilityScores[4]}</div>
                                    </Score>
                                    <Modifier>
                                        <div name="Wisdommod"><h4>{wisMod > -1 ? "+" + wisMod : wisMod}</h4></div>
                                    </Modifier>
                                </li>
                                <li>
                                    <Score>
                                        <label>Charisma</label>
                                        <div name="Charismascore" placeholder="10">{currAbilityScores[5]}</div>
                                    </Score>
                                    <Modifier>
                                        <div name="Charismamod"><h4>{chaMod > -1 ? "+" + chaMod : chaMod}</h4></div>
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
                                <input value="+2" />
                            </ProficiencyBonus>
                            <ListSection>
                                <ul>
                                    <li>
                                        <label>{allAbilityScores[0]}</label>
                                        <ListTextInput value={strMod > -1 ? "+" + (strMod + (proficiencyBonus.str ? 2 : 0)) : (strMod + (proficiencyBonus.str ? 2 : 0))} onChange={(e) => { e.preventDefault() }} />
                                        <ListCheckboxInput type="checkbox" checked={proficiencyBonus.str}/>
                                    </li>
                                    <li>
                                        <label>{allAbilityScores[1]}</label>
                                        <ListTextInput value={dexMod > -1 ? "+" + (dexMod + (proficiencyBonus.dex ? 2 : 0)) : (dexMod + (proficiencyBonus.dex ? 2 : 0))} onChange={(e) => { e.preventDefault() }}/>
                                        <ListCheckboxInput type="checkbox" checked={proficiencyBonus.dex}/>
                                    </li>
                                    <li>
                                        <label>{allAbilityScores[2]}</label>
                                        <ListTextInput value={conMod > -1 ? "+" + (conMod + (proficiencyBonus.con ? 2 : 0)) : (conMod + (proficiencyBonus.con ? 2 : 0))} onChange={(e) => { e.preventDefault() }}/>
                                        <ListCheckboxInput type="checkbox" checked={proficiencyBonus.con} />
                                    </li>
                                    <li>
                                        <label>{allAbilityScores[3]}</label>
                                        <ListTextInput value={intMod > -1 ? "+" + (intMod + (proficiencyBonus.int ? 2 : 0)) : (intMod + (proficiencyBonus.int ? 2 : 0))} onChange={(e) => { e.preventDefault() }}/>
                                        <ListCheckboxInput type="checkbox" checked={proficiencyBonus.int}/>
                                    </li>
                                    <li>
                                        <label>{allAbilityScores[4]}</label>
                                        <ListTextInput value={wisMod > -1 ? "+" + (wisMod + (proficiencyBonus.wis ? 2 : 0)) : (wisMod + (proficiencyBonus.wis ? 2 : 0))} onChange={(e) => { e.preventDefault() }}/>
                                        <ListCheckboxInput type="checkbox" checked={proficiencyBonus.wis}/>
                                    </li>
                                    <li>
                                        <label>{allAbilityScores[5]}</label>
                                        <ListTextInput value={chaMod > -1 ? "+" + (chaMod + (proficiencyBonus.cha ? 2 : 0)) : (chaMod + (proficiencyBonus.cha ? 2 : 0))} onChange={(e) => { e.preventDefault() }}/>
                                        <ListCheckboxInput type="checkbox" checked={proficiencyBonus.cha}/>
                                    </li>

                                </ul>
                                <div>Saving Throws</div>
                            </ListSection>
                            <ListSection>
                                <ul>
                                    <li key={0}> {/* Acrobatics */}
                                        <label>{allSkills[0][1].name}</label>
                                        <ListTextInput
                                            value={dexMod > -1 ? "+" + (dexMod + (skillRadio.acrobatics ? 2 : 0)) : (dexMod + (skillRadio.acrobatics ? 2 : 0))}
                                            onChange={(e) => { e.preventDefault() }}
                                        />
                                        <ListCheckboxInput type="checkbox"
                                            checked={skillRadio.acrobatics}
                                            onChange={() => {
                                                setSkillRadio({
                                                    ...skillRadio,
                                                    'acrobatics': !skillRadio.acrobatics
                                                })
                                            }}
                                        />
                                        <span>({allSkills[0][1].ability_score.name})</span>
                                    </li>
                                    <li key={1}> {/* Animal Handling */}
                                        <label>{allSkills[1][1].name}</label>
                                        <ListTextInput
                                            value={wisMod > -1 ? "+" + (wisMod + (skillRadio.animal_handling ? 2 : 0)) : (wisMod + (skillRadio.animal_handling ? 2 : 0))}
                                            onChange={(e) => { e.preventDefault() }}
                                        />
                                        <ListCheckboxInput type="checkbox"
                                            checked={skillRadio.animal_handling}
                                            onChange={() => {
                                                setSkillRadio({
                                                    ...skillRadio,
                                                    'animal_handling': !skillRadio.animal_handling
                                                })
                                            }}
                                        />
                                        <span>({allSkills[1][1].ability_score.name})</span>
                                    </li>
                                    <li key={2}> {/* Arcana */}
                                        <label>{allSkills[2][1].name}</label>
                                        <ListTextInput
                                            value={intMod > -1 ? "+" + (intMod + (skillRadio.arcana ? 2 : 0)) : (intMod + (skillRadio.arcana ? 2 : 0))}
                                            onChange={(e) => { e.preventDefault() }}
                                        />
                                        <ListCheckboxInput type="checkbox"
                                            checked={skillRadio.arcana}
                                            onChange={() => {
                                                setSkillRadio({
                                                    ...skillRadio,
                                                    'arcana': !skillRadio.arcana
                                                })
                                            }}
                                        />
                                        <span>({allSkills[2][1].ability_score.name})</span>
                                    </li>
                                    <li key={3}> {/* Athletics */}
                                        <label>{allSkills[3][1].name}</label>
                                        <ListTextInput
                                            value={strMod > -1 ? "+" + (strMod + (skillRadio.athletics ? 2 : 0)) : (strMod + (skillRadio.athletics ? 2 : 0))}
                                            onChange={(e) => { e.preventDefault() }}
                                        />
                                        <ListCheckboxInput type="checkbox"
                                            checked={skillRadio.athletics}
                                            onChange={() => {
                                                setSkillRadio({
                                                    ...skillRadio,
                                                    'athletics': !skillRadio.athletics
                                                })
                                            }}
                                        />
                                        <span>({allSkills[3][1].ability_score.name})</span>
                                    </li>
                                    <li key={4}> {/* Deception */}
                                        <label>{allSkills[4][1].name}</label>
                                        <ListTextInput
                                            value={chaMod > -1 ? "+" + (chaMod + (skillRadio.deception ? 2 : 0)) : (chaMod + (skillRadio.deception ? 2 : 0))}
                                            onChange={(e) => { e.preventDefault() }}
                                        />
                                        <ListCheckboxInput type="checkbox"
                                            checked={skillRadio.deception}
                                            onChange={() => {
                                                setSkillRadio({
                                                    ...skillRadio,
                                                    'deception': !skillRadio.deception
                                                })
                                            }}
                                        />
                                        <span>({allSkills[4][1].ability_score.name})</span>
                                    </li>
                                    <li key={5}> {/* History */}
                                        <label>{allSkills[5][1].name}</label>
                                        <ListTextInput
                                            value={intMod > -1 ? "+" + (intMod + (skillRadio.history ? 2 : 0)) : (intMod + (skillRadio.history ? 2 : 0))}
                                            onChange={(e) => { e.preventDefault() }}
                                        />
                                        <ListCheckboxInput type="checkbox"
                                            checked={skillRadio.history}
                                            onChange={() => {
                                                setSkillRadio({
                                                    ...skillRadio,
                                                    'history': !skillRadio.history
                                                })
                                            }}
                                        />
                                        <span>({allSkills[5][1].ability_score.name})</span>
                                    </li>
                                    <li key={6}> {/*Insight */}
                                        <label>{allSkills[6][1].name}</label>
                                        <ListTextInput
                                            value={wisMod > -1 ? "+" + (wisMod + (skillRadio.insight ? 2 : 0)) : (wisMod + (skillRadio.insight ? 2 : 0))}
                                            onChange={(e) => { e.preventDefault() }}
                                        />
                                        <ListCheckboxInput type="checkbox"
                                            checked={skillRadio.insight}
                                            onChange={() => {
                                                setSkillRadio({
                                                    ...skillRadio,
                                                    'insight': !skillRadio.insight
                                                })
                                            }}
                                        />
                                        <span>({allSkills[6][1].ability_score.name})</span>
                                    </li>
                                    <li key={7}> {/* Intimidation */}
                                        <label>{allSkills[7][1].name}</label>
                                        <ListTextInput
                                            value={chaMod > -1 ? "+" + (chaMod + (skillRadio.intimidation ? 2 : 0)) : (chaMod + (skillRadio.intimidation ? 2 : 0))}
                                            onChange={(e) => { e.preventDefault() }}
                                        />
                                        <ListCheckboxInput type="checkbox"
                                            checked={skillRadio.intimidation}
                                            onChange={() => {
                                                setSkillRadio({
                                                    ...skillRadio,
                                                    'intimidation': !skillRadio.intimidation
                                                })
                                            }}
                                        />
                                        <span>({allSkills[7][1].ability_score.name})</span>
                                    </li>
                                    <li key={8}> {/* Investigation */}
                                        <label>{allSkills[8][1].name}</label>
                                        <ListTextInput
                                            value={intMod > -1 ? "+" + (intMod + (skillRadio.investigation ? 2 : 0)) : (intMod + (skillRadio.investigation ? 2 : 0))}
                                            onChange={(e) => { e.preventDefault() }}
                                        />
                                        <ListCheckboxInput type="checkbox"
                                            checked={skillRadio.investigation}
                                            onChange={() => {
                                                setSkillRadio({
                                                    ...skillRadio,
                                                    'investigation': !skillRadio.investigation
                                                })
                                            }}
                                        />
                                        <span>({allSkills[8][1].ability_score.name})</span>
                                    </li>
                                    <li key={9}> {/* Medicine */}
                                        <label>{allSkills[9][1].name}</label>
                                        <ListTextInput
                                            value={wisMod > -1 ? "+" + (wisMod + (skillRadio.medicine ? 2 : 0)) : (wisMod + (skillRadio.medicine ? 2 : 0))}
                                            onChange={(e) => { e.preventDefault() }}
                                        />
                                        <ListCheckboxInput type="checkbox"
                                            checked={skillRadio.medicine}
                                            onChange={() => {
                                                setSkillRadio({
                                                    ...skillRadio,
                                                    'medicine': !skillRadio.medicine
                                                })
                                            }}
                                        />
                                        <span>({allSkills[9][1].ability_score.name})</span>
                                    </li>
                                    <li key={10}> {/* Nature */}
                                        <label>{allSkills[10][1].name}</label>
                                        <ListTextInput
                                            value={intMod > -1 ? "+" + (intMod + (skillRadio.nature ? 2 : 0)) : (intMod + (skillRadio.nature ? 2 : 0))}
                                            onChange={(e) => { e.preventDefault() }}
                                        />
                                        <ListCheckboxInput type="checkbox"
                                            checked={skillRadio.nature}
                                            onChange={() => {
                                                setSkillRadio({
                                                    ...skillRadio,
                                                    'nature': !skillRadio.nature
                                                })
                                            }}
                                        />
                                        <span>({allSkills[10][1].ability_score.name})</span>
                                    </li>
                                    <li key={11}> {/* Perception */}
                                        <label>{allSkills[11][1].name}</label>
                                        <ListTextInput
                                            value={wisMod > -1 ? "+" + (wisMod + (skillRadio.perception ? 2 : 0)) : (wisMod + (skillRadio.perception ? 2 : 0))}
                                            onChange={(e) => { e.preventDefault() }}
                                        />
                                        <ListCheckboxInput type="checkbox"
                                            checked={skillRadio.perception}
                                            onChange={() => {
                                                setSkillRadio({
                                                    ...skillRadio,
                                                    'perception': !skillRadio.perception
                                                })
                                            }}
                                        />
                                        <span>({allSkills[11][1].ability_score.name})</span>
                                    </li>
                                    <li key={12}> {/* Performance */}
                                        <label>{allSkills[12][1].name}</label>
                                        <ListTextInput
                                            value={chaMod > -1 ? "+" + (chaMod + (skillRadio.performance ? 2 : 0)) : (chaMod + (skillRadio.performance ? 2 : 0))}
                                            onChange={(e) => { e.preventDefault() }}
                                        />
                                        <ListCheckboxInput type="checkbox"
                                            checked={skillRadio.performance}
                                            onChange={() => {
                                                setSkillRadio({
                                                    ...skillRadio,
                                                    'performance': !skillRadio.performance
                                                })
                                            }}
                                        />
                                        <span>({allSkills[12][1].ability_score.name})</span>
                                    </li>
                                    <li key={13}> {/*Persuasion*/}
                                        <label>{allSkills[13][1].name}</label>
                                        <ListTextInput
                                            value={chaMod > -1 ? "+" + (chaMod + (skillRadio.persuasion ? 2 : 0)) : (chaMod + (skillRadio.persuasion ? 2 : 0))}
                                            onChange={(e) => { e.preventDefault() }}
                                        />
                                        <ListCheckboxInput type="checkbox"
                                            checked={skillRadio.persuasion}
                                            onChange={() => {
                                                setSkillRadio({
                                                    ...skillRadio,
                                                    'persuasion': !skillRadio.persuasion
                                                })
                                            }}
                                        />
                                        <span>({allSkills[13][1].ability_score.name})</span>
                                    </li>
                                    <li key={14}> {/*Religion */}
                                        <label>{allSkills[14][1].name}</label>
                                        <ListTextInput
                                            value={intMod > -1 ? "+" + (intMod + (skillRadio.religion ? 2 : 0)) : (intMod + (skillRadio.religion ? 2 : 0))}
                                            onChange={(e) => { e.preventDefault() }}
                                        />
                                        <ListCheckboxInput type="checkbox"
                                            checked={skillRadio.religion}
                                            onChange={() => {
                                                setSkillRadio({
                                                    ...skillRadio,
                                                    'religion': !skillRadio.religion
                                                })
                                            }}
                                        />
                                        <span>({allSkills[14][1].ability_score.name})</span>
                                    </li>
                                    <li key={15}> {/* Sleight of Hand */}
                                        <label>{allSkills[15][1].name}</label>
                                        <ListTextInput
                                            value={dexMod > -1 ? "+" + (dexMod + (skillRadio.sleight_of_hand ? 2 : 0)) : (dexMod + (skillRadio.sleight_of_hand ? 2 : 0))}
                                            onChange={(e) => { e.preventDefault() }}
                                        />
                                        <ListCheckboxInput type="checkbox"
                                            checked={skillRadio.sleight_of_hand}
                                            onChange={() => {
                                                setSkillRadio({
                                                    ...skillRadio,
                                                    'sleight_of_hand': !skillRadio.sleight_of_hand
                                                })
                                            }}
                                        />
                                        <span>({allSkills[15][1].ability_score.name})</span>
                                    </li>
                                    <li key={16}> {/* Stealth */}
                                        <label>{allSkills[16][1].name}</label>
                                        <ListTextInput
                                            value={dexMod > -1 ? "+" + (dexMod + (skillRadio.stealth ? 2 : 0)) : (dexMod + (skillRadio.stealth ? 2 : 0))}
                                            onChange={(e) => { e.preventDefault() }}
                                        />
                                        <ListCheckboxInput type="checkbox"
                                            checked={skillRadio.stealth}
                                            onChange={() => {
                                                setSkillRadio({
                                                    ...skillRadio,
                                                    'stealth': !skillRadio.stealth
                                                })
                                            }}
                                        />
                                        <span>({allSkills[16][1].ability_score.name})</span>
                                    </li>
                                    <li key={17}> {/* Survival */}
                                        <label>{allSkills[17][1].name}</label>
                                        <ListTextInput
                                            value={wisMod > -1 ? "+" + (wisMod + (skillRadio.survival ? 2 : 0)) : (wisMod + (skillRadio.survival ? 2 : 0))}
                                            onChange={(e) => { e.preventDefault() }}
                                        />
                                        <ListCheckboxInput type="checkbox"
                                            checked={skillRadio.survival}
                                            onChange={() => {
                                                setSkillRadio({
                                                    ...skillRadio,
                                                    'survival': !skillRadio.survival
                                                })
                                            }}
                                        />
                                        <span>({allSkills[17][1].ability_score.name})</span>
                                    </li>
                                </ul>
                                <div>Skills</div>
                            </ListSection>
                        </AttrApplications>
                    </Attributes>
                    <PassivePerception>
                        <LabelContainer>
                            <label>Passive Wisdom (Perception)</label>
                        </LabelContainer>
                        <input value={(10 + wisMod + (skillRadio.perception ? 2 : 0))} onChange={(e) => { e.preventDefault(); }} />  {/* perception */ }
                    </PassivePerception>
                    <OtherProficiencies>
                        <label>Other Proficiences and Languages</label>
                        <ul>
                            {currRaceData.languages.map((trait, i) =>
                                <li key={i}>{trait.name}</li>
                            )}
                            <li>Language Choice to Determine</li>
                            <li>Language Choice to Determine</li>
                        </ul>
                    </OtherProficiencies>
                </section>
                <section>
                    <Combat>
                        <CombatScore>
                            <div>
                                <label>Armor Class</label><input value={(8 + dexMod)} type="text" onChange={(e) => {e.preventDefault();}}/>
                            </div>
                        </CombatScore>
                        <CombatScore>
                            <div>
                                <label>Initiative</label><input value={"+" + dexMod} type="text" onChange={(e) => { e.preventDefault(); }}/>
                            </div>
                        </CombatScore>
                        <CombatScore>
                            <div>
                                <label>Speed</label><input value={currRaceData.speed} type="text" onChange={(e) => { e.preventDefault(); }} />
                            </div>
                        </CombatScore>
                        <Hitpoints>
                            <RegularHitpoints>
                                <MaxHitpoints>
                                    <label>Hit Point Maximum</label><input value={hpMax} onChange={(e) => { e.preventDefault(); }}/>
                                </MaxHitpoints>
                                <CurrentHitpoints>
                                    <label>Current Hit Points</label><input />
                                </CurrentHitpoints>
                            </RegularHitpoints>
                            <TemporaryHitpoints>
                                <label>Temporary Hit Points</label><input />
                            </TemporaryHitpoints>
                        </Hitpoints>
                        <FlexRowAlternate>
                            <HitDice>
                                <div>
                                    <TotalHitDice>
                                        <label>Total</label><input value={"1d" + currClassData.hit_die} onChange={(e) => { e.preventDefault(); }}/>
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
                        </FlexRowAlternate>
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
                                            <input name="atkname1" type="text" value="Club" onChange={(e) => { e.preventDefault(); }}/>
                                        </td>
                                        <td>
                                            <input name="atkbonus1" type="text" value={"+" + (strMod + 2)} onChange={(e) => { e.preventDefault(); }}/>
                                        </td>
                                        <td>
                                            <input name="atkdamage1" type="text" value={"1d4 " + (strMod > -1 ? "+" + (strMod + (skillRadio.athletics ? 2 : 0)) : (strMod + (skillRadio.athletics ? 2 : 0))) +" Blg"} onChange={(e) => { e.preventDefault(); }}/>
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
                            <label>Personality</label>
                            <select onChange={(e) => { setPersonality(event.target.value)}}> {
                                personalityTraits.map((choice, i) =>
                                    <option key={i} value={choice} onChange={(e) => { e.preventDefault(); }}>{choice}</option>
                                )
                            }
                            </select>
                            <textarea value={personality} />
                        </div>
                        <div>
                            <label>Ideals</label>
                            <select value={ideal} onChange={(e) => { setIdeal(event.target.value) }}>
                                <option key="0" value={ideals[0].desc} onChange={(e) => {e.preventDefault();}}>{ideals[0].desc}</option>
                                <option key="1" value={ideals[1].desc} onChange={(e) => {e.preventDefault();}}>{ideals[1].desc}</option>
                                <option key="2" value={ideals[2].desc} onChange={(e) => {e.preventDefault();}}>{ideals[2].desc}</option>
                                <option key="3" value={ideals[3].desc} onChange={(e) => {e.preventDefault();}}>{ideals[3].desc}</option>
                                <option key="4" value={ideals[4].desc} onChange={(e) => {e.preventDefault();}}>{ideals[4].desc}</option>
                                <option key="5" value={ideals[5].desc} onChange={(e) => {e.preventDefault();}}>{ideals[5].desc}</option>
                            </select>
                            <textarea value={ideal} />
                        </div>
                        <div>
                            <label>Bonds</label>
                            <select value={bond} onChange={(e) => { setBond(event.target.value) }}> {
                                bonds.map((choice, i) =>
                                    <option key={i} value={choice} onChange={(e) => { e.preventDefault(); }}>{choice}</option>
                                )
                            }
                            </select>
                            <textarea value={bond} onChange={(e) => { e.preventDefault(); }} />
                        </div>
                        <div>
                            <label>Flaws</label>
                            <select value={flaw}> {
                                flaws.map((choice, i) =>
                                    <option key={i} value={choice} onChange={(e) => { e.preventDefault(); }}>{choice}</option>
                                )
                            }
                            </select>
                            <textarea value={flaw} onChange={(e) => { e.preventDefault(); }}/>
                        </div>
                    </Flavor>
                    <Features>
                        <div>
                            <label>Features & Traits</label>
                            <ul>
                                {currRaceData.traits.map((trait, i) =>
                                    <li key={i}>{trait.name}</li>
                                )}
                            </ul>

                        </div>
                    </Features>
                </section>
            </MainContent>
        </CharSheet>
    )
}
