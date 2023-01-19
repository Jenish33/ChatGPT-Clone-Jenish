import {Configuration, OpenAIApi} from 'openai';
import { useState } from 'react';
import './App.css';
import OptionSelection from './components/OptionSelection';
import Translation from './components/Translation';
import { arrayItems } from "./AIOptions";
import {DotLoader} from 'react-spinners'


function App() {
  const configuration = new Configuration({
      apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

  const[option, setOption] = useState({});
  const[input, setInput] = useState("");
  const[result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    setLoading(true)
    let object = { ...option, prompt: input };
    const response = await openai.createCompletion(object);
    setResult(response.data.choices[0].text);
    setLoading(false)
  };
  
  
  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result}/>
      )}
      {loading ? <DotLoader color={'white'}/> : <></> }
    </div>
  );
}

export default App;
