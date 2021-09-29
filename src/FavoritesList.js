// import { useEffect, useState } from "react";
// import "./FavoritesList.css";

// const FavoritesList = props => {
// 	const [favsExist, setFavsExist] = useState();

// 	useEffect(() => {
// 		if (props.currentFavs.length === 0) {
// 			setFavsExist(false);
// 		} else {
// 			setFavsExist(true);
// 		}
// 	});

// 	console.log(favsExist);

// 	return (
// 		<div className="movies">
// 			{favsExist &&
// 				props.currentFavs.map(item => {
// 					return (
// 						<table className="movie">
// 							<tr>
// 								<div className="movie__group">
// 									<th className={"movieGroup__label"}>Name:</th>
// 									<td className="movie__item">{item.name}</td>
// 								</div>
// 								<div className="movie__group">
// 									<th className={"movieGroup__label"}>Country:</th>
// 									<td className="movie__item">{item.country}</td>
// 								</div>
// 							</tr>
// 							<tr>
// 								<div className="movie__group">
// 									<th className={"movieGroup__label"}>Year Released:</th>
// 									<td className="movie__item">{item.year}</td>
// 								</div>
// 								<div className="movie__group">
// 									<th className={"movieGroup__label"}>Genre:</th>
// 									<td className="movie__item">{item.genre}</td>
// 								</div>
// 							</tr>
// 						</table>
// 					);
// 				})}
// 		</div>
// 	);
// };

// export default FavoritesList;
