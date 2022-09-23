import './App.css';
import Card from './components/Card';
import { useState, useEffect } from 'react';

// Caminho para JSON Online
// const API = "https://my-json-server.typicode.com/rafmob/01_album_sports";

const API = "http://localhost:5000";

function App() {

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const loadData = async() => {
      setLoading(true)

      const res = await fetch(API + "/todos")
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));

      setLoading(false);

      setTodos(res);

    }

    loadData()
    
  }, []);

  // const handleDelete = async (id) => {

  //   await fetch(API + "/todos/" + id, {
  //     method: "DELETE"
  //   });
    
  //   setTodos((prevState) => prevState.filter((todo) => todo.id !== id))

  // }

  // const handleEdit = async(todo) => {

  //   todo.done = !todo.done

  //   const data = await fetch(API + "/todos" + todo.id, {
  //     method: "PUT",
  //     body: JSON.stringify(todo),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   setTodos((prevState) => prevState.map((t) => (t.id === data.id) ? (t = data) : t));
  // };

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      
      <div className='allCards'>
        {todos.map(todo => <Card card={todo} />)}
      </div>
    </div>
  );
}

export default App;
