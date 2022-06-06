import React, {useState} from 'react';
import Header from './Components/Header/Header';
import Characters from './Components/Characters/Characters';

const App = () => {

    const [text, setText] = useState("")

  return (
    <div className='App'>
        <Header setText = {setText}/>
        <Characters text = {text}/>
    </div>
  )
}

export default App