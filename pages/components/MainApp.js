import React, {useState, useEffect} from 'react'
import useEventListener from '@use-it/event-listener'
import allWords from './slovenianWords';
import { lesson1, lesson2 } from './words';

const MainApp = ({setGameStarted, numberOfWords, difficulty}) => {
  const [words, setWords] = useState([]);
  const [wordsReady, setWordsReady] = useState(false);
  const [screenH, setScreenH] = useState(1920);
  const [screenW, setScreenW] = useState(1080);
  const [speed, setSpeed] = useState(difficulty === 1 ? 30 : difficulty === 2 ? 20 : 10);
  const [errors, setErrors] = useState(0);
  const generateWords = (arr) => {
    const width  = window.innerWidth || document.documentElement.clientWidth || 
    document.body.clientWidth;
    const height = window.innerHeight|| document.documentElement.clientHeight|| 
    document.body.clientHeight;
    setScreenH(height);
    setScreenW(width);
    let tempArr = [];
    for(let i = 0; i<numberOfWords; i++){
      tempArr.push(
        {
          word: arr[Math.floor(Math.random()*arr.length-1)],
          posX: Math.floor(Math.random()*(width*0.7)+1),
          posY: 0}
      );
    }
    
    console.log("tempArr: ", tempArr)
    setWords(tempArr);
    setWordsReady(true);
  }

  const removeWord = () => {
    let tempArr = words;
    tempArr.shift();
    setWords(tempArr);
    console.log("words: ",words);
    console.log("wordsL: ", words.length);
    if(words.length === 0){
      setWordsReady(false);
      generateWords(lesson2);
      //setGameStarted(false);
      //const alertString = "bravo, šlo ti je dobro, imel si " +  errors + " napak.";
      //alert(alertString)
    };
  }

  function handler({ key }) {
    if(wordsReady){
      if (key === words[0].word.charAt(0) || words[0].word.charAt(0) === "⎵" && key === " ") {
        let tempArr = words;
        tempArr[0].word = tempArr[0].word.substring(1);
        if(tempArr[0].word === ""){
          removeWord();
        };
        setWords(tempArr);
      }
    }
  }
  useEventListener('keydown', handler);

  useEffect(() => {
    generateWords(lesson1);
  }, [])

  

  const [time, setTime] = useState(0);
  useEffect(() => {
      if(wordsReady && words[0]){
      const intervalId = setInterval(() => {
        if(words.lengt <= 1) console.log(words[0]);
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
      <div className='fixed top-0'>ZGREŠENE BESEDE: {errors}</div>
      {
        words[0].word !== undefined && 
        <div className={`absolute bg-white shadow-2xl rounded-sm w-auto px-4 h-10 flex justify-center items-center `} style={{top: words[0].posY, left: words[0].posX}} >
          <span className='text-black tracking-wide'>{words[0].word ? words[0].word.toUpperCase() : ""}</span>
        </div>
      }
    </div>
    : <div></div>
  )
}

export default MainApp