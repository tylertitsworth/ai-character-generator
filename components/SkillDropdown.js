import React, { useState, useEffect } from 'react';
import { SkillField, StyledSelect, FlexRow, Error, ItemContainer, ContentContainer } from '../styles/globals'

import { useDispatch, useSelector } from 'react-redux';
import {
    getAllClasses,
	getClass
} from '../redux/selectors';
import { writeSkills } from '../redux/actions';

export default function SkillDropdown(props) {
	var classData = useSelector(getAllClasses)

	const dispatch = useDispatch()

	var testClass = [];
	var choose = 0;
	var choicesFiltered = [];
	const currentClass = useSelector(getClass)
	console.log("CURRENT CLASS FROM SKILL DROPDOWN", currentClass)

	const [toggle, setToggle] = useState(true)		// will cause the useEffect below to only go off once
	const [isValid, setIsValid] = useState(true)
	const [skill1, setSkill1] = useState("")
	const [skill2, setSkill2] = useState("")
	const [skill3, setSkill3] = useState("")
	const [skill4, setSkill4] = useState("")
	var allSkills = [];

	for (var i = 0; i < classData.length; i++) {
		if (classData[i][1].name === currentClass) {
			console.log(classData[i])
			testClass = classData[i]
		}
	}
	console.log(testClass)
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
	var choicesFiltered = choices.filter(skill => !skill.name.includes("Skill: Religion") && !skill.name.includes("Skill: Insight"));

	//console.log(`Test Class: ${testClass[1].name}`)
	useEffect(() => {
		console.log("CHANGED CLASS")

		setToggle(true)
	}, [currentClass])

	// set skill state
	useEffect(() => {
		if (toggle) {

			if (choose == 1) {
				setSkill1(choicesFiltered[0].name.replace("Skill: ", ""))
				setSkill2("")
				setSkill3("")
				setSkill4("")
				setToggle(false)
			}
			else if (choose == 2) {
				setSkill1(choicesFiltered[0].name.replace("Skill: ", ""))
				setSkill2(choicesFiltered[1].name.replace("Skill: ", ""))
				setSkill3("")
				setSkill4("")
				setToggle(false)
			}
			else if (choose == 3) {
				setSkill1(choicesFiltered[0].name.replace("Skill: ", ""))
				setSkill2(choicesFiltered[1].name.replace("Skill: ", ""))
				setSkill3(choicesFiltered[2].name.replace("Skill: ", ""))
				setSkill4("")
				setToggle(false)
			}
			else {
				setSkill1(choicesFiltered[0].name.replace("Skill: ", ""))
				setSkill2(choicesFiltered[1].name.replace("Skill: ", ""))
				setSkill3(choicesFiltered[2].name.replace("Skill: ", ""))
				setSkill4(choicesFiltered[3].name.replace("Skill: ", ""))
				setToggle(false)
			}

		}
		// Just to console.log the skills each time they're changed; 
		// if removed, can remove the variables from the [] below
		console.log("Skill 1: ", skill1.replace("Skill: ", ""))
		console.log("Skill 2: ", skill2.replace("Skill: ", ""))
		console.log("Skill 3: ", skill3.replace("Skill: ", ""))
		console.log("Skill 4: ", skill4.replace("Skill: ", ""))
	}, [skill1, skill2, skill3, skill4, toggle])

	useEffect(() => {
		if (choose == 1) {
			setIsValid(true)
		}
		else if (choose == 2) {
			if (skill1 == skill2) {
				console.log("Two skills are the same")
				setIsValid(false)
			}
			else {
				setIsValid(true)
			}
		}
		else if (choose == 3) {
			if (skill1 == skill2 || skill1 == skill3 || skill2 == skill3) {
				console.log("Two skills are the same")
				setIsValid(false)
			}
			else {
				setIsValid(true)
			}
		}
		else {
			if (skill1 == skill2 || skill1 == skill3 || skill1 == skill4
				|| skill2 == skill3 || skill2 == skill4 || skill3 == skill4) {
				console.log("Two skills are the same")
				setIsValid(false)
			}
			else {
				setIsValid(true)
			}
		}
	}, [skill1, skill2, skill3, skill4])

	useEffect(() => {
		if (isValid == true) {
			allSkills = ["Religion", "Insight"]
			if (choose == 1) {
				allSkills.push(skill1)
				dispatch(writeSkills(allSkills))
			}
			else if (choose == 2) {
				allSkills.push(skill1)
				allSkills.push(skill2)
				dispatch(writeSkills(allSkills))
			}
			else if (choose == 3) {
				allSkills.push(skill1)
				allSkills.push(skill2)
				allSkills.push(skill3)
				dispatch(writeSkills(allSkills))
			}
			else {
				allSkills.push(skill1)
				allSkills.push(skill2)
				allSkills.push(skill3)
				allSkills.push(skill4)
				dispatch(writeSkills(allSkills))
			}

		}
	}, [currentClass, skill1, skill2, skill3, skill4, isValid])


	if (choose == 1) {
		return (
			<>
				<h3>Choose {choose} Skill</h3>
				<SkillField>
					<StyledSelect value={skill1} onChange={(event) => { console.log(event.target.value); setSkill1(event.target.value) }}> {
						choicesFiltered.map((choice, i) =>
							<option key={i} value={choice.name.replace("Skill: ", "")}>{choice.name.replace("Skill: ", "")}</option>
						)
					}
					</StyledSelect>
				</SkillField>
			</>
		)
	}
	else if (choose == 2) {
		return (
			<ContentContainer>
				<FlexRow>
					<ItemContainer>
						<h2>Choose {choose} Skills</h2>
						<SkillField>
							<StyledSelect value={skill1} onChange={(event) => setSkill1(event.target.value)}> {
								choicesFiltered.map((choice, i) =>
									<option key={i} value={choice.name.replace("Skill: ", "")}>{choice.name.replace("Skill: ", "")}</option>
								)
							}
							</StyledSelect>
						</SkillField>
						<SkillField>
							<StyledSelect value={skill2} onChange={(event) => setSkill2(event.target.value)}> {
								choicesFiltered.map((choice, i) =>
									<option key={i} value={choice.name.replace("Skill: ", "")}>{choice.name.replace("Skill: ", "")}</option>
								)
							}
							</StyledSelect>
						</SkillField>
					</ItemContainer>
				</FlexRow>
				{isValid ? <> </> :
					<Error>
						<h1>Please choose unique skills for your character!</h1>
					</Error>
				}
			</ContentContainer>
		)
	}
	else if (choose === 3) {
		return (
			<ContentContainer>
				<FlexRow>
				<ItemContainer>
					<h2>Choose {choose} Skills</h2>
					<SkillField>
						<StyledSelect value={skill1} onChange={(event) => setSkill1(event.target.value)}> {
							choicesFiltered.map((choice, i) =>
								<option key={i} value={choice.name.replace("Skill: ", "")}>{choice.name.replace("Skill: ", "")}</option>
							)
						}
						</StyledSelect>
					</SkillField>
					<SkillField>
						<StyledSelect value={skill2} onChange={(event) => setSkill2(event.target.value)}> {
							choicesFiltered.map((choice, i) =>
								<option key={i} value={choice.name.replace("Skill: ", "")}>{choice.name.replace("Skill: ", "")}</option>
							)
						}
						</StyledSelect>
					</SkillField>
					<SkillField>
						<StyledSelect value={skill3} onChange={(event) => setSkill3(event.target.value)}> {
							choicesFiltered.map((choice, i) =>
								<option key={i} value={choice.name.replace("Skill: ", "")}>{choice.name.replace("Skill: ", "")}</option>
							)
						}
						</StyledSelect>
					</SkillField>
					</ItemContainer>
				</FlexRow>
				{isValid ? <> </> :
					<Error>
						<h1>Please choose unique skills for your character!</h1>
					</Error>
				}
			</ContentContainer>
		)
	}

	else {
		return (
			<ContentContainer>
				<FlexRow>
					<ItemContainer>
						<h2>Choose {choose} Skills</h2>
						<SkillField>
							<StyledSelect value={skill1} onChange={(event) => setSkill1(event.target.value)}> {
								choicesFiltered.map((choice, i) =>
									<option key={i} value={choice.name.replace("Skill: ", "")}>{choice.name.replace("Skill: ", "")}</option>
								)
							}
							</StyledSelect>
						</SkillField>
						<SkillField>
							<StyledSelect value={skill2} onChange={(event) => setSkill2(event.target.value)}> {
								choicesFiltered.map((choice, i) =>
									<option key={i} value={choice.name.replace("Skill: ", "")}>{choice.name.replace("Skill: ", "")}</option>
								)
							}
							</StyledSelect>
						</SkillField>
						<SkillField>
							<StyledSelect value={skill3} onChange={(event) => setSkill3(event.target.value)}> {
								choicesFiltered.map((choice, i) =>
									<option key={i} value={choice.name.replace("Skill: ", "")}>{choice.name.replace("Skill: ", "")}</option>
								)
							}
							</StyledSelect>
						</SkillField>
						<SkillField>
							<StyledSelect value={skill4} onChange={(event) => setSkill4(event.target.value)}> {
								choicesFiltered.map((choice, i) =>
									<option key={i} value={choice.name.replace("Skill: ", "")}>{choice.name.replace("Skill: ", "")}</option>
								)
							}
							</StyledSelect>
						</SkillField>
					</ItemContainer>
				</FlexRow>
				{isValid ? <> </> :
					<Error>
						<h1>Please choose unique skills for your character!</h1>
					</Error>
				}
			</ContentContainer>
		)
	}
}