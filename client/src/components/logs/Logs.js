import React, { useState, Fragment } from 'react';
// import { connect } from 'react-redux';
// import LogItem from './LogItem';
// import PreLoader from '../layout/PreLoader';
// import PropTypes from 'prop-types';
// import { getLogs } from '../../actions/logActions';

import './styles.css';
// import './scripts.js';

const Logs = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpanded = () => {
        setExpanded(!expanded);
    }

    const hidden = expanded ? '' : 'hidden';
    const focus = expanded ? 'focus' : '';

    return (
        <div>
            <Fragment>
                <div className="event-header">
                    <div className="header-container">
                        <p className="p-content">Event ID#</p>
                        <p className="p-content">Event</p>
                        <p className="p-content">Post time</p>
                        <p className="p-content">Location</p>
                        <p className="p-content">Priority</p>
                        <p className="p-content">Current Status</p>
                        <p className="p-content">Updated time</p>
                    </div>
                </div>
                <div className={`collapsible ${focus}`} onClick={handleExpanded}>
                    <div className='event-content-brief'>
                        <p className="p-content">#1</p>
                        <p className="p-content">Fix computer</p>
                        <p className="p-content">12:00 PM</p>
                        <p className="p-content">Building #1</p>
                        <p className="p-content">1</p>
                        <p className="p-content">In progess</p>
                        <p className="p-content">12:00PM</p>
                    </div>
                    {
                        expanded ? (<p>-</p>) : (<p>+</p>)
                    }
                </div>
                <div className={`event-content-detail ${hidden}`}>
                    <table className='expanded-table'>
                        <thead>
                            <tr className="table-header">
                                <th>Techican</th>
                                <th>ID#</th>
                                <th>Comment</th>
                                <th>Status</th>
                                <th>Updated time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jeff</td>
                                <td>3301</td>
                                <td>working on it.</td>
                                <td>In progress</td>
                                <td>1:00 AM</td>
                            </tr>
                            <tr>
                                <td>Jeff</td>
                                <td>3301</td>
                                <td>working on it.</td>
                                <td>In progress</td>
                                <td>1:00 AM</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className='add-button'>Add a updated status</button>
                </div>
            </Fragment>


        </div>
    )
}

export default Logs;

// Logs.propTypes = {
//     log: PropTypes.object.isRequired,
//     getLogs: PropTypes.func.isRequired,
// }

// const mapStateToProps = state => ({
//     log: state.log
// })

// const mapDispatchToProps = dispatch => ({
//     getLogs: () => dispatch(getLogs())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Logs);