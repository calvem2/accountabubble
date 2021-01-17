import React, { Component } from 'react';


class ProgressBar extends Component {
    // props
    // tasks (list of tasks)

    // # completed
    // total #

    render() {
        // let completed = this.props.tasks.filter(task => {
        //     return task.completed;
        // });

        return (
            <div>
                <progress value={this.props.completed} max={this.props.total}>
                </progress>
            </div>
        );
    }
}

export default ProgressBar;