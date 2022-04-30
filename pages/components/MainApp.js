import React, {useState, useEffect} from 'react'
import useEventListener from '@use-it/event-listener'
import allWords from './slovenianWords';
import { lessons } from './words';

const MainApp = ({setGameStarted, numberOfWords, difficulty}) => {
  const [words, setWords] = useState([]);
  const [wordsReady, setWordsReady] = useState(false);
  const [typedCharacters, setTypedCharacters] = useState([]);
  const [incorrect, setIncorrect] = useState(false);
  const [screenH, setScreenH] = useState(1920);
  const [screenW, setScreenW] = useState(1080);
  const [speed, setSpeed] = useState(difficulty === 1 ? 30 : difficulty === 2 ? 20 : 10);
  const [errors, setErrors] = useState(0);
  const [charErrors, setCharErrors] = useState(0);

  const generateWords = (arr) => {
    setErrors(0);
    setCharErrors(0);
    setWords([]);
    const width  = window.innerWidth || document.documentElement.clientWidth || 
    document.body.clientWidth;
    const height = window.innerHeight|| document.documentElement.clientHeight|| 
    document.body.clientHeight;
    setScreenH(height);
    setScreenW(width);
    let tempArr = [];
    for(let i = 0; i < arr.length ; i++){
      for(let j = 0; j<numberOfWords; j++){
        tempArr.push(
          {
            word: arr[i][Math.floor(Math.random()*arr[i].length-1)],
            posX: Math.floor(Math.random()*(width*0.7)+1),
            posY: 0}
        );
      }
    }
    
    
    setWords(tempArr);
    setWordsReady(true);
  }

  const removeWord = () => {
    setTypedCharacters([]);
    let tempArr = words;
    tempArr.shift();
    setWords(tempArr);
    if(words.length === 0){
      setWordsReady(false);
      setGameStarted(false);
      let errorWord = "";
      if(charErrors%10 === 1){
        errorWord = " napako."
      }
      else if(charErrors%10 === 2){
        errorWord = " napaki."
      }
      else if(charErrors%10 === 3 || charErrors%10 === 4){
        errorWord = " napake."
      }
      else{
        errorWord = " napak."
      }
      const alertString = "bravo, šlo ti je dobro, imel si " +  charErrors + errorWord;
      alert(alertString)
    };
  }

  function handler({ key }) {
    if(wordsReady){
      if (key.toUpperCase() === words[0].word.charAt(0).toUpperCase() || words[0].word.charAt(0).toUpperCase() === "⎵" && key.toUpperCase() === " ") {
        let tempArr = words;

        if(!incorrect){
          let tempObj = {char: words[0].word.charAt(0), correct: true}
          setTypedCharacters(typedCharacters => [...typedCharacters, tempObj])
        }else{
          let tempObj = {char: words[0].word.charAt(0), correct: false}
          setTypedCharacters(typedCharacters => [...typedCharacters, tempObj])
          setIncorrect(false);
        }
        


        tempArr[0].word = tempArr[0].word.substring(1);
        if(tempArr[0].word === ""){
          removeWord();
        };
        setWords(tempArr);
      }else{
        setCharErrors(charErrors+1);
        setIncorrect(true);
      }
    }
  }
  useEventListener('keydown', handler);

  useEffect(() => {
    generateWords(lessons);
  }, [])

  

  const [time, setTime] = useState(0);
  useEffect(() => {
      if(wordsReady && words[0]){
      const intervalId = setInterval(() => {
        let tempArr = words;
        tempArr[0].posY += 1;
        if(tempArr[0].posY > (screenH*0.8-40)){
          removeWord();
          let tempErr = errors;
            tempErr +=1;
            setErrors(tempErr);
        }
        setWords(tempArr);
        setTime(time++);
      }, speed)
      return () => clearInterval(intervalId);
      }
  }, [words])
  
  useEffect(() => {
  }, [words, time])
  
  return (
    wordsReady && words.length > 0 ?
    <div className='w-4/5 h-4/5 border-4 border-white shadow-2xl relative flex justify-center items-center'>
      <div className='w-full h-auto flex-col flex justify-center items-center space-y-2 fixed top-0 mt-2'>
        <div className=''>ZGREŠENE BESEDE: {errors}</div>
        <div className=''>ZGREŠENE ČRKE: {charErrors}</div>
      </div>
      {
        words[0].word !== undefined && 
        <div className={`absolute bg-white shadow-2xl rounded-sm w-auto px-4 h-10 flex justify-center items-center `} style={{top: words[0].posY, left: words[0].posX}} >
          <span className='text-black tracking-wide'>
            {typedCharacters.length > 0 ? typedCharacters.map((item, index) => {
              return(
                item.correct ?
                  <span className='text-green-500' key={index}>{typedCharacters[index].char.toUpperCase()}</span>
                : <span className='text-red-500' key={index}>{typedCharacters[index].char.toUpperCase()}</span>
              )
            }) : ""}
            {words[0].word ? words[0].word.toUpperCase() : ""}
          </span>
        </div>
      }
    </div>
    : <div></div>
  )
}

export default MainApp