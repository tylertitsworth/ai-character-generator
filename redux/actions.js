
// Action Types

export const WRITE_CLASS = 'WRITE_CLASS';
export const WRITE_RACE = 'WRITE_RACE';
export const WRITE_BACKGROUND = 'WRITE_BACKGROUND';
export const WRITE_EQUIPMENT = 'WRITE_EQUIPMENT';
export const WRITE_SKILLS = 'WRITE_SKILLS';
export const WRITE_ABILITY_SCORES = 'WRITE_ABILITY_SCORES';


// Storage Actions
export const WRITE_ALL_CLASSES = 'WRITE_ALL_CLASSES';
export const WRITE_ALL_RACES = 'WRITE_ALL_RACES';
export const WRITE_ALL_BACKGROUNDS = 'WRITE_ALL_BACKGROUNDS';
export const WRITE_ALL_ALIGNMENTS = 'WRITE_ALL_ALIGNMENTS';
export const WRITE_ALL_SKILLS = 'WRITE_ALL_SKILLS';

// Action Functions

export function writeClass(charClass) {
	return {
		type: WRITE_CLASS,
		charClass: charClass
	};
}

export function writeRace(race) {
	return {
		type: WRITE_RACE,
		race: race
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

export function writeAbilityScores(strength, dexterity, constitution, intelligence, wisdom, charisma) {
	return {
		type: WRITE_ABILITY_SCORES,
		abilityScores: {
			strength: strength,
			dexterity: dexterity,
			constitution: constitution,
			intelligence: intelligence,
			wisdom: wisdom,
			charisma: charisma
        }
    }
}


// Storage 

export function writeAllClasses(allClasses) {
	return {
		type: WRITE_ALL_CLASSES,
		allClasses: allClasses
    }
}

export function writeAllRaces(allRaces) {
	return {
		type: WRITE_ALL_RACES,
		allRaces: allRaces
	}
}

export function writeAllBackgrounds(allBackgrounds) {
	return {
		type: WRITE_ALL_BACKGROUNDS,
		allBackgrounds: allBackgrounds
    }
}

export function writeAllAlignments(allAlignments) {
	return {
		type: WRITE_ALL_ALIGNMENTS,
		allAlignments: allAlignments
	}
}

export function writeAllSkills(allSkills) {
	return {
		type: WRITE_ALL_SKILLS,
		allSkills: allSkills
	}
}