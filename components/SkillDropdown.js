import React, { useState, useEffect } from 'react';
import { SkillField, StyledSelect, FlexRow } from '../styles/globals'


export default function SkillDropdown(props) {

	var skillData = props.skills
	var classData = props.classes
	var profid = props.profid
	console.log("------", profid)
	console.log(classData)

	const [toggle, setToggle] = useState(true)		// will cause the useEffect below to only go off once
	const [skill1, setSkill1] = useState("")
	const [skill2, setSkill2] = useState("")
	const [skill3, setSkill3] = useState("")
	const [skill4, setSkill4] = useState("")

	var testClass = classData[2]		// change this number to get different results (0-11) 5, 0 

	
	var choose = testClass[1].proficiency_choices[profid].choose		// (1-4)
	var choices = testClass[1].proficiency_choices[profid].from		// Names
	console.log(`Test Class: ${testClass[1].name}:`, testClass)



	// set skill state
	useEffect(() => {
		if (toggle) {
			if (choose == 1) {
				setSkill1(choices[0].name)
				setToggle(false)
			}
			else if (choose == 2) {
				setSkill1(choices[0].name)
				setSkill2(choices[2].name)
				setToggle(false)
			}
			else if (choose == 3) {
				setSkill1(choices[0].name)
				setSkill2(choices[1].name)
				setSkill3(choices[2].name)
				setToggle(false)
			}
			else {
				setSkill1(choices[0].name)
				setSkill2(choices[1].name)
				setSkill3(choices[2].name)
				setSkill4(choices[3].name)
				setToggle(false)
			}

		}

		console.log("Skill 1: ", skill1)
		console.log("Skill 2: ", skill2)
		console.log("Skill 3: ", skill3)
		console.log("Skill 4: ", skill4)
	}, [skill1, skill2, skill3, skill4])



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