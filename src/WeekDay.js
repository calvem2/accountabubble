import React, { Component } from 'react';
let cx = require('classnames');

class WeekDay extends Component {

    render() {
        // Filter tasks based on assignees
        let assignees = [...new Set(this.props.tasks.map(task => task.assignee))];
        assignees.splice(assignees.indexOf(this.props.profileName), 1);
        if (assignees.length > 0) {
            assignees.unshift(this.props.profileName);
        }

        let dailyTasks = [];
        for (let i = 0; i < assignees.length; i++) {
            dailyTasks.push(
                <div class="task_group">
                    <div class="assignee">{
                        assignees[i] === this.props.profileName ? "your tasks" : assignees[i]
                    }</div>
                    {this.props.tasks.filter(task => {
                        return task.assignee === assignees[i];
                    }).map(task => {   
                        if (assignees[i] === this.props.profileName && task.completed && !this.props.isCurrDay) {                   
                            return(<div class="tasks">
                                        <div class="round">
                                            <input type="checkbox" id={task.name + task.assignee + task.day} checked="checked"/>
                                            <label for={task.name + task.assignee + task.day}></label>
                                        </div>
                                        <div class="task-text">
                                            {task.name}
                                        </div>
                                    </div>);
                        } else if (assignees[i] === this.props.profileName) {                   
                            return(<div class="tasks">
                                        <div class="round">
                                            <input type="checkbox" id={task.name + task.assignee + task.day}/>
                                            <label for={task.name + task.assignee + task.day}></label>
                                        </div>
                                        <div class="task-text">
                                            {task.name}
                                        </div>
                                    </div>);
                        } else {
                            return(<div class="tasks">
                                        {task.name}
                                  </div>);
                        }})}
                </div>
            );
        }
        let classNames = cx({
            'week-days': true,
            'selected-day': this.props.isCurrDay
        })

        return (
            <div className={classNames}>
                <h3>{this.props.day}</h3>
                {dailyTasks}
                <div className="add-task">+ add task</div>
            </div>
        );
    }
}

export default WeekDay;