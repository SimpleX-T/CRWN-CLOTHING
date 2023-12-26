import React from "react";
import "./menu-item.styles.css";

const MenuItem = function ({ title, imgUrl, size }) {
	return (
		<div className={`${size} menu-item`}>
			<div
				className='background-image'
				style={{
					backgroundImage: `url(${imgUrl})`,
				}}
			/>
			<div className='content'>
				<h2 className='title'>{title.toUpperCase()}</h2>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
