import List from "./components/List"
import { messages } from "./messages";
import "./styles.css";

function App() {
  return (
    <div className="center-top">
      <h1>{messages.apptitle}</h1>
      <List />
    </div>
  )
}

export default App

