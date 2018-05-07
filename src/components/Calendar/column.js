import React from 'react';
import PropTypes from 'prop-types';
import styles from './column.sass';

const Column = props => (
	<section className={styles.section} >
		<h3 className={styles.header} >
			{
				props.header.onClick ?
					<button onClick={props.header.onClick}>
						{props.header.title}
					</button> :
					<span>{props.header.title}</span>
			}
		</h3>
		<ul className={styles.ul}>
			{props.items.map((item, index) =>
				<li key={index} className={styles.li}>{item.description}</li>)
			}
		</ul>
	</section>
);

Column.defaultProps = {
	items: [],
};

Column.propTypes = {
	header: PropTypes.shape({
		title: PropTypes.string,
		onClick: PropTypes.func,
	}).isRequired,
	items: PropTypes.arrayOf(PropTypes.shape({
		description: PropTypes.string,
		disabled: PropTypes.bool,
		onClick: PropTypes.func,
	})),
};

export default Column;
