import React, { Component } from 'react';

class TimerConfig extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const newBaseTime = this.props.baseTime;

    if (ev.target.id === 'hours') newBaseTime.subtract(newBaseTime.get('hour'), 'hours').add(parseInt(ev.target.value, 10), 'hours');
    if (ev.target.id === 'minutes') newBaseTime.subtract(newBaseTime.get('minutes'), 'minutes').add(parseInt(ev.target.value, 10), 'minutes');
    if (ev.target.id === 'seconds') newBaseTime.subtract(newBaseTime.get('seconds'), 'seconds').add(parseInt(ev.target.value, 10), 'seconds');

    this.props.setBaseTime(newBaseTime);
  }

  render() {
    return (
      <div className="settings">
        <div className="settings-hours">
          <div className="form-group">
            <div className="col-sm-3">
              <label htmlFor="hours">Hours</label>
            </div>
            <div className="settings-btn">
              <input
                id="hours"
                className="form-control"
                type="number"
                defaultValue={this.props.baseTime.get('hours')}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="settings-minutes">
          <div className="form-group">
            <div className="col-sm-3">
              <label htmlFor="minutes">Minutes</label>
            </div>
            <div className="settings-btn">
              <input
                id="minutes"
                className="form-control"
                type="number"
                defaultValue={this.props.baseTime.get('minutes')}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="settings-seconds">
          <div className="form-group">
            <div className="col-sm-3">
              <label htmlFor="seconds">Seconds</label>
            </div>
            <div className="settings-btn">
              <input
                id="seconds"
                className="form-control"
                type="number"
                defaultValue={this.props.baseTime.get('seconds')}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerConfig;