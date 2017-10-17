import Calendar from 'react-icons/lib/fa/calendar';
import Dev from 'react-icons/lib/md/developer-mode';
import Finance from 'react-icons/lib/md/attach-money';
import Cheat from 'react-icons/lib/ti/media-pause';
import LearningDayRow from './LearningDayRow';

export const LearningDayList = ({days}) => (
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Location</th>
				<th>Cheat</th>
				<th>Development</th>
        <th>Finance</th>
			</tr>
		</thead>
	{/* // 	<tbody>
	// 		{days.map((day, i) =>
	// 			<LearningDayRow key={i}
	// 					   {...day}/>
	// 			)}
	// 	</tbody>
  // */}
	</table>

)
