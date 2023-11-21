
import './App.css';
import { Player } from './Player';
import Players from './players';


function App() {
  return (
    <div className="App">
      <br/>
<h1>Fifa Players card </h1>
<br/>
<br/>
<hr style={{color:'black', border:'solid'}}/>

<div style={{display:'flex',columnGap:'50px',marginLeft:'50px'}}>
{Players.map((Player)=>{
  return <Player playerinfo={Player} />
})}
</div>

    </div>
  );
}

export default App;
