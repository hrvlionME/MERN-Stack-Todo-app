import styles from './Input.module.css'

export default function Input() {
    
    const handleSubmit = (event) => {
        if (event.key === 'Enter') {
          postData(event.target.value)
          event.target.value=""
        }
      }
    
    async function postData(item) {
        try {
            const data = {
              content: item,
            };
        
            const response = await fetch("http://localhost:4000/", {
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
        <input className={styles.inputToDo}type="text" onKeyDown={handleSubmit}></input>
    )
}