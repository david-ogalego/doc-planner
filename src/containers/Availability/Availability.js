import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Calendar from '../../components/Calendar/calendar';
import { fetchAvailability } from '../../redux/actions/availability';
import {
	getCurrentDateWithFormat,
	getWeekDays,
	getWeekDayFromDate,
	getTimeFromDate,
	getMondayNextWeek,
	getMondayPreviousWeek,
} from '../../utils/dates';

class Availability extends Component {
	static propTypes = {
		fetchData: PropTypes.func.isRequired,
		availableSlots: PropTypes.arrayOf(PropTypes.object),
	}
	static defaultProps = {
		availableSlots: [],
	}
	state = {
		dateSelected: getCurrentDateWithFormat(),
	}
	componentDidMount() {
		this.props.fetchData(getCurrentDateWithFormat());
	}
	showSlotsNextWeek = () => {
		const mondayNextWeek = getMondayNextWeek(this.state.dateSelected);
		this.setState({
			dateSelected: mondayNextWeek,
		});
		this.props.fetchData(mondayNextWeek);
	}
	showSlotsPreviousWeek = () => {
		const mondayPreviousWeek = getMondayPreviousWeek(this.state.dateSelected);
		this.setState({
			dateSelected: mondayPreviousWeek,
		});
		this.props.fetchData(mondayPreviousWeek);
	}
	render() {
		const { availableSlots } = this.props;
		const weekDays = getWeekDays();
		const itemsCalendar = [];
		weekDays.forEach((day) => {
			itemsCalendar.push({
				header: {
					title: day,
				},
				itemsColumn: availableSlots
					.filter(slot => getWeekDayFromDate(slot.Start) === day)
					.map(slot => ({
						description: getTimeFromDate(slot.Start),
					})),
			});
		});
		return (
			<Calendar
				items={itemsCalendar}
				showNextWeek={this.showSlotsNextWeek}
				showPreviousWeek={this.showSlotsPreviousWeek}
			/>
		);
	}
}

const mapStateToProps = ({ availability }) => ({
	availableSlots: availability.availableSlots,
});

const mapDispatchToProps = dispatch => ({
	fetchData: date => dispatch(fetchAvailability(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Availability);
