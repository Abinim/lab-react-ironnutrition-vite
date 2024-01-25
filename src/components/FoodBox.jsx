import React from 'react';
import { Card, Button, Image } from 'antd';

const FoodBox = ({ food, deleteFood }) => {
  const { name, calories, image, servings } = food;

  return (
    <Card title={name} className='FoodBox'>
      <Image src={image} alt={name} preview={false} />
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>Total Calories: {calories * servings} kcal</p>
      <Button className='BTN' type='danger' onClick={() => deleteFood(name)}>
        Delete
      </Button>
    </Card>
  );
};

export default FoodBox;
