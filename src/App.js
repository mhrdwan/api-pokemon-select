import { useEffect } from 'react';
import { useState } from 'react';
import Select from 'react-select'
import './App.css';

function App() {

    const [datas, setDatas] = useState([])
    const [userSelect ,setUserSelect] = useState ('')
    const [isShow, setIsShow] = useState(false)

    const getBerries = async () => {
    const berries = await fetch('https://pokeapi.co/api/v2/berry/')
    const value = await berries.json()
    const result = value.results.map(data => {
      return {
        label : data.name,
        value : data.name
      }
     
    
    })
   setDatas(result.sort((a,b)=>a.label.localeCompare(b.label)))
   
  }

  useEffect(() => {
    getBerries ()
})
  const handleSubmit= () =>{
    setIsShow(true)
  }
  const handleChange = (value) => {
    setUserSelect(value)
  }
  return (
    <div className="App">
     <Select options={datas} onChange={(e) => handleChange(e.value)}></Select>
     <button onClick={()=>handleSubmit()}>Show value</button>
     <h1>data yang di pilih adalah </h1>
    <div style={{color:'red'}}>
    {isShow ? userSelect : ''}
    </div>
    
      
     </div>
  );
}

export default App;
