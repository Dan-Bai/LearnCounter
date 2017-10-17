import Calendar from 'react-icons/lib/fa/calendar';
import Dev from 'react-icons/lib/md/developer-mode';
import Finance from 'react-icons/lib/md/attach-money';
import Cheat from 'react-icons/lib/ti/media-pause';
import { PropTypes } from 'react';

export const LearningDayRow = ({location, date,
							cheat, development, finance}) => (
	<tr>
		<td>
			{date.getMonth()+1}/{date.getDate()}/
			{date.getFullYear()}
		</td>
		<td>
			{location}
		</td>
		<td>
			{(cheat) ? <Cheat/> : null}
		</td>
		<td>
			{(development && !cheat) ? <Dev /> : null}
		</td>
		<td>
			{(finance && !cheat) ? <Finance /> : null}
		</td>
	</tr>

)

LearningDayRow.propTypes = {
	location: PropTypes.string.isRequired,
	date: PropTypes.instanceOf(Date).isRequired,
	cheat: PropTypes.bool,
	development: PropTypes.bool,
	finance: PropTypes.bool
}
