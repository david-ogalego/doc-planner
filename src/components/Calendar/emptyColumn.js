import React from 'react';
import PropTypes from 'prop-types';
import styles from './empty-column.sass';

const EmptyColumn = props => (
	<section className={styles.section} >
		<h3 className={styles.header} >
			<button className={styles.icon} onClick={props.onClick} />
		</h3>
		<div />
	</section>
);

EmptyColumn.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default EmptyColumn;
