import './App.css';
import MessageInput from "./MessageInput";
import MessageDisplay from "./MessageDisplay";

function App() {
  return (
    <div className="App">
      <h1>
        Quick reply app
      </h1>
      <MessageDisplay />
      <MessageInput />
    </div>
  );
}

export default App;
