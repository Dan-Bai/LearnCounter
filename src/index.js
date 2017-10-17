import React from 'react';
import { render } from 'react-dom';
import { LearningDayList } from './components/LearningDayList';

window.React = React

render(
	<LearningDayList days={
		[
			{
				location: "College Library",
				date: new Date("1/3/2016"),
				cheat: false,
				development: true,
				finance: true
			},
			{
				location: "Wendt Library",
				date: new Date("2/20/2016"),
				cheat: false,
				development: true,
				finance: false
			},
			{
				location: "Bascom Hill",
				date: new Date("3/30/2016"),
				cheat: false,
				development: false,
				finance: true
			},
			{
				location: "Home",
				date: new Date("5/10/2016"),
				cheat: true,
				development: true,
				finance: true
			}
		]
	} />,
	document.getElementById('react-container')
)
