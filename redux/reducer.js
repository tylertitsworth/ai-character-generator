import {
	WRITE_CLASS,
	WRITE_RACE,
	WRITE_BACKGROUND,
	WRITE_EQUIPMENT,
	WRITE_SKILLS,
	WRITE_ABILITY_SCORES,
	WRITE_STORY,
	WRITE_ALL_CLASSES,
	WRITE_ALL_RACES,
	WRITE_ALL_BACKGROUNDS,
	WRITE_ALL_ALIGNMENTS,
	WRITE_ALL_SKILLS,
} from './actions'

function charReducer(state = [], action) {
	//console.log(state)
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
				abilityScores: action.abilityScores
			}
		case WRITE_STORY:
			return {
				...state,	
				story: action.story
			}
		case WRITE_ALL_CLASSES:
			return {
				...state,
				allClasses: action.allClasses
			}
		case WRITE_ALL_RACES:
			return {
				...state,
				allRaces: action.allRaces
			}
		case WRITE_ALL_BACKGROUNDS:
			return {
				...state,
				allBackgrounds: action.allBackgrounds
			}
		case WRITE_ALL_ALIGNMENTS:
			return {
				...state,
				allAlignments: action.allAlignments
			}
		case WRITE_ALL_SKILLS:
			return {
				...state,
				allSkills: action.allSkills
            }
		default:
			return state
	}
}

export default charReducer;