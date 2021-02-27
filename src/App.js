import "./App.css";
import { Button } from "./component/button";
import { ActivityCard } from "./component/activityCard";
import { HeaderTitle } from "./component/header";
import { AddTask } from "./component/addTask";

function App() {
  return (
    <div className="App">
      <HeaderTitle />
      <Button text="New Task" />
      <Button text="Task List" />
      <p>test</p>
      <ActivityCard title="Activity #1" date="February" />
      <AddTask/>
    </div>
  );
}

export default App;
