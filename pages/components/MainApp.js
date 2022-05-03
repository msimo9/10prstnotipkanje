import React, {useState, useEffect} from 'react'
import useEventListener from '@use-it/event-listener'
import allWords from './slovenianWords';
import { lessons } from './words';
import { keyboardKeys } from './Keyboard';
import { ReloadCircleOutline, ReloadCircle, Reload } from 'react-ionicons';

const MainApp = ({setGameStarted, numberOfWords, difficulty, isChecked}) => {
  const [words, setWords] = useState([]);
  const [wordsReady, setWordsReady] = useState(false);
  const [wordReady, setWordReady] = useState(false);
  const [typedCharacters, setTypedCharacters] = useState([]);
  const [pressedKey, setPressedKey] = useState("");
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
            word: arr[i][Math.floor(Math.random()*arr[i].length)],
            posX: Math.floor(Math.random()*(width*0.7)+1),
            posY: 0
          }
        );
      }
    }
    console.log("whole arr: ", tempArr)
    
    
    setWords(tempArr);
    setWordsReady(true);
    setWordReady(true);
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
    setWordReady(true);
    console.log("Word: ",tempArr[1].word)
  }

  function handler({ key }) {
    if(wordsReady){
      setPressedKey(key);
      if (key.toUpperCase() === words[0].word.charAt(0).toUpperCase()) {
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
          setWordReady(false);
          removeWord();
        };
        setWords(tempArr);
      }else if(key.toUpperCase() === " "){
        location.reload();
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
      if(wordsReady && wordReady && words[0] && words[0].word !== "" && words[0].word !== undefined){
      const intervalId = setInterval(() => {
        let tempArr = words;
        tempArr[0].posY += 1;
        if(wordReady && tempArr[0].word === "") removeWord();
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
      }else{
        const interval2Id = setInterval(() => {
        }, 1);
        return ()=> clearInterval(interval2Id);
      }
  }, [words])

  useEffect(() => {
    if(wordsReady && wordReady && words[0]){
      const intervalId = setInterval(() => {
        setPressedKey("");
      }, 400)
      return () => clearInterval(intervalId);
      }
  }, [pressedKey])
  
  useEffect(() => {
  }, [words, time, wordReady])
  
  return (
    wordsReady && words.length > 0 ?
    <div className='w-4/5 h-4/5 border-4 border-white shadow-2xl relative flex justify-center items-center'>
      <div className='w-30 h-auto py-4 px-2 bg-red-400 rounded-md flex-col flex justify-center items-center fixed bottom-4 left-4 text-white font-semibold text-sm '>
        <div className=''>NAPAKE: {charErrors}</div>
      </div>
      <div onClick={() => location.reload()} className='w-12 h-12 transition-all duration-200 shadow-2xl border-2 border-white py-4 px-2 rounded-md flex-col flex justify-center items-center fixed top-4 left-4 text-white font-semibold text-lg hover:cursor-pointer '>
        <div className=''>
          <Reload color={"#ffffff"} />
        </div>
      </div>
      {/*wordReady && wordsReady && words[0].word !== "" && words[0].word !== null && <div className='w-48 h-auto flex-col flex justify-start items-end space-y-2 fixed top-0 mt-2 right-0 mr-2'>
        <div className=''>TRENUTNA ČRKA: {words[0].word.charAt(0).toUpperCase()}</div>
        <div className=''>PRITISNJENA ČRKA: {pressedKey.toLocaleUpperCase().length !== 0 ? pressedKey.toLocaleUpperCase() : "⎵"}</div>
        <div className='text-sm'>TRENUTNA BESEDA: {words[0].word.toUpperCase()}</div>
      </div>*/}
      {
        words[0].word !== undefined && words[0].word !== "" && wordReady &&
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
      {
        isChecked &&
        <div className='w-full h-auto flex-col flex justify-center items-center fixed bottom-0 mb-2 space-y-1'>
          <div className='space-y-2 flex justify-start flex-col items-start'>
          {keyboardKeys.map((item, index) => {
            return(
              <div
                key={index}
                className='flex justify-center items-center flex-row space-x-2'
                style={
                  index === 0 ? {paddingLeft: 0}
                  : index === 1 ? {paddingLeft: 20}
                  : index === 2 ? {paddingLeft: 28}
                  : {paddingLeft: 48}
                }
              >
                {
                  item.map((subitem, index) => {
                    let keyStyle = "w-8 h-8 text-white flex justify-center items-center rounded-md ";

                    if(pressedKey !== ""){
                      if(pressedKey === subitem.key){
                        keyStyle += "opacity-100"
                      }else{
                        keyStyle += "opacity-70"
                      }
                    }else{
                      keyStyle += "opacity-70"
                    }
                    
                    return(
                      <div key={index} style={{background: subitem.color}} className={keyStyle}>
                        <span style={subitem.key === "f" || subitem.key === "j" ? {textDecorationLine: 'underline'} : {textDecorationLine: 'none'}}>{subitem.key.toUpperCase()}</span>
                      </div>
                    )
                  })
                }
              </div>
            )
          })}
          </div>
        </div>
      }
    </div>
    : <div></div>
  )
}

export default MainApp