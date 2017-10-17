import Calendar from 'react-icons/lib/fa/calendar';
import Dev from 'react-icons/lib/md/developer-mode';
import Finance from 'react-icons/lib/md/attach-money';
import Cheat from 'react-icons/lib/ti/media-pause';

export const LearningDayRow = ({location, date, cheat, development, finance}) => (
  <tr>
    <td>{date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</td>
    <td>{location}</td>
    <td>{(cheat) ? <Cheat/> : null}</td>
    <td>{(development) ? <Dev/> : null}</td>
    <td>{(finance) ? <Finance/> : null}</td>
  </tr>
)
