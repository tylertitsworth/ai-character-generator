import {
	WRITE_CLASS,
	WRITE_RACE,
	WRITE_BACKGROUND,
	WRITE_EQUIPMENT,
	WRITE_SKILLS,
	WRITE_ABILITY_SCORES
} from './actions'


function charReducer(state = [], action) {

	console.log(state)
	console.log("-- charReducer: ", action.type)

	switch (action.type) {

		case WRITE_CLASS:
			return {
				...state,
				charClass: action.charClass
			}
		case WRITE_RACE:
			return {
				...state,
				race: action.race
			}
		case WRITE_BACKGROUND:
			return {
				...state,
				background: action.background
			}
		case WRITE_EQUIPMENT:
			return {
				...state,
				equipment: action.equipment
			}
		case WRITE_SKILLS:
			return {
				...state,
				skills: action.skills
			}
		case WRITE_ABILITY_SCORES:
			return {
				...state,
				abilityScores: {
					strength: action.strength,
					dexterity: action.dexterity,
					constitution: action.constitution,
					intelligence: action.intelligence,
					wisdom: action.wisdom,
					charisma: action.charisma
				}
			}
		default:
			return state
	}

}


export default charReducer;