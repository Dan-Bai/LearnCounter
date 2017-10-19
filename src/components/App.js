import { createClass } from 'react';
import { LearningDayList } from './LearningDayList';
import { LearningDayCount } from './LearningDayCount';
import { AddDayForm } from './AddDayForm';
import { Menu } from './Menu';

export const App = createClass ({
  getInitialState() {
    return {
      allLearningDays: [
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
    }
  },
  countDays(filter) {
    const { allLearningDays } = this.state
    return allLearningDays.filter(
      (day) => (filter) ? day[filter] : day
    ).length;
  },
  render() {
    return(
      <div className="app">
      <Menu />
      {(this.props.location.pathname === "/") ?
        <LearningDayCount total={this.countDays()}
                        cheat={this.countDays("cheat")}
                        development={this.countDays("development")}
                        finance={this.countDays("finance")} /> :
        (this.props.location.pathname === "/add-day") ?
        <AddDayForm /> : <LearningDayList days={this.state.allLearningDays}/>
      }
      </div>
    )
  }
})
