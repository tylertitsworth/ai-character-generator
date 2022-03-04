import React, { useState, useEffect } from 'react';
import { SkillField, StyledSelect, FlexRow } from '../styles/globals'


export default function SkillDropdown(props) {

	var skillData = props.skills
	var classData = props.classes
	console.log(classData)

	const [skill1, setSkill1] = useState("")
	const [skill2, setSkill2] = useState("")
	const [skill3, setSkill3] = useState("")
	const [skill4, setSkill4] = useState("")

	var testClass = classData[11]		// change this number to get different results (0-11)
	var choose = testClass[1].proficiency_choices[0].choose		// (1-4)
	var choices = testClass[1].proficiency_choices[0].from
	console.log(`Test Class: ${testClass[1].name}:`, testClass)
	console.log("Choose: ", choose)
	console.log("From: ", choices)

	//var choices = []
	//choices.push(classData[0][1].proficiency_choices[0].choose)
	//choices.push(classData[1][1].proficiency_choices[0].choose)
	//choices.push(classData[2][1].proficiency_choices[0].choose)
	//choices.push(classData[3][1].proficiency_choices[0].choose)
	//choices.push(classData[4][1].proficiency_choices[0].choose)
	//choices.push(classData[5][1].proficiency_choices[0].choose)
	//choices.push(classData[6][1].proficiency_choices[0].choose)
	//choices.push(classData[7][1].proficiency_choices[0].choose)
	//choices.push(classData[8][1].proficiency_choices[0].choose)
	//choices.push(classData[9][1].proficiency_choices[0].choose)
	//choices.push(classData[10][1].proficiency_choices[0].choose)
	//choices.push(classData[11][1].proficiency_choices[0].choose)
	//console.log(choices)

	useEffect(() => {
		
	}, [skill1, skill2, skill3, skill4])

	if (choose == 1) {
		return (
			<>
				<SkillField>
					<StyledSelect> {
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
			<FlexRow>
				<SkillField>
					<StyledSelect> {
						choices.map((choice, i) =>
							<option key={i} value={choice.name}>{choice.name.replace("Skill: ", "")}</option>
						)
					}
					</StyledSelect>
				</SkillField>
				<SkillField>
					<StyledSelect> {
						choices.map((choice, i) =>
							<option key={i} value={choice.name}>{choice.name.replace("Skill: ", "")}</option>
						)
					}
					</StyledSelect>
				</SkillField>
			</FlexRow>
		)
	}
	else if (choose === 3) {
		return (
			<FlexRow>
				<SkillField>
					<StyledSelect> {
						choices.map((choice, i) =>
							<option key={i} value={choice.name}>{choice.name.replace("Skill: ", "")}</option>
						)
					}
					</StyledSelect>
				</SkillField>
				<SkillField>
					<StyledSelect> {
						choices.map((choice, i) =>
							<option key={i} value={choice.name}>{choice.name.replace("Skill: ", "")}</option>
						)
					}
					</StyledSelect>
				</SkillField>
				<SkillField>
					<StyledSelect> {
						choices.map((choice, i) =>
							<option key={i} value={choice.name}>{choice.name.replace("Skill: ", "")}</option>
						)
					}
					</StyledSelect>
				</SkillField>
			</FlexRow>
		)
	}
	else {
		return (
			<FlexRow>
				<SkillField>
					<StyledSelect> {
						choices.map((choice, i) =>
							<option key={i} value={choice.name}>{choice.name.replace("Skill: ", "")}</option>
						)
					}
					</StyledSelect>
				</SkillField>
				<SkillField>
					<StyledSelect> {
						choices.map((choice, i) =>
							<option key={i} value={choice.name}>{choice.name.replace("Skill: ", "")}</option>
						)
					}
					</StyledSelect>
				</SkillField>
				<SkillField>
					<StyledSelect> {
						choices.map((choice, i) =>
							<option key={i} value={choice.name}>{choice.name.replace("Skill: ", "")}</option>
						)
					}
					</StyledSelect>
				</SkillField>
				<SkillField>
					<StyledSelect> {
						choices.map((choice, i) =>
							<option key={i} value={choice.name}>{choice.name.replace("Skill: ", "")}</option>
						)
					}
					</StyledSelect>
				</SkillField>
			</FlexRow>
		)
	}
}