import "./App.css";
import { Button } from "./component/button";
import { ActivityCard } from "./component/activityCard";
import { HeaderTitle } from "./component/header";
import { AddTask } from "./component/addTask";
import { Subtitle } from "./component/subtitle";
import { Filter } from "./component/filterBar";

function App() {
  return (
    <div className="App">
      <HeaderTitle />
      <div style={{ padding: "0 15%" }}>
        <Subtitle/>
        <Button text="New Task" />
        <AddTask />
        <Button text="Task List" />
        <Filter/>
        <ActivityCard title="Activity #1" date="February" />
        <ActivityCard title="Activity #1" date="February" />
        <ActivityCard title="Activity #1" date="February" />
      </div>
    </div>
  );
}

export default App;
