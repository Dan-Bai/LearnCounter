import { Component } from 'react'
import '../stylesheets/ui.scss'
import Calendar from 'react-icons/lib/fa/calendar';
import Dev from 'react-icons/lib/md/developer-mode';
import Finance from 'react-icons/lib/md/attach-money';
import Cheat from 'react-icons/lib/ti/media-pause';

export class LearningDayCount extends Component {
  percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  };
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  };
  render() {
    return (
      <div className="learning-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
            <Calendar />
          <span>total days</span>
        </div>
        <div className="cheat-days">
          <span>{this.props.cheat}</span>
            <Cheat />
          <span>break days</span>
        </div>
        <div className="web-development-days">
          <span>{this.props.development}</span>
            <Dev />
          <span>development days</span>
        </div>
        <div className="personal-finance-days">
          <span>{this.props.finance}</span>
            <Finance />
          <span>finance days</span>
        </div>
        <div className="goal-days">
          <span>
            {this.calcGoalProgress(
              this.props.total,
              this.props.goal
            )}
          </span>
        </div>
      </div>
    )
  }
}

LearningDayCount.defaultProps =  {
  total: 70,
  cheat: 10,
  development: 20,
  finance: 20,
  goal: 300
}
