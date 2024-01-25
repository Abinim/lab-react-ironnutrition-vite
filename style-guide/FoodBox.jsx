import { Card, Button } from 'antd';

const FoodBox = ({ food, deleteFood }) => {
  return (
    <Card title={food.name} style={{ width: 300 }}>
      <img
        src={food.image}
        alt={food.name}
        style={{ width: '100%', height: 150, objectFit: 'cover' }}
      />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <b>Total Calories: {food.servings * food.calories} kcal</b>
      </p>
      <Button onClick={() => deleteFood(food.name)} type='danger'>
        Delete
      </Button>
    </Card>
  );
};

export default FoodBox;
