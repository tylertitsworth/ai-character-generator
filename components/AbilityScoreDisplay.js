import React, { useState, useEffect } from 'react';
import { AbilityScore, FlexColumn, FlexRow, StyledSelect } from '../styles/globals'

export default function AbilityScoreDisplay(props) {

	var abilityData = props.data
	console.log(abilityData)
	var abilityScores = [15, 14, 13, 12, 10, 8]
	

	const [missingAbility, setMissingAbility] = useState("")
	const [isValid, setIsValid] = useState(true)
	const [abilityScore1, setAbilityScore1] = useState(abilityData[0][1].full_name)
	const [abilityScore2, setAbilityScore2] = useState(abilityData[1][1].full_name)
	const [abilityScore3, setAbilityScore3] = useState(abilityData[2][1].full_name)
	const [abilityScore4, setAbilityScore4] = useState(abilityData[3][1].full_name)
	const [abilityScore5, setAbilityScore5] = useState(abilityData[4][1].full_name)
	const [abilityScore6, setAbilityScore6] = useState(abilityData[5][1].full_name)

	// set initial ability state
	useEffect(() => {

		var abilityScoreCheck1 = abilityData[0][1].full_name
		var abilityScoreCheck2 = abilityData[1][1].full_name
		var abilityScoreCheck3 = abilityData[2][1].full_name
		var abilityScoreCheck4 = abilityData[3][1].full_name
		var abilityScoreCheck5 = abilityData[4][1].full_name
		var abilityScoreCheck6 = abilityData[5][1].full_name


		if (abilityScoreCheck1 != abilityScore1 && abilityScoreCheck1 != abilityScore2 && abilityScoreCheck1 != abilityScore3 &&
			abilityScoreCheck1 != abilityScore4 && abilityScoreCheck1 != abilityScore5 && abilityScoreCheck1 != abilityScore6) {
			alert("An ability score cannot have two different values!")
			setMissingAbility(abilityScoreCheck1)
			setIsValid(false)
		}
		else if (abilityScoreCheck2 != abilityScore1 && abilityScoreCheck2 != abilityScore2 && abilityScoreCheck2 != abilityScore3 &&
			abilityScoreCheck2 != abilityScore4 && abilityScoreCheck2 != abilityScore5 && abilityScoreCheck2 != abilityScore6) {
			alert("An ability score cannot have two different values!")
			setMissingAbility(abilityScoreCheck2)
			setIsValid(false)
		}
		else if (abilityScoreCheck3 != abilityScore1 && abilityScoreCheck3 != abilityScore2 && abilityScoreCheck3 != abilityScore3 &&
			abilityScoreCheck3 != abilityScore4 && abilityScoreCheck3 != abilityScore5 && abilityScoreCheck3 != abilityScore6) {
			alert("An ability score cannot have two different values!")
			setMissingAbility(abilityScoreCheck3)
			setIsValid(false)
		}
		else if (abilityScoreCheck4 != abilityScore1 && abilityScoreCheck4 != abilityScore2 && abilityScoreCheck4 != abilityScore3 &&
			abilityScoreCheck4 != abilityScore4 && abilityScoreCheck4 != abilityScore5 && abilityScoreCheck4 != abilityScore6) {
			alert("An ability score cannot have two different values!")
			setMissingAbility(abilityScoreCheck4)
			setIsValid(false)
		}
		else if (abilityScoreCheck5 != abilityScore1 && abilityScoreCheck5 != abilityScore2 && abilityScoreCheck5 != abilityScore3 &&
			abilityScoreCheck5 != abilityScore4 && abilityScoreCheck5 != abilityScore5 && abilityScoreCheck5 != abilityScore6) {
			alert("An ability score cannot have two different values!")
			setMissingAbility(abilityScoreCheck5)
			setIsValid(false)
		}
		else if (abilityScoreCheck6 != abilityScore1 && abilityScoreCheck6 != abilityScore2 && abilityScoreCheck6 != abilityScore3 &&
			abilityScoreCheck6 != abilityScore4 && abilityScoreCheck6 != abilityScore5 && abilityScoreCheck6 != abilityScore6) {
			alert("An ability score cannot have two different values!")
			setMissingAbility(abilityScoreCheck6)
			setIsValid(false)
		}
		else {
			setIsValid(true)
			setMissingAbility("")

        }

		console.log(`Ability Score 1: ${abilityScore1} is ${abilityScores[0]}`)
		console.log(`Ability Score 2: ${abilityScore2} is ${abilityScores[1]}`)
		console.log(`Ability Score 3: ${abilityScore3} is ${abilityScores[2]}`)
		console.log(`Ability Score 4: ${abilityScore4} is ${abilityScores[3]}`)
		console.log(`Ability Score 5: ${abilityScore5} is ${abilityScores[4]}`)
		console.log(`Ability Score 6: ${abilityScore6} is ${abilityScores[5]}`)

	}, [abilityScore1, abilityScore2, abilityScore3, abilityScore4, abilityScore5, abilityScore6])

	return (
		<>
			<FlexRow>

				<AbilityScore>
					<h1>{abilityScores[0]}</h1>
						<select value={abilityScore1} onChange={(event) => { console.log(event.target.value); setAbilityScore1(event.target.value) }}>
							{abilityData.map((ability, i) =>
								<option key={i} value={ability[1].full_name}>{ability[1].full_name}</option>
							)
							}
						</select>
				</AbilityScore>

				<AbilityScore>
					<h1>{abilityScores[1]}</h1>
					<select value={abilityScore2} onChange={(event) => { console.log(event.target.value); setAbilityScore2(event.target.value) }}>
						{abilityData.map((ability, i) =>
							<option key={i} value={ability[1].full_name}>{ability[1].full_name}</option>
						)
						}
					</select>
				</AbilityScore>

				<AbilityScore>
					<h1>{abilityScores[2]}</h1>
					<select value={abilityScore3} onChange={(event) => { console.log(event.target.value); setAbilityScore3(event.target.value) }}>
						{abilityData.map((ability, i) =>
							<option key={i} value={ability[1].full_name}>{ability[1].full_name}</option>
						)
						}
					</select>
				</AbilityScore>

				<AbilityScore>
					<h1>{abilityScores[3]}</h1>
					<select value={abilityScore4} onChange={(event) => { console.log(event.target.value); setAbilityScore4(event.target.value) }}>
						{abilityData.map((ability, i) =>
							<option key={i} value={ability[1].full_name}>{ability[1].full_name}</option>
						)
						}
					</select>
				</AbilityScore>

				<AbilityScore>
					<h1>{abilityScores[4]}</h1>
					<select value={abilityScore5} onChange={(event) => { console.log(event.target.value); setAbilityScore5(event.target.value) }}>
						{abilityData.map((ability, i) =>
							<option key={i} value={ability[1].full_name}>{ability[1].full_name}</option>
						)
						}
					</select>
				</AbilityScore>

				<AbilityScore>
					<h1>{abilityScores[5]}</h1>
					<select value={abilityScore6} onChange={(event) => { console.log(event.target.value); setAbilityScore6(event.target.value) }}>
						{abilityData.map((ability, i) =>
							<option key={i} value={ability[1].full_name}>{ability[1].full_name}</option>
						)
						}
					</select>
				</AbilityScore>

			</FlexRow>
			{isValid ? <> </> : <h1>Missing Ability Score: {missingAbility}</h1> }
		</>
    )

}

