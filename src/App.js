import "./App.css";
import { Button } from "./component/button";
import { ActivityCard } from "./component/activityCard";


function App() {
  return (
    <div className="App">
      <Button text="New Task" />
      <Button text="Task List" />
      <p>test</p>
      <ActivityCard title="Activity #1" date="February"/>
    </div>
  );
}

export default App;
