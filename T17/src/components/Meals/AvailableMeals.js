import { useCallback, useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)


  const fetchMealsHandler = useCallback(async () => {
    setLoading(true)
    await fetch('https://react-meals-task-17-default-rtdb.europe-west1.firebasedatabase.app/meals.json')
      .then(response => {
        if (!response.ok){
          throw new Error('Something went wrong')
        }
        return response.json()
      })
      .then(data => {
        const loadedMeals = [];

        for (const key in data){
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price
          })
        }
          setMeals(loadedMeals)

        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        setError(error)
        console.log(error)
      })
  }, [])

  useEffect(() => {
    fetchMealsHandler()
  },[fetchMealsHandler])
  
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  let content = <p>No Meals Found</p>

  if (mealsList.length > 0) {
    content = mealsList; 
  }
  if (error){
    content = <p>{error.message}</p>
  }
  if (loading) {
    content = <p>LOADING . . .</p>
  }


  return (
    <section className={classes.meals}>
      <Card>
        <ul>{content}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
