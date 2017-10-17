import React from 'react'
import { render } from 'react-dom'
import { LearningDayList } from './components/LearningDayList'

window.React = React

render(
	<LearningDayList days={
		[
			{
				location: "College Library",
				date: new Date("1/2/2016"),
				cheat: true,
				development: false,
				finance: true
			},
			{
				location: "Home",
				date: new Date("3/28/2016"),
				cheat: false,
				development: true,
				finance: false
			},
			{
				location: "Wendt Library",
				date: new Date("4/2/2016"),
				cheat: false,
				development: false,
				finance: true
			},
			{
				location: "Bascom Hill",
				date: new Date("4/2/2016"),
				cheat: true,
				development: true,
				finance: true
			}
		]
	}/>,
	document.getElementById('react-container')
)
