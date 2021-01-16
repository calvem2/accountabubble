import logo from './logo.svg';
import './App.css';
import Bubble from "./Bubble";
import ProgressBar from "./ProgressBar";
import WeekDay from "./WeekDay";

function App() {
  let tasks = [{name:"yoga", assignee:"ash", day:"monday", completed:false}, 
              {name:"legos", assignee:"claire", day:"sunday", completed:true},
              {name:"plants", assignee:"megan", day:"monday", completed:true},
              {name:"make pun", assignee:"ash", day:"monday", completed:false}];
  let days = [];
  let weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  for (let i = 0; i < weekdays.length; i++) {
    days.push(
      <WeekDay day={weekdays[i]} tasks={tasks.filter(task => {
        return task.day === weekdays[i];
      })}/>
    )
  }
  return (
    <div className="App">
     {/* Add logo here */}
     <h2>accountabubble</h2> 
     <ProgressBar tasks={tasks}/>
      {/* Week days */}
      <div class="flex"> 
        {days}
      </div>
    </div>
  );
}

export default App;
