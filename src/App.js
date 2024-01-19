
import { useState } from 'react';
import './styles.css';

function App() {
  const [item, setItem] = useState('');
  const [newItem, setNewItem] = useState([]);

  function handleItem(event) {
    setItem(event.target.value);
  }

  function addItem() {
    if (item.trim() !== '') {
      setNewItem((prevValue) => {
        return [...prevValue, { text: item, id: Date.now() }];
      });
      setItem('');
    }
  }

  function deleteItem(itemId) {
    setNewItem((prevValue) => {
      return prevValue.filter((item) => item.id !== itemId);
    });
  }

  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={item} onChange={handleItem} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {newItem.map((todoItem) => (
            <li key={todoItem.id}>
              {todoItem.text}
              <button onClick={() => deleteItem(todoItem.id)} className='delete' ><i class="fa-solid fa-trash"></i></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;


