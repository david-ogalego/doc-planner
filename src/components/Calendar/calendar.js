import React from 'react';
import PropTypes from 'prop-types';
import Column from './column';
import EmptyColumn from './emptyColumn';
import styles from './calendar.sass';

const Table = props => (
	<div className={styles.calendar} >
		<EmptyColumn onClick={props.showPreviousWeek} />
		{props.items.map((item, index) =>
			<Column key={index} header={item.header} items={item.itemsColumn} />)
		}
		<EmptyColumn onClick={props.showNextWeek} />
	</div>
);

Table.defaultProps = {
	items: [],
};

Table.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		header: PropTypes.shape({
			title: PropTypes.string,
			onClick: PropTypes.func,
		}),
		itemsColumn: PropTypes.arrayOf(PropTypes.object),
	})),
	showNextWeek: PropTypes.func.isRequired,
	showPreviousWeek: PropTypes.func.isRequired,
};

export default Table;
