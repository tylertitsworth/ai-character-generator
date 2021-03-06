import React, { useState, useEffect } from 'react';
import { AbilityScore, ContentContainer, ItemContainer, FlexColumn, FlexRow, StyledSelect, Error } from '../styles/globals'

import { useDispatch, useSelector } from 'react-redux';
import {
	writeAbilityScores
} from '../redux/actions'
import {
	getClass,
	getAllClasses
} from '../redux/selectors'

export default function AbilityScoreDisplay(props) {
	const ABILITY_NAMES = ["Strength","Dexterity","Constitution","Intelligence","Wisdom","Charisma"]
	var THE_SCORES_ARRAY = [15, 14, 13, 12, 10, 8]
	var orderedAbilities = []
	const [missingAbility, setMissingAbility] = useState("")
	const [isValid, setIsValid] = useState(true)
	const [toggle, setToggle] = useState(true)
	const [abilityScore1, setAbilityScore1] = useState(ABILITY_NAMES[0])
	const [abilityScore2, setAbilityScore2] = useState(ABILITY_NAMES[1])
	const [abilityScore3, setAbilityScore3] = useState(ABILITY_NAMES[2])
	const [abilityScore4, setAbilityScore4] = useState(ABILITY_NAMES[3])
	const [abilityScore5, setAbilityScore5] = useState(ABILITY_NAMES[4])
	const [abilityScore6, setAbilityScore6] = useState(ABILITY_NAMES[5])
	const currClass = useSelector(getClass);
	var classData = useSelector(getAllClasses);

	const dispatch = useDispatch()

	useEffect(() => { setToggle(true) }, [currClass])
	useEffect(() => {
		if (toggle) {
			if (currClass === "Fighter") {
				setAbilityScore1(ABILITY_NAMES[0])
				setAbilityScore2(ABILITY_NAMES[2])
				setAbilityScore3(ABILITY_NAMES[1])
				setAbilityScore4(ABILITY_NAMES[3])
				setAbilityScore5(ABILITY_NAMES[4])
				setAbilityScore6(ABILITY_NAMES[5])
				dispatch(writeAbilityScores([15, 13, 14, 12, 10, 8]))
				setToggle(false)
			}
			else if (currClass === "Druid") {
				setAbilityScore1(ABILITY_NAMES[4])
				setAbilityScore2(ABILITY_NAMES[1])
				setAbilityScore3(ABILITY_NAMES[2])
				setAbilityScore4(ABILITY_NAMES[3])
				setAbilityScore5(ABILITY_NAMES[5])
				setAbilityScore6(ABILITY_NAMES[0])
				dispatch(writeAbilityScores([8, 14, 13, 12, 15, 10]))
				setToggle(false)
			}
			else if (currClass === "Paladin") {
				setAbilityScore1(ABILITY_NAMES[0])
				setAbilityScore2(ABILITY_NAMES[5])
				setAbilityScore3(ABILITY_NAMES[2])
				setAbilityScore4(ABILITY_NAMES[4])
				setAbilityScore5(ABILITY_NAMES[3])
				setAbilityScore6(ABILITY_NAMES[1])
				dispatch(writeAbilityScores([15, 8, 13, 10, 12, 14])) 
				setToggle(false)
			}
			else if (currClass === "Sorcerer") {
				setAbilityScore1(ABILITY_NAMES[5])
				setAbilityScore2(ABILITY_NAMES[2])
				setAbilityScore3(ABILITY_NAMES[4])
				setAbilityScore4(ABILITY_NAMES[3])
				setAbilityScore5(ABILITY_NAMES[1])
				setAbilityScore6(ABILITY_NAMES[0])
				dispatch(writeAbilityScores([8, 10, 14, 12, 13, 15])) 
				setToggle(false)
			}
			else if (currClass === "Bard") {
				setAbilityScore1(ABILITY_NAMES[1])
				setAbilityScore2(ABILITY_NAMES[5])
				setAbilityScore3(ABILITY_NAMES[2])
				setAbilityScore4(ABILITY_NAMES[4])
				setAbilityScore5(ABILITY_NAMES[0])
				setAbilityScore6(ABILITY_NAMES[3])
				dispatch(writeAbilityScores([10, 15, 13, 8, 12, 14])) 
				setToggle(false)
			}
			else if (currClass === "Monk") {
				setAbilityScore1(ABILITY_NAMES[1])
				setAbilityScore2(ABILITY_NAMES[4])
				setAbilityScore3(ABILITY_NAMES[2])
				setAbilityScore4(ABILITY_NAMES[3])
				setAbilityScore5(ABILITY_NAMES[0])
				setAbilityScore6(ABILITY_NAMES[5])
				dispatch(writeAbilityScores([10, 15, 13, 12, 14, 8])) 
				setToggle(false)
			}
			else if (currClass === "Wizard") {
				setAbilityScore1(ABILITY_NAMES[3])
				setAbilityScore2(ABILITY_NAMES[4])
				setAbilityScore3(ABILITY_NAMES[2])
				setAbilityScore4(ABILITY_NAMES[1])
				setAbilityScore5(ABILITY_NAMES[5])
				setAbilityScore6(ABILITY_NAMES[0])
				dispatch(writeAbilityScores([8, 12, 13, 15, 14, 10]))
				setToggle(false)
			}
			else if (currClass === "Barbarian") {
				setAbilityScore1(ABILITY_NAMES[0])
				setAbilityScore2(ABILITY_NAMES[2])
				setAbilityScore3(ABILITY_NAMES[1])
				setAbilityScore4(ABILITY_NAMES[4])
				setAbilityScore5(ABILITY_NAMES[3])
				setAbilityScore6(ABILITY_NAMES[5])
				dispatch(writeAbilityScores([15, 13, 14, 10, 12, 8])) 
				setToggle(false)
			}
			else if (currClass === "Cleric") {
				setAbilityScore1(ABILITY_NAMES[4])
				setAbilityScore2(ABILITY_NAMES[5])
				setAbilityScore3(ABILITY_NAMES[2])
				setAbilityScore4(ABILITY_NAMES[3])
				setAbilityScore5(ABILITY_NAMES[1])
				setAbilityScore6(ABILITY_NAMES[0])
				dispatch(writeAbilityScores([8, 10, 13, 12, 15, 14])) 
				setToggle(false)
			}
			else if (currClass === "Ranger") {
				setAbilityScore1(ABILITY_NAMES[1])
				setAbilityScore2(ABILITY_NAMES[4])
				setAbilityScore3(ABILITY_NAMES[2])
				setAbilityScore4(ABILITY_NAMES[5])
				setAbilityScore5(ABILITY_NAMES[3])
				setAbilityScore6(ABILITY_NAMES[0])
				dispatch(writeAbilityScores([8, 15, 13, 10, 14, 12])) 
				setToggle(false)
			}
			else if (currClass === "Rogue") {
				setAbilityScore1(ABILITY_NAMES[1])
				setAbilityScore2(ABILITY_NAMES[3])
				setAbilityScore3(ABILITY_NAMES[2])
				setAbilityScore4(ABILITY_NAMES[0])
				setAbilityScore5(ABILITY_NAMES[5])
				setAbilityScore6(ABILITY_NAMES[4])
				dispatch(writeAbilityScores([12, 15, 13, 14, 8, 10])) 
				setToggle(false)
			}
			else if (currClass === "Warlock") {
				setAbilityScore1(ABILITY_NAMES[5])
				setAbilityScore2(ABILITY_NAMES[2])
				setAbilityScore3(ABILITY_NAMES[4])
				setAbilityScore4(ABILITY_NAMES[3])
				setAbilityScore5(ABILITY_NAMES[1])
				setAbilityScore6(ABILITY_NAMES[0])
				dispatch(writeAbilityScores([8, 10, 14, 12, 13, 15])) 
				setToggle(false)
			}
        }
	}, [toggle])

	// set initial ability state
	useEffect(() => {
		var abilityScoreCheck1 = ABILITY_NAMES[0]
		var abilityScoreCheck2 = ABILITY_NAMES[1]
		var abilityScoreCheck3 = ABILITY_NAMES[2]
		var abilityScoreCheck4 = ABILITY_NAMES[3]
		var abilityScoreCheck5 = ABILITY_NAMES[4]
		var abilityScoreCheck6 = ABILITY_NAMES[5]

		if (abilityScoreCheck1 != abilityScore1 && abilityScoreCheck1 != abilityScore2 && abilityScoreCheck1 != abilityScore3 &&
			abilityScoreCheck1 != abilityScore4 && abilityScoreCheck1 != abilityScore5 && abilityScoreCheck1 != abilityScore6) {
			//alert("An ability score cannot have two different values!")
			setMissingAbility(abilityScoreCheck1)
			setIsValid(false)
		}
		else if (abilityScoreCheck2 != abilityScore1 && abilityScoreCheck2 != abilityScore2 && abilityScoreCheck2 != abilityScore3 &&
			abilityScoreCheck2 != abilityScore4 && abilityScoreCheck2 != abilityScore5 && abilityScoreCheck2 != abilityScore6) {
			//alert("An ability score cannot have two different values!")
			setMissingAbility(abilityScoreCheck2)
			setIsValid(false)
		}
		else if (abilityScoreCheck3 != abilityScore1 && abilityScoreCheck3 != abilityScore2 && abilityScoreCheck3 != abilityScore3 &&
			abilityScoreCheck3 != abilityScore4 && abilityScoreCheck3 != abilityScore5 && abilityScoreCheck3 != abilityScore6) {
			//alert("An ability score cannot have two different values!")
			setMissingAbility(abilityScoreCheck3)
			setIsValid(false)
		}
		else if (abilityScoreCheck4 != abilityScore1 && abilityScoreCheck4 != abilityScore2 && abilityScoreCheck4 != abilityScore3 &&
			abilityScoreCheck4 != abilityScore4 && abilityScoreCheck4 != abilityScore5 && abilityScoreCheck4 != abilityScore6) {
			//alert("An ability score cannot have two different values!")
			setMissingAbility(abilityScoreCheck4)
			setIsValid(false)
		}
		else if (abilityScoreCheck5 != abilityScore1 && abilityScoreCheck5 != abilityScore2 && abilityScoreCheck5 != abilityScore3 &&
			abilityScoreCheck5 != abilityScore4 && abilityScoreCheck5 != abilityScore5 && abilityScoreCheck5 != abilityScore6) {
			//alert("An ability score cannot have two different values!")
			setMissingAbility(abilityScoreCheck5)
			setIsValid(false)
		}
		else if (abilityScoreCheck6 != abilityScore1 && abilityScoreCheck6 != abilityScore2 && abilityScoreCheck6 != abilityScore3 &&
			abilityScoreCheck6 != abilityScore4 && abilityScoreCheck6 != abilityScore5 && abilityScoreCheck6 != abilityScore6) {
			//alert("An ability score cannot have two different values!")
			setMissingAbility(abilityScoreCheck6)
			setIsValid(false)
		}
		else {
			setIsValid(true)
			//dispatch(writeAbilityScores())
			setMissingAbility("")
        }
	}, [abilityScore1, abilityScore2, abilityScore3, abilityScore4, abilityScore5, abilityScore6])

	useEffect(() => {
		if (isValid) {
			// oh boy Tyler is gonna hate me for this one!
			// Strength
			if (abilityScore1 === ABILITY_NAMES[0]) {
				orderedAbilities[0] = THE_SCORES_ARRAY[0]
			}
			else if (abilityScore2 === ABILITY_NAMES[0]) {
				orderedAbilities[0] = THE_SCORES_ARRAY[1]
			}
			else if (abilityScore3 === ABILITY_NAMES[0]) {
				orderedAbilities[0] = THE_SCORES_ARRAY[2]
			}
			else if (abilityScore4 === ABILITY_NAMES[0]) {
				orderedAbilities[0] = THE_SCORES_ARRAY[3]
			}
			else if (abilityScore5 === ABILITY_NAMES[0]) {
				orderedAbilities[0] = THE_SCORES_ARRAY[4]
			}
			else if (abilityScore6 === ABILITY_NAMES[0]) {
				orderedAbilities[0] = THE_SCORES_ARRAY[5]
			}
			// Dexterity
			if (abilityScore1 === ABILITY_NAMES[1]) {
				orderedAbilities[1] = THE_SCORES_ARRAY[0]
			}
			else if (abilityScore2 === ABILITY_NAMES[1]) {
				orderedAbilities[1] = THE_SCORES_ARRAY[1]
			}
			else if (abilityScore3 === ABILITY_NAMES[1]) {
				orderedAbilities[1] = THE_SCORES_ARRAY[2]
			}
			else if (abilityScore4 === ABILITY_NAMES[1]) {
				orderedAbilities[1] = THE_SCORES_ARRAY[3]
			}
			else if (abilityScore5 === ABILITY_NAMES[1]) {
				orderedAbilities[1] = THE_SCORES_ARRAY[4]
			}
			else if (abilityScore6 === ABILITY_NAMES[1]) {
				orderedAbilities[1] = THE_SCORES_ARRAY[5]
			}
			//Constitution
			if (abilityScore1 === ABILITY_NAMES[2]) {
				orderedAbilities[2] = THE_SCORES_ARRAY[0]
			}
			else if (abilityScore2 === ABILITY_NAMES[2]) {
				orderedAbilities[2] = THE_SCORES_ARRAY[1]
			}
			else if (abilityScore3 === ABILITY_NAMES[2]) {
				orderedAbilities[2] = THE_SCORES_ARRAY[2]
			}
			else if (abilityScore4 === ABILITY_NAMES[2]) {
				orderedAbilities[2] = THE_SCORES_ARRAY[3]
			}
			else if (abilityScore5 === ABILITY_NAMES[2]) {
				orderedAbilities[2] = THE_SCORES_ARRAY[4]
			}
			else if (abilityScore6 === ABILITY_NAMES[2]) {
				orderedAbilities[2] = THE_SCORES_ARRAY[5]
			}
			// Intelligence
			if (abilityScore1 === ABILITY_NAMES[3]) {
				orderedAbilities[3] = THE_SCORES_ARRAY[0]
			}
			else if (abilityScore2 === ABILITY_NAMES[3]) {
				orderedAbilities[3] = THE_SCORES_ARRAY[1]
			}
			else if (abilityScore3 === ABILITY_NAMES[3]) {
				orderedAbilities[3] = THE_SCORES_ARRAY[2]
			}
			else if (abilityScore4 === ABILITY_NAMES[3]) {
				orderedAbilities[3] = THE_SCORES_ARRAY[3]
			}
			else if (abilityScore5 === ABILITY_NAMES[3]) {
				orderedAbilities[3] = THE_SCORES_ARRAY[4]
			}
			else if (abilityScore6 === ABILITY_NAMES[3]) {
				orderedAbilities[3] = THE_SCORES_ARRAY[5]
			}
			// Wisdom
			if (abilityScore1 === ABILITY_NAMES[4]) {
				orderedAbilities[4] = THE_SCORES_ARRAY[0]
			}
			else if (abilityScore2 === ABILITY_NAMES[4]) {
				orderedAbilities[4] = THE_SCORES_ARRAY[1]
			}
			else if (abilityScore3 === ABILITY_NAMES[4]) {
				orderedAbilities[4] = THE_SCORES_ARRAY[2]
			}
			else if (abilityScore4 === ABILITY_NAMES[4]) {
				orderedAbilities[4] = THE_SCORES_ARRAY[3]
			}
			else if (abilityScore5 === ABILITY_NAMES[4]) {
				orderedAbilities[4] = THE_SCORES_ARRAY[4]
			}
			else if (abilityScore6 === ABILITY_NAMES[4]) {
				orderedAbilities[4] = THE_SCORES_ARRAY[5]
			}
			// Charisma
			if (abilityScore1 === ABILITY_NAMES[5]) {
				orderedAbilities[5] = THE_SCORES_ARRAY[0]
			}
			else if (abilityScore2 === ABILITY_NAMES[5]) {
				orderedAbilities[5] = THE_SCORES_ARRAY[1]
			}
			else if (abilityScore3 === ABILITY_NAMES[5]) {
				orderedAbilities[5] = THE_SCORES_ARRAY[2]
			}
			else if (abilityScore4 === ABILITY_NAMES[5]) {
				orderedAbilities[5] = THE_SCORES_ARRAY[3]
			}
			else if (abilityScore5 === ABILITY_NAMES[5]) {
				orderedAbilities[5] = THE_SCORES_ARRAY[4]
			}
			else if (abilityScore6 === ABILITY_NAMES[5]) {
				orderedAbilities[5] = THE_SCORES_ARRAY[5]
			}

			dispatch(writeAbilityScores(orderedAbilities))
		}
	}, [currClass,abilityScore1, abilityScore2,abilityScore3, abilityScore4, abilityScore5, abilityScore6, isValid])

	return (
		<ContentContainer>
			<FlexRow>
				<ItemContainer>
					<AbilityScore>
						<h1>{THE_SCORES_ARRAY[0]}</h1>
						<select value={abilityScore1} onChange={(event) => { setAbilityScore1(event.target.value) }}>
							{ABILITY_NAMES.map((ability, i) =>
								<option key={i} value={ability}>{ability}</option>
							)
							}
						</select>
					</AbilityScore>
					<AbilityScore>
						<h1>{THE_SCORES_ARRAY[1]}</h1>
						<select value={abilityScore2} onChange={(event) => { setAbilityScore2(event.target.value) }}>
							{ABILITY_NAMES.map((ability, i) =>
								<option key={i} value={ability}>{ability}</option>
							)
							}
						</select>
					</AbilityScore>
				</ItemContainer>
				<ItemContainer>
					<AbilityScore>
						<h1>{THE_SCORES_ARRAY[2]}</h1>
						<select value={abilityScore3} onChange={(event) => { setAbilityScore3(event.target.value) }}>
							{ABILITY_NAMES.map((ability, i) =>
								<option key={i} value={ability}>{ability}</option>
							)
							}
						</select>
					</AbilityScore>
					<AbilityScore>
						<h1>{THE_SCORES_ARRAY[3]}</h1>
						<select value={abilityScore4} onChange={(event) => { setAbilityScore4(event.target.value) }}>
							{ABILITY_NAMES.map((ability, i) =>
								<option key={i} value={ability}>{ability}</option>
							)
							}
						</select>
					</AbilityScore>
				</ItemContainer>
				<ItemContainer>
					<AbilityScore>
						<h1>{THE_SCORES_ARRAY[4]}</h1>
						<select value={abilityScore5} onChange={(event) => { setAbilityScore5(event.target.value) }}>
							{ABILITY_NAMES.map((ability, i) =>
								<option key={i} value={ability}>{ability}</option>
							)
							}
						</select>
					</AbilityScore>
					<AbilityScore>
						<h1>{THE_SCORES_ARRAY[5]}</h1>
						<select value={abilityScore6} onChange={(event) => { setAbilityScore6(event.target.value) }}>
							{ABILITY_NAMES.map((ability, i) =>
								<option key={i} value={ability}>{ability}</option>
							)
							}
						</select>
					</AbilityScore>
				</ItemContainer>
			</FlexRow>
			{isValid ? <> </> :
				<Error>
					<h1>An ability score cannot have two different values!</h1>
					<h3>Missing Ability Score: {missingAbility}</h3>
				</Error>
			}
		</ContentContainer>
    )
}