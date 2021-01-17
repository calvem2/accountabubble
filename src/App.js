import './App.css';
import React, { Component } from 'react';
import ProgressBar from "./ProgressBar";
import WeekDay from "./WeekDay";
import logo from "./logo.png";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [{name:"yoga", assignee:"ash", day:"sunday", completed:false},
                {name:"light a candle", assignee:"ash", day:"sunday", completed:false},
                {name:"update zoom", assignee:"ash", day:"sunday", completed:false},
                {name:"legos", assignee:"claire", day:"sunday", completed:false},
                {name:"walk teagan", assignee:"claire", day:"sunday", completed:false},
                {name:"drink water", assignee:"claire", day:"sunday", completed:false},
                {name:"go on a walk", assignee:"megan", day:"sunday", completed:false},
                {name:"water plants", assignee:"megan", day:"sunday", completed:false},
                {name:"make tea", assignee:"megan", day:"sunday", completed:false},

                {name:"write article", assignee:"ash", day:"monday", completed:true},
                {name:"editor meeting", assignee:"ash", day:"monday", completed:true},
                {name:"zoom background", assignee:"claire", day:"monday", completed:true},
                {name:"walk teagan", assignee:"claire", day:"monday", completed:true},
                {name:"help laura w hw", assignee:"claire", day:"monday", completed:true},
                {name:"go on a walk", assignee:"megan", day:"monday", completed:true},
                {name:"instagram story takeover", assignee:"megan", day:"monday", completed:true},
                {name:"capstone meeting", assignee:"megan", day:"monday", completed:true},
                {name:"plants", assignee:"megan", day:"monday", completed:true},
                {name:"make pun", assignee:"ash", day:"monday", completed:true},

                {name:"email cornelius", assignee:"ash", day:"tuesday", completed:true},
                {name:"plant a watermelon", assignee:"ash", day:"tuesday", completed:true},
                {name:"meet with writers", assignee:"ash", day:"tuesday", completed:true},
                {name:"outline essay", assignee:"claire", day:"tuesday", completed:true},
                {name:"walk teagen", assignee:"claire", day:"tuesday", completed:true},
                {name:"drink water", assignee:"claire", day:"tuesday", completed:true},
                {name:"work on marketing pitch", assignee:"megan", day:"tuesday", completed:true},
                {name:"eat bread", assignee:"megan", day:"tuesday", completed:true},
                {name:"discover an element", assignee:"megan", day:"tuesday", completed:true},

                {name:"sleep in", assignee:"ash", day:"wednesday", completed:true},
                {name:"start paper", assignee:"ash", day:"wednesday", completed:true},
                {name:"do laundry", assignee:"ash", day:"wednesday", completed:true},
                {name:"make bed", assignee:"claire", day:"wednesday", completed:true},
                {name:"cook tacos", assignee:"claire", day:"wednesday", completed:true},
                {name:"charge air pods", assignee:"claire", day:"wednesday", completed:true},
                {name:"start project", assignee:"megan", day:"wednesday", completed:true},
                {name:"do dishes", assignee:"megan", day:"wednesday", completed:true},
                {name:"go to store", assignee:"megan", day:"wednesday", completed:true},

                {name:"grocery shopping", assignee:"ash", day:"thursday", completed:true},
                {name:"call mom", assignee:"ash", day:"thursday", completed:true},
                {name:"existential crisis", assignee:"ash", day:"thursday", completed:true},
                {name:"take out trash", assignee:"claire", day:"thursday", completed:true},
                {name:"covid test", assignee:"claire", day:"thursday", completed:true},
                {name:"start 340 hw", assignee:"claire", day:"thursday", completed:true},
                {name:"go on a walk", assignee:"megan", day:"thursday", completed:true},
                {name:"meal prep", assignee:"megan", day:"thursday", completed:true},
                {name:"walk piper", assignee:"megan", day:"thursday", completed:true},

                {name:"finish project", assignee:"ash", day:"friday", completed:true},
                {name:"go to class", assignee:"ash", day:"friday", completed:true},
                {name:"movie night", assignee:"ash", day:"friday", completed:true},
                {name:"make burrito", assignee:"claire", day:"friday", completed:true},
                {name:"play just dance", assignee:"claire", day:"friday", completed:true},
                {name:"movie night", assignee:"claire", day:"friday", completed:true},
                {name:"read book", assignee:"megan", day:"friday", completed:true},
                {name:"go to class", assignee:"megan", day:"friday", completed:true},
                {name:"movie night", assignee:"megan", day:"friday", completed:true},

                {name:"existential crisis again", assignee:"ash", day:"saturday", completed:false},
                {name:"meet with bartholomew", assignee:"ash", day:"saturday", completed:false},
                {name:"analyze reports", assignee:"ash", day:"saturday", completed:false},
                {name:"don’t eat meat", assignee:"claire", day:"saturday", completed:false},
                {name:"purchase stock", assignee:"claire", day:"saturday", completed:false},
                {name:"learn a language", assignee:"claire", day:"saturday", completed:false},
                {name:"have an attitude", assignee:"claire", day:"saturday", completed:true},
                {name:"name plants", assignee:"megan", day:"tuesday", completed:false},
                {name:"start cs assignment", assignee:"megan", day:"saturday", completed:true},
                {name:"roast claire", assignee:"megan", day:"saturday", completed:true},

                {name:"yoga", assignee:"megan", day:"saturday", completed:true}]

    };
    }

    // Title of the web page tab
    componentDidMount() {
      document.title = "accountabubble";
      this.setState({
          completed: this.state.tasks.filter(task => {
              return task.completed;
          }).length,
          total: this.state.tasks.length
      });
    }

    onChange = (clicked, task) => {
        let taskInfo = task.split(";");
        let newTasks = [];
        for (var i = 0; i < this.state.tasks.length; i++) {
            let currTask = this.state.tasks[i];
            if (currTask.name === taskInfo[0] && currTask.day === taskInfo[2] && currTask.assignee === taskInfo[1]) {
                currTask.completed = !currTask.completed;
            }
            newTasks.push(currTask);
        }
        this.setState({
            tasks: newTasks,
            completed: !clicked ? this.state.completed + 1 : this.state.completed - 1
        })
    };



    render() {
        // Hard coded tasks
        // let tasks =
        let days = [];
        // Weekdays
        let weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

        // Get the current day
        let now = new Date();
        let currDay = now.getDay() === 0 ? weekdays[6] : weekdays[now.getDay() - 1];

        for (let i = 0; i < weekdays.length; i++) {
            days.push(
              <WeekDay onChange={this.onChange} profileName={"ash"} currDay={currDay} day={weekdays[i]} tasks={this.state.tasks.filter(task => {
                  return task.day === weekdays[i];
              })}/>
            )
        }
        let percent = Math.round(this.state.completed / this.state.total * 100);
        percent += "%";
        return (
            <div className="App">
                <div class="flex-container">
                    <div class="logo-container">
                        <img className="logo" src={logo} alt="Accountabubble logo"/>
                        <h2>accountabubble</h2>
                    </div>
                    <h2 id="budbles">
                        Team Budbles
                    </h2>
                </div>

                <div class="flex-container">
                    <h3 id="weekly-progress">weekly progress</h3>
                    <h3 id="percent">{percent}</h3>
                </div>
                <ProgressBar completed={this.state.completed} total={this.state.total}/>
                <div class="flex">
                    {days}
                </div>
                <div className="footer-container">
                    <img className="logo" src={logo} alt="Accountabubble logo"/>
                    <div>
                        <p><a href="https://www.figma.com/file/TXE6KpD0hn5uJkiQiBa8kV/accountabubble?node-id=0%3A1" target="_blank">designed</a> by ash shah</p>
                        <p><a href="https://github.com/calvem2/accountabubble" target="_blank">built</a> by claire beard & megan calverley</p>
                    </div>
                </div>

            </div>
        );
    }

}

export default App;
