// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
import { Configuration, OpenAIApi } from "openai";
import { query } from "../../hooks/qltree";
import { useQuery } from "@apollo/client";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-davinci-001", {
    prompt: generatePrompt(req.body.userClass),
    temperature: 0.6,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(userClass) {
  console.log("User input is-------------------------- "+userClass)
  const capitalizedAnimal =
  userClass[0].toUpperCase() + userClass.slice(1).toLowerCase();
  // const labels = useQuery.name;
  console.log("User input is--------------------------- "+userClass)
  // console.log("these are the labels "+labels);
    //Query below
  return `Suggest three classes for a dungeons and dragon character.

Animal: Spells
Names: Bard, Cleric, Druid, Sorcerer, Wizard, Warlock, Artificer, Paladin, Ranger
Animal: Melee
Names: Barbarian, Rogue, Paladin, Monk , Fighter
Animal: ${capitalizedAnimal}
Names: `;
}