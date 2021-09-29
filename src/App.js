import logo from "./logo.svg";
import "./App.css";
import MovieSearch from "./MovieSearch";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h3>Movie Search</h3>
			</header>
			<main>
				<MovieSearch />
			</main>
		</div>
	);
}

export default App;
