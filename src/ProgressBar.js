import React, { Component } from 'react';


class ProgressBar extends Component {

    render() {
        let completed = this.props.tasks.filter(task => {
            return task.completed;
        });

        return (
            <div>
                <progress value={completed.length} max={this.props.tasks.length}>
                </progress>
            </div>
        );
    }
}

export default ProgressBar;