import React, { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

import FoodList from './components/FoodList';

import { Card } from 'antd';
import './App.css';

import foodsJson from './foods.json';

const App = () => {
  const [foods, setFoods] = useState(foodsJson);

  const addFood = newFood => {
    setFoods([...foods, newFood]);
  };

  const deleteFood = foodName => {
    const updatedFoods = foods.filter(food => food.name !== foodName);
    setFoods(updatedFoods);
  };

  return (
    <div className='App'>
      <Search filterFoods={searchTerm => console.log(searchTerm)} />
      <FoodList foods={foods} addFood={addFood} deleteFood={deleteFood} />{' '}
      <Card style={{ width: 300, marginTop: 1 }}>
        <AddFoodForm addFood={addFood} />
      </Card>
    </div>
  );
};

export default App;
