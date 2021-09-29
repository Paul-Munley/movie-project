import React, { useState } from "react";
import "./MovieSearch.css";
import FavoritesList from "./FavoritesList";

const MovieSearch = () => {
	const [movieSearch, setMovieSearch] = useState();
	const [foundMovie, setFoundMovie] = useState({});
	const [currentFavs, setCurrentFavs] = useState([]);

	const movieSearchHandler = e => {
		e.preventDefault();
		let searchQuery = e.target.value;
		setMovieSearch(searchQuery);
	};

	const searchHandler = async () => {
		try {
			const res = await fetch(
				"https://movies-ecc00-default-rtdb.firebaseio.com/movies.json"
			);

			console.log(res);

			const data = await res.json();

			data.forEach(el => {
				if (el.field2.toLowerCase() === movieSearch.toLowerCase()) {
					setFoundMovie({
						name: el.field2,
						year: el.field3,
						country: el.field4,
						genre: el.field7,
					});
				}
			});

			// for (const movie in data) {

			// }
		} catch (err) {}
	};

	const addFavorite = () => {
		setCurrentFavs(prevFavs => [...prevFavs, foundMovie]);
	};

	console.log(currentFavs);

	return (
		<div className="mainContainer">
			<div className="searchContainer">
				<div className="searchBar">
					<h4>Input Movie Title</h4>
					<input type="text" onChange={movieSearchHandler}></input>
					<button onClick={searchHandler}>SEARCH</button>
				</div>
				<div className="searchResults">
					<table className="resultsTable">
						<tbody>
							<tr className="movieGroup movieGroup--name">
								<th className="movieGroup__label">Name:</th>
								<td className="movieGroup__value">{foundMovie.name}</td>
							</tr>
							<tr className="movieGroup movieGroup--year">
								<th className="movieGroup__label">Year Released:</th>
								<td className="movieGroup__value">{foundMovie.year}</td>
							</tr>
							<tr className="movieGroup movieGroup--country">
								<th className="movieGroup__label">Country:</th>
								<td className="movieGroup__value">{foundMovie.country}</td>
							</tr>
							<tr className="movieGroup movieGroup--genre">
								<th className="movieGroup__label">Genre:</th>
								<td className="movieGroup__value">{foundMovie.genre}</td>
							</tr>
						</tbody>
					</table>
					<button className="favoritesBtn" onClick={addFavorite}>
						Add To Favorites
					</button>
				</div>
			</div>
			{/* <FavoritesList currentFavs={currentFavs} /> */}
		</div>
	);
};

export default MovieSearch;
