import { useState } from 'react'
import { Button } from '@mui/material'
import './App.css'

function App() {
  const [isDisabled, setIsDisabled] = useState(false); 
  function handleClick() {
    setIsDisabled(!isDisabled);
  }

  return (
    <>
      <div className="center">
        <h1>material ui project</h1>
        
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleClick}
          disabled={isDisabled}
        >
          Click Me
        </Button>
        
        <Button 
          variant="outlined" 
          color="secondary" 
          onClick={() => setIsDisabled(false)}
          className="reset-btn"
        >
          Reset
        </Button>
      </div>
    </>
  )
}

export default App
