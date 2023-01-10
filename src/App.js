import "./App.css";
import Player from "./components/Player";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [players, setPlayers] = useState([
    {
      name: "Guil",
      id: 1,
    },
    {
      name: "Treasure",
      id: 2,
    },
    {
      name: "Ashley",
      id: 3,
    },
    {
      name: "James",
      id: 4,
    },
  ]);
  const [newPlayer, setNewPlayer] = useState({});

  function handleChange(event) {
    setNewPlayer({ name: event.target.value, id: players.length + 1 });
    event.preventDefault();
  }

  const handleRemove = (id) => {
    setPlayers(players.filter((p) => p.id !== id));
  };

  const handleAdd = () => {
    setPlayers([...players, newPlayer]);
  };

  return (
    <div className="App">
      <Header title="Score Board" totalPlayers={players.length} />
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Player Name"
          onChange={handleChange}
          value={newPlayer.name}
        ></input>
        <button >Add Player</button>
      </form>

      {players.map((player) => (
        <Player
          name={player.name}
          id={player.id}
          removePalyer={handleRemove}
          key={player.name}
        />
      ))}
    </div>
  );
}

export default App;
