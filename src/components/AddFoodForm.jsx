import React, { useState } from 'react';
import { Input, Button } from 'antd';

const AddFoodForm = ({ addFood }) => {
  const [newFood, setNewFood] = useState({
    name: '',
    calories: 0,
    image: '',
    servings: 0,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setNewFood(prevFood => ({
      ...prevFood,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    addFood(newFood);
    setNewFood({
      name: '',
      calories: 0,
      image: '',
      servings: 0,
    });
  };

  return (
    <div className='AddFoodForm'>
      <Input
        placeholder='Name'
        name='name'
        value={newFood.name}
        onChange={handleChange}
      />
      <Input
        placeholder='Calories'
        type='number'
        name='calories'
        value={newFood.calories}
        onChange={handleChange}
      />
      <Input
        placeholder='Image URL'
        name='image'
        value={newFood.image}
        onChange={handleChange}
      />
      <Input
        placeholder='Servings'
        type='number'
        name='servings'
        value={newFood.servings}
        onChange={handleChange}
      />
      <Button type='primary' onClick={handleSubmit}>
        Create
      </Button>
    </div>
  );
};

export default AddFoodForm;
