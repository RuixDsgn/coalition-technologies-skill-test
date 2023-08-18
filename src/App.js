import './App.css';
import Mountain from './Mountain';
import History from './History';
import Climb from './Climb';
import Divider from './Divider';

function App() {
  return (
    <div className="App">
      <Mountain />
      <Divider />
      <History />
      <Climb />
    </div>
  );
}

export default App;
