import { createClass, PropTypes } from 'react';
import '../stylesheets/ui.scss';
import Calendar from 'react-icons/lib/fa/calendar';
import Dev from 'react-icons/lib/md/developer-mode';
import Finance from 'react-icons/lib/md/attach-money';
import Cheat from 'react-icons/lib/ti/media-pause';

export const LearningDayCount = createClass({
  propTypes: {
    total: PropTypes.number.isRequired,
    cheat: PropTypes.number,
    development: PropTypes.number,
    finance: PropTypes.number,
    goal: PropTypes.number
  },
  getDefaultProps() {
    return {
      total: 70,
      cheat: 10,
      development: 20,
      finance: 20,
      goal: 300
    }
  },
  percentToDecimal(decimal) {
    return ((decimal * 100) + '%');
  },
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal);
  },
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
})
