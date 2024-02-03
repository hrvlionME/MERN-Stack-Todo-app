import styles from './ListItem.module.css'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ListItem(item) {
    const [isClicked, setIsClicked] = useState(false)
    
    async function deleteData() {
        try {
            const data = {
              _id: item.id,
            };
            
            const response = await fetch("http://localhost:4000/delete", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
        
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            const responseData = await response.json();
            console.log('POST successful:', responseData);
          } catch (error) {
            console.error('Error posting data:', error.message);
          }
    }

    return (
        <li className={isClicked ? styles.ToDoItemClicked : styles.ToDoItem}>{item.content}<div className={styles.buttons}><FontAwesomeIcon onClick={() => {setIsClicked(current => !current)}} icon="fa-solid fa-check" /><FontAwesomeIcon onClick={deleteData} icon="fa-solid fa-xmark" /></div></li>
    )
}