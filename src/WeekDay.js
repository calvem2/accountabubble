import React, { Component } from 'react';


class WeekDay extends Component {

    render() {
        let dailyTasks = [];
        for (let i = 0; i < this.props.tasks.length; i++) {
            dailyTasks.push(<div class="tasks">{this.props.tasks[i].name}</div>);
        }
        return (
            <div class="week_days">
                <h3>{this.props.day}</h3>
                {/* Add the names here. Sort tasks based on name. */}
                {dailyTasks}
            </div>
        );
    }
}

export default WeekDay;