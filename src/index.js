import React from 'react';
import { render } from 'react-dom';
import { LearningDayList } from './components/LearningDayList';

window.React = React;

render(
  <LearningDayList days={
    [
      {
        location: "College Library",
        date: new Date("10/15/2017"),
        cheat: false,
        development: true,
        finance: false
      },
      {
        location: "Steenbock Library",
        date: new Date("10/14/2017"),
        cheat: true,
        development: false,
        finance: false
      },
      {
        location: "Wendt Library",
        date: new Date("10/122017"),
        cheat: false,
        development: true,
        finance: true
      },
      {
        location: "Home",
        date: new Date("10/13/2017"),
        cheat: false,
        development: true,
        finance: true
      }
    ]
  }/>,
  document.getElementById('react-container')
);
