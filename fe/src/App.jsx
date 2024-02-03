import { useEffect, useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faXmark} from '@fortawesome/free-solid-svg-icons'
import './App.css'
import ListItem from './components/ListItem/ListItem'
import Input from './components/Input/Input'
function App() {
  library.add(faCheck, faXmark)
  const [items, setItems] = useState([])

  useEffect(() => {
      getData()
  }, [items])

  async function getData() {
    try{
    const response = await fetch("http://localhost:4000/")

     if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    setItems(data)
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
  }

  return (
    <>
    <Input/>
    <ul>
      {items.map((item) => (
        <ListItem id={item._id} content={item.content}/>
      ))}
      
    </ul>
    </>
  )
}

export default App
