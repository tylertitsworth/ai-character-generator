import {
	WRITE_CLASS,
	WRITE_SUBCLASS,
	WRITE_RACE,
	WRITE_SUBRACE,
	WRITE_BACKGROUND,
	WRITE_EQUIPMENT,
	WRITE_SKILLS
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
		case WRITE_SUBCLASS:
			return {
				...state,
				subclass: action.subclass
			}
		case WRITE_RACE:
			return {
				...state,
				race: action.race
			}
		case WRITE_SUBRACE:
			return {
				...state,
				subrace: action.subrace
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
		default:
			return state
	}

}


export default charReducer;