import React from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

const AvailableMeals = () => {
	const [isFetchCompleted, setIsFetchCompleted] = useState(false);
	const [meals, setMeals] = useState([]);
	const [mealsList, setMealList] = useState([]);
	const [isError, setIsError] = useState(false);
	useEffect(() => {
		fetch(
			'https://dev-project-mse-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
		)
			.then((response) => response.json())
			.then((data) => {
				setMeals(data);
				setIsFetchCompleted(true);
			})
			.catch((error) => {
				setIsError(true);
			});
	}, []);

	useEffect(() => {
		if (isFetchCompleted) {
			setMealList(
				Object.keys(meals).map((meal) => (
					<MealItem
						key={meal}
						id={meal}
						name={meals[meal].name}
						description={meals[meal].description}
						price={meals[meal].price}
					/>
				))
			);
		}
	}, [isFetchCompleted]);

	return (
		<section className={classes.meals}>
			{!isFetchCompleted && <CircularProgress />}
			{isFetchCompleted && (
				<Card>
					<ul>{mealsList}</ul>
				</Card>
			)}
			{isError && 'There was an error try again'}
		</section>
	);
};

export default AvailableMeals;
