import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-davinci-001", {
    prompt: generatePrompttwo(req.body.userClass),
    temperature: 0.6,
  });
  res.status(200).json({ resultTwo: completion.data.choices[0].text });
}

function generatePrompttwo(userClass) {
  const capitalizedAnimal = userClass[0].toUpperCase() + userClass.slice(1).toLowerCase();
  console.log("user input "+capitalizedAnimal);
  return `Suggest three races for a dungeon and dragon character.
    Character: Race
    Races: Dwarf, Elf, Halfling, Human, Dragonborn, Gnome, Half-Elf, Half-Orc, Tiefling
    Character: ${capitalizedAnimal}
    Races: 
  `;
}
