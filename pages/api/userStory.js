import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-davinci-001", {
    prompt: generatePrompttwo(req.body.userStory,req.body.userClass,req.body.userRace),
    temperature: 0.8,
    max_tokens: 1000, 
    top_p: 1.0,
    frequency_penalty: 0.5,
    presence_penalty: 0.0,
  });
  res.status(200).json({ resultThree: completion.data.choices[0].text });
  // one token = 4 characters in english. max tokens is 2048
  // 1000 tokens in  "text-davinci-001" = $0.06. each call is 6 cents
  // console.log("What is Completion userStory.js>>>>>>" + JSON.stringify(completion.data));
}

function generatePrompttwo(userStory,genClass,genRace) {
  const simpleReturn=("write a one page dungeons and dragon backstory with "+genClass+' ' +' class, ' + genRace + ' race and '+userStory+ ' .');
  return "write a one page dungeons and dragon backstory with "+genClass+' ' +' class, ' + genRace + ' race and '+userStory+ ' .';
}