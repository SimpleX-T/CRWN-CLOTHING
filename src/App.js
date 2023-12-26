import "./App.css";
import { Homepage } from "./pages/homepage/homepage.component";
// import { Component } from "react";
// import { CardList } from "./components/card-list/Card-list.components";
// import { SearchField } from "./components/searchField/search-field.component";

// class App extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			users: [],
// 			searchField: "",
// 		};
// 	}

// 	componentDidMount() {
// 		fetch("https://jsonplaceholder.typicode.com/users")
// 			.then((response) => response.json())
// 			.then((users) => this.setState({ users: users }));
// 	}

// 	handleSearch(e) {
// 		this.setState({ searchField: e.target.value });
// 	}

// 	render() {
// 		const { users, searchField } = this.state;
// 		const filteredUsers = users.filter((user) =>
// 			user.name.toLowerCase().includes(searchField.toLowerCase())
// 		);
// 		return (
// 			<div className='App'>
// 				<h1>User Dashboard</h1>
// 				<SearchField
// 					handleSearch={this.handleSearch.bind(this)}
// 					placeholder='Search Users'
// 				/>
// 				<CardList users={filteredUsers} />
// 			</div>
// 		);
// 	}
// }

const App = () => {
	return (
		<div className='App'>
			<Homepage />
		</div>
	);
};

export default App;
