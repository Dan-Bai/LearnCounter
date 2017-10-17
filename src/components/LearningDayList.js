import Calendar from 'react-icons/lib/fa/calendar';
import Dev from 'react-icons/lib/md/developer-mode';
import Finance from 'react-icons/lib/md/attach-money';
import Cheat from 'react-icons/lib/ti/media-pause';
import { LearningDayRow } from './LearningDayRow';
import { PropTypes } from 'react';

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
		<tbody>
			{days.map((day, i) =>
				<LearningDayRow key={i}
						   {...day}/>
				)}
		</tbody>

	</table>
)

LearningDayList.propTypes = {
	days: function(props) {
		if(!Array.isArray(props.days)){
			return new Error("LearningDayList is not an array");
		}else if(!props.days.length) {
			return new Error("LearningDayList must have at least one record");
		}else {
			return null;
		}
	}
}
