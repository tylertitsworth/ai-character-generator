import { gql } from "@apollo/client";
export const query = gql`
    query {
        abilityScores {
            full_name
            desc
            skills {
                name
            }
        }
        skills {
            name
            desc
            ability_score {
                name
            }
        }
        languages {
            name
            type
            script
        }
        alignments {
            name
            desc
        }
        backgrounds {
            name
            starting_proficiencies {
                name
            }
            language_options {
                choose
            }
            starting_equipment {
                equipment {
                    name
                }
            }
            feature {
                name
                desc
            }
            personality_traits {
                from
            }
            ideals {
                from {
                    desc
                    alignments {
                        name
                    }
                }
            }
            bonds {
                from
            }
            flaws {
                from
            }
        }
        classes {
            name
            hit_die
            proficiency_choices {
                choose
                from {
                    name
                }
            }
            proficiencies {
                name
            }
            saving_throws {
                name
            }
            starting_equipment {
                equipment {
                    name
                }
                quantity
            }
            subclasses {
                name
            }
            spellcasting {
                spellcasting_ability {
                    name
                }
            }
        }
        races {
            name
            speed
            ability_bonuses {
                bonus
                ability_score {
                    name
                }
            }
            alignment
            age
            size_description
            starting_proficiencies {
                name
            }
            starting_proficiency_options {
                choose
                from {
                    name
                }
            }
            languages {
                name
            }
            traits {
                name
            }
            subraces {
                name
            }
        }
        equipment {
            name 
            equipment_category {
                name
            }
            weapon_category
            weapon_range
            damage {
                damage_dice
                damage_type {
                    name
                }
            }
            properties {
                name
            }
        }
        spells {
            name
            desc
            level
            school {
                name
            }
            classes {
                name
            }
            subclasses {
                name
            }
        }
    }
`