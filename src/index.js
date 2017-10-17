import React from 'react'
import { render } from 'react-dom'
import { LearningDayCount } from './components/LearningDayCount'

window.React = React

render(
	<LearningDayCount />,
	document.getElementById('react-container')
)
