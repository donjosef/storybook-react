import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';
import { connect } from 'react-redux';
import { archiveTask, pinTask } from '../lib/redux'; //action creators that return action objects which reaches the reducers

export function TaskList(props) {
    /* previous implementation of TaskList */
    const events = {
        onPinTask: props.onPinTask,
        onArchiveTask: props.onArchiveTask,
    };

    const LoadingRow = (
        <div className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
                <span>Loading</span>
                <span>cool</span>
                <span>state</span>
            </span>
        </div>
    );

    if (props.loading) {
        return (
            <div className="list-items">
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
            </div>
        );
    }

    if (props.tasks.length === 0) {
        return (
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check" />
                    <div className="title-message">You have no tasks</div>
                    <div className="subtitle-message">Sit back and relax</div>
                </div>
            </div>
        );
    }

    const tasksInOrder = [
        ...props.tasks.filter(t => t.state === 'TASK_PINNED'),
        ...props.tasks.filter(t => t.state !== 'TASK_PINNED'),
    ];

    return (
        <div className="list-items">
            {tasksInOrder.map(task => <Task key={task.id} task={task} {...events} />)}
        </div>
    );
}

TaskList.propTypes = {
    loading: PropTypes.bool,
    tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
    onPinTask: PropTypes.func.isRequired,
    onArchiveTask: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
    loading: false,
};

const mapStateToProps = state => {
    return {
        tasks: state.tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED')
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onArchiveTask: id => dispatch(archiveTask(id)),
        onPinTask: id => dispatch(pinTask(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

