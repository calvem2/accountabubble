import './App.css';
import Bubble from "./Bubble";
import ProgressBar from "./ProgressBar";
import WeekDay from "./WeekDay";
import logo from "./logo.png";

function App() {
  // Title of the web page tab
  document.title = "accountabubble";
  // Hard coded tasks
  let tasks = [{name:"yoga", assignee:"ash", day:"monday", completed:false}, 
              {name:"legos", assignee:"claire", day:"sunday", completed:true},
              {name:"plants", assignee:"megan", day:"monday", completed:true},
              {name:"make pun", assignee:"ash", day:"monday", completed:false},
              {name:"make pun", assignee:"ash", day:"saturday", completed:true},
              {name:"british accent", assignee:"claire", day:"saturday", completed:true},
              {name:"roast claire", assignee:"megan", day:"saturday", completed:true}];
  let days = [];
  // Weekdays
  let weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  // Get the current day
  let now = new Date();
  let currDay = now.getDay() == 0 ? weekdays[6] : weekdays[now.getDay() - 1];

  for (let i = 0; i < weekdays.length; i++) {
    days.push(
      <WeekDay profileName={"megan"} isCurrDay={currDay === weekdays[i]} day={weekdays[i]} tasks={tasks.filter(task => {
        return task.day === weekdays[i];
      })}/>
    )
  }

  return (
    <div className="App">
      <img class="logo" src={logo} alt="Accountabubble logo"/>
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
