import logo from './logo.svg';
import './App.css';
import Bubble from "./Bubble";
import ProgressBar from "./ProgressBar";
import WeekDay from "./WeekDay";

function App() {
  let tasks = [{name:"yoga", assignee:"ash", day:"Monday", completed:false}, 
              {name:"legos", assignee:"claire", day:"Sunday", completed:true},
              {name:"plants", assignee:"megan", day:"Monday", completed:true},
              {name:"make pun", assignee:"ash", day:"Monday", completed:false}];
  let days = [];
  let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  for (let i = 0; i < weekdays.length; i++) {
    days.push(
      <WeekDay day={weekdays[i]} tasks={tasks.filter(task => {
        return task.day === weekdays[i];
      })}/>
    )
  }
  return (
    <div className="App">
      
     <ProgressBar tasks={tasks}/>
      {/* Week days */}
      <div class="flex"> 
        {days}
      </div>
    </div>
  );
}

export default App;
