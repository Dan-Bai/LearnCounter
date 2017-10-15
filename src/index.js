import React from 'react'
import { render } from 'react-dom'
import { LearningDayCount } from './components/LearningDayCount'

window.React = React

render(
  <LearningDayCount total={90}
                    cheat={10}
                    development={20}
                    finance={20}
                    goal={300}/>,
  document.getElementById('react-container')
)
