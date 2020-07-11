/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import * as timerStates from '../../timerStates';

const leftPad = (val) => {
  if (val < 10) return `0${val}`;

  return `${val}`;
}

const TimerDisplay = (props) => (
  <div>
    <div className="row center-block">
      {
        (props.timerState === timerStates.COMPLETE)
        && <iframe className="center-block youtube-responsive-width" height="315" src="https://www.youtube.com/embed/TZE9gVF1QbA?autoplay=1"></iframe>
      }
    </div>
    <div className="row">
      <div className="timerDisplay">
       <span>Work</span>
       <p>
          {`${leftPad(props.currentTime.get('hours'))}:${leftPad(props.currentTime.get('minutes'))}:${leftPad(props.currentTime.get('seconds'))}`}
       </p>     
      </div>
    </div>
  </div>
);

export default TimerDisplay;