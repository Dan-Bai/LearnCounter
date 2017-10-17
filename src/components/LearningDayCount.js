import '../stylesheets/ui.scss';
import Calendar from 'react-icons/lib/fa/calendar';
import Dev from 'react-icons/lib/md/developer-mode';
import Finance from 'react-icons/lib/md/attach-money';
import Cheat from 'react-icons/lib/ti/media-pause';

const percentToDecimal = (decimal) => {
    return ((decimal * 100).toFixed(2) + '%');
}

const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal);
}

export const LearningDayCount = ({total, cheat, development, finance, goal}) => (
  <div className="learning-day-count">
    <div className="total-days">
      <span>{total}</span>
        <Calendar />
      <span>total days</span>
    </div>
    <div className="cheat-days">
      <span>{cheat}</span>
        <Cheat />
      <span>break days</span>
    </div>
    <div className="web-development-days">
      <span>{development}</span>
        <Dev />
      <span>development days</span>
    </div>
    <div className="personal-finance-days">
      <span>{finance}</span>
        <Finance />
      <span>finance days</span>
    </div>
    <div className="goal-days">
      <span>
        {calcGoalProgress(
          total,
          goal
        )}
      </span>
    </div>
  </div>
);

LearningDayCount.defaultProps =  {
  total: 70,
  cheat: 10,
  development: 20,
  finance: 20,
  goal: 300
}
