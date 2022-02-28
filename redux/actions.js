
// Action Types

export const WRITE_CLASS = 'WRITE_CLASS';
export const WRITE_SUBCLASS = 'WRITE_SUBCLASS';
export const WRITE_RACE = 'WRITE_RACE';
export const WRITE_SUBRACE = 'WRITE_SUBRACE';
export const WRITE_BACKGROUND = 'WRITE_BACKGROUND';
export const WRITE_EQUIPMENT = 'WRITE_EQUIPMENT';
export const WRITE_SKILLS = 'WRITE_SKILLS';

// Action Functions

export function writeClass(charClass) {
	return {
		type: WRITE_CLASS,
		charClass: charClass
	};
}


export function writeSubclass(subclass) {
	return {
		type: WRITE_SUBCLASS,
		subclass: subclass
	}
}

export function writeRace(race) {
	return {
		type: WRITE_RACE,
		race: race
    }
}

export function writeSubrace(subrace) {
	return {
		type: WRITE_SUBRACE,
		subrace: subrace
	}
}

export function writeBackground(background) {
	return {
		type: WRITE_BACKGROUND,
		background: background
	}
}

export function writeEquipment(equipment) {
	return {
		type: WRITE_EQUIPMENT,
		equipment: equipment
	}
}

export function writeSkills(skills) {
	return {
		type: WRITE_SKILLS,
		skills: skills
	}
}