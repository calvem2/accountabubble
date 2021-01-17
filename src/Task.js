import React, { Component } from 'react';
let cx = require('classnames');

class Task extends Component {
    // props
    // name
    // day
    // curDay
    // checkbox (true/false)
    // completed (true, false)
    // checked
    // onChange
    constructor(props) {
        super(props);
        this.state = {
            clicked: this.props.completed
        };
    }

    onLabelClick = (event) => {
        this.setState((prevState) => ({
            clicked: !prevState.clicked
        }));
        this.props.onChange(this.state.clicked, event.target.htmlFor);
    };

    render() {
        let weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
        let checkable = weekdays.indexOf(this.props.currDay) <= weekdays.indexOf(this.props.day);
        let classNames = cx({
            'clicked': this.state.clicked
        });
        let textClassNames = cx({
            'task-text': true,
            'clicked': this.state.clicked || !checkable
        });


        if (this.props.checkbox) {
            let tag = this.props.name + ";" + this.props.assignee + ";" + this.props.day;
            if (!checkable) {
                return (
                    <div className="tasks">
                        <div className="round">
                            <input type="checkbox" checked={!checkable} id={tag}/>
                            <label
                                className={classNames}
                                htmlFor={tag}
                            >
                            </label>
                        </div>
                        <div className={textClassNames}>
                            {this.props.name}
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className="tasks">
                        <div className="round">
                            <input checked={this.state.clicked} type="checkbox" id={tag}/>
                            <label
                                className={classNames}
                                htmlFor={tag}
                                onClick={this.onLabelClick}
                            >
                            </label>
                        </div>
                        <div className={textClassNames}>
                            {this.props.name}
                        </div>
                    </div>
                );
            }
        } else {
            return (
                <div className="tasks">
                    <div className={textClassNames}>
                        {this.props.name}
                    </div>
                </div>
            );
        }

    }
}

export default Task;