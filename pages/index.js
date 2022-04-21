import react, {useEffect, useState} from 'react';
import MainApp from './components/MainApp';
import useEventListener from '@use-it/event-listener'
import Slider from '@mui/material/Slider';

const Home = () =>{
  const [gameStarted, setGameStarted] = useState(false);
  const [numberOfWords, setNumberOfWords] = useState(20);
  const [difficulty, setDifficulty] = useState(2);
  function handler({ key }) {
    if (key === " ") {
      setGameStarted(true);
    }
  }
  useEventListener('keydown', handler);
  return(
    <div className='w-screen h-screen bg-blue-100 flex justify-center items-center'>
      {
        !gameStarted &&
        <div className='flex-col w-screen h-screen backdrop-blur-sm absolute top-0 flex bg-blue-100 justify-center items-center text-black tracking-wide'>
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
          
        </div>
      }
      {
        gameStarted &&
        <MainApp setGameStarted={setGameStarted} numberOfWords={numberOfWords} difficulty={difficulty}/>
      }
    </div>
  )
}

export default Home;