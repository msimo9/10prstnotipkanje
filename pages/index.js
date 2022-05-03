import react, {useEffect, useState} from 'react';
import MainApp from './MainApp';
import useEventListener from '@use-it/event-listener'
import Slider from '@mui/material/Slider';
import { keyboardKeys } from '../public/components/Keyboard';
import Image from 'next/image';
import Switch from "react-switch";
import { FaBeer, FaKeyboard } from 'react-icons/fa';

const Home = () =>{
  const [gameStarted, setGameStarted] = useState(false);
  const [numberOfWords, setNumberOfWords] = useState(20);
  const [difficulty, setDifficulty] = useState(2);
  const [pressedKey, setPressedKey] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  function handler({ key }) {
    if (key === " ") {
      setGameStarted(true);
    }else{
      setPressedKey(key);
    }
  }
  useEventListener('keydown', handler);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPressedKey("");
    }, 400)
    return () => clearInterval(intervalId);
  }, [pressedKey])

  return(
    <div className='w-screen h-screen bg-blue-100 flex justify-center items-center'>
      {
        !gameStarted &&
        <div className='flex-col w-screen h-screen backdrop-blur-sm absolute top-0 flex bg-blue-100 pt-64 items-center text-black tracking-wide'>
          <div className='w-auto my-6'>
            pritisni<span className='font-bold px-1'>presledek</span> za začetek
          </div>
          <div className='w-48'>
          <Slider
            size="small"
            defaultValue={numberOfWords}
            onChange={(e) => setNumberOfWords(e.target.value)}
            aria-label="Small"
            step={10}
            min={10}
            max={100}
            valueLabelDisplay="auto"
          />
          </div>

          <div className='w-48 flex flex-col'>
            <Slider
              size="small"
              defaultValue={difficulty}
              aria-label="Small"
              onChange={(e) => setDifficulty(e.target.value)}
              min={1}
              max={3}
              valueLabelDisplay="auto"
            />
            <div className='flex w-48 flex-row justify-between text-sm font-bold'>
              {difficulty === 1 ? <span>lahko</span> : <span></span>}
              {difficulty === 2 ? <span>normalno</span> : <span></span>}
              {difficulty === 3 ? <span>težko</span> : <span></span>}
            </div>
          </div>

          <div className='w-48 flex flex-col justify-center items-center mt-8'>
            <FaKeyboard className='text-black text-lg font-thin' />
            <Switch onChange={() => setIsChecked(!isChecked)} checked={isChecked} uncheckedIcon={false} checkedIcon={false} offColor={"#bfdbfe"} onColor={"#60a5fa"} className='border-2 border-white' height={14} width={28} handleDiameter={12} />
          </div>

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
                    if(subitem.key === "f" || subitem.key === "j"){
                      keyStyle += "border-4 border-white "
                    }
                    if(subitem.key === pressedKey){
                      keyStyle += "opacity-100 "
                    }else{
                      keyStyle += "opacity-70 "
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
          <Image alt="fingers" src={require('../public/components/fingers.png')} />
        </div>
      }
      </div>
      }
      {
        gameStarted &&
        <MainApp setGameStarted={setGameStarted} numberOfWords={numberOfWords} difficulty={difficulty} isChecked={isChecked} />
      }
    </div>
  )
}

export default Home;