import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.css";

class Directory extends React.Component {
	constructor() {
		super();
		this.state = {
			sections: [
				{
					title: "hats",
					imgUrl: "https://i.ibb.co/cvpntL1/hat.png",
					id: 1,
				},
				{
					title: "jackets",
					imgUrl: "https://i.ibb.co/px2tCc3/jacket.png",
					id: 2,
				},
				{
					title: "sneakers",
					imgUrl: "https://i.ibb.co/0jqHpnp/snaaekaers.png",
					id: 3,
				},
				{
					title: "Women",
					imgUrl: "https://i.ibb.co/GCCdy8t/womens.png",
					id: 4,
					size: "large",
				},
				{
					title: "Men",
					imgUrl: "https://i.ibb.co/R70vBrQ/men.png",
					id: 5,
					size: "large",
				},
			],
		};
	}

	render() {
		return (
			<div className='directory-menu'>
				{this.state.sections.map(({ title, imgUrl, id, size }) => (
					<MenuItem
						title={title}
						imgUrl={imgUrl}
						key={id}
						size={size}
					/>
				))}
			</div>
		);
	}
}

export default Directory;
