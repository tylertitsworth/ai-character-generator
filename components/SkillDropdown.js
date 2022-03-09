import React, { useState, useEffect } from 'react';
import { SkillField, StyledSelect, FlexRow } from '../styles/globals'

import { useDispatch, useSelector } from 'react-redux';
import {
	getClass
} from '../redux/selectors';

export default function SkillDropdown(props) {

	var skillData = props.skills
	var classData = props.classes

	const dispatch = useDispatch()

	var testClass = []
	var choose = 0;
	var choices = [];
	const currentClass = useSelector(getClass)
	console.log("CURRENT CLASS FROM SKILL DROPDOWN", currentClass)

	const [toggle, setToggle] = useState(true)		// will cause the useEffect below to only go off once
	//const [monkSwitch, setMonkSwitch] = useState(false)
	const [skill1, setSkill1] = useState("")
	const [skill2, setSkill2] = useState("")
	const [skill3, setSkill3] = useState("")
	const [skill4, setSkill4] = useState("")

	for (var i = 0; i < classData.length; i++) {
		if (classData[i][1].name === currentClass) {
			testClass = classData[i]
        }
    }
	//var testClass = classData[5]		// change this number to get different results (0-11) 5, 0 

	var MonkSwitch = testClass[1].proficiency_choices[0].from[0].name.includes("Skill: ")
	//console.log("MONK SWITCH: ", MonkSwitch)		// False if Monk
	
	if (MonkSwitch) {
		//console.log("Not a Monk")
		var choose = testClass[1].proficiency_choices[0].choose		// (1-4)
		var choices = testClass[1].proficiency_choices[0].from		// Names
	}
	else {
		//console.log("Is a Monk")
		var choose = testClass[1].proficiency_choices[2].choose		// (1-4)
		var choices = testClass[1].proficiency_choices[2].from		// Names
    }

	//console.log(`Test Class: ${testClass[1].name}`)
	useEffect(() => {
		console.log("CHANGED CLASS")
		setToggle(true)
	} , [currentClass]	)

	// set skill state
	useEffect(() => {
		if (toggle) {

			if (choose == 1) {
				setSkill1(choices[0].name.replace("Skill: ", ""))
				setToggle(false)
			}
			else if (choose == 2) {
				setSkill1(choices[0].name.replace("Skill: ", ""))
				setSkill2(choices[1].name.replace("Skill: ", ""))
				setToggle(false)
			}
			else if (choose == 3) {
				setSkill1(choices[0].name.replace("Skill: ", ""))
				setSkill2(choices[1].name.replace("Skill: ", ""))
				setSkill3(choices[2].name.replace("Skill: ", ""))
				setToggle(false)
			}
			else {
				setSkill1(choices[0].name.replace("Skill: ", ""))
				setSkill2(choices[1].name.replace("Skill: ", ""))
				setSkill3(choices[2].name.replace("Skill: ", ""))
				setSkill4(choices[3].name.replace("Skill: ", ""))
				setToggle(false)
			}

		}

		console.log("Skill 1: ", skill1.replace("Skill: ", ""))
		console.log("Skill 2: ", skill2.replace("Skill: ", ""))
		console.log("Skill 3: ", skill3.replace("Skill: ", ""))
		console.log("Skill 4: ", skill4.replace("Skill: ", ""))
	}, [skill1, skill2, skill3, skill4, currentClass])


	if (choose == 1) {
		return (
			<>
				<h3>Choose {choose} Skill</h3>
				<SkillField>
					<StyledSelect value={skill1} onChange={(event) => { console.log(event.target.value); setSkill1(event.target.value) }}> {
						choices.map((choice, i) =>
							<option key={i} value={choice.name}>{choice.name.replace("Skill: ", "")}</option>
						)
					}
					</StyledSelect>
				</SkillField>
			</>
		)
	}
	else if (choose == 2) {
		return (
			<>
				<h3>Choose {choose} Skills</h3>
				<FlexRow>
					<SkillField>
						<StyledSelect value={skill1} onChange={(event) => setSkill1(event.target.value)}> {
							choices.map((choice, i) =>
								<option key={i} value={choice.name}>{choice.name.replace("Skill: ", "")}</option>
							)
						}
						</StyledSelect>
					</SkillField>
					<SkillField>
						<StyledSelect value={skill2} onChange={(event) => setSkill2(event.target.value)}> {
							choices.map((choice, i) =>
								<option key={i} value={choice.name}>{choice.name.replace("Skill: ", "")}</option>
							)
						}
						</StyledSelect>
					</SkillField>
				</FlexRow>
			</>
		)
	}
	else if (choose === 3) {
			return (
			<>
				<h3>Choose {choose} Skills</h3>
				<FlexRow>
					<SkillField>
							<StyledSelect value={skill1} onChange={(event) => setSkill1(event.target.value)}> {
								choices.map((choice, i) =>
									<option key={i} value={choice.name}>{choice.name.replace("Skill: ", "")}</option>
							)
						}
						</StyledSelect>
					</SkillField>
					<SkillField>
						<StyledSelect value={skill2} onChange={(event) => setSkill2(event.target.value)}> {
							choices.map((choice, i) =>
								<option key={i} value={choice.name}>{choice.name.replace("Skill: ", "")}</option>
							)
						}
						</StyledSelect>
					</SkillField>
					<SkillField>
						<StyledSelect value={skill3} onChange={(event) => setSkill3(event.target.value)}> {
							choices.map((choice, i) =>
								<option key={i} value={choice.name}>{choice.name.replace("Skill: ", "")}</option>
							)
						}
						</StyledSelect>
					</SkillField>
				</FlexRow>
			</>
		)
	}

	else {
		return (
			<>
				<h3>Choose {choose} Skills</h3>
				<FlexRow>
					<SkillField>
						<StyledSelect value={skill1} onChange={(event) => setSkill1(event.target.value)}> {
							choices.map((choice, i) =>
								<option key={i} value={choice.name}>{choice.name.replace("Skill: ", "")}</option>
							)
						}
						</StyledSelect>
					</SkillField>
					<SkillField>
						<StyledSelect value={skill2} onChange={(event) => setSkill2(event.target.value)}> {
							choices.map((choice, i) =>
								<option key={i} value={choice.name}>{choice.name.replace("Skill: ", "")}</option>
							)
						}
						</StyledSelect>
					</SkillField>
					<SkillField>
						<StyledSelect value={skill3} onChange={(event) => setSkill3(event.target.value)}> {
							choices.map((choice, i) =>
								<option key={i} value={choice.name}>{choice.name.replace("Skill: ", "")}</option>
							)
						}
						</StyledSelect>
					</SkillField>
					<SkillField>
						<StyledSelect value={skill4} onChange={(event) => setSkill4(event.target.value)}> {
							choices.map((choice, i) =>
								<option key={i} value={choice.name}>{choice.name.replace("Skill: ", "")}</option>
							)
						}
						</StyledSelect>
					</SkillField>
				</FlexRow>
			</>
		)
	}
}