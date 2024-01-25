import React, { useState, useEffect } from 'react';
import FoodBox from './FoodBox';
import { Row, Col } from 'antd';

const FoodList = ({ foods, deleteFood }) => {
  const [filteredFoods, setFilteredFoods] = useState(foods);

  useEffect(() => {
    setFilteredFoods(foods);
  }, [foods]);

  const filterFoods = searchTerm => {
    const normalizedSearchTerm = searchTerm.toLowerCase();
    const filtered = foods.filter(food =>
      food.name.toLowerCase().includes(normalizedSearchTerm)
    );
    setFilteredFoods(filtered);
  };

  return (
    <div className='food-list-container'>
      <h2 className='food-list-title'>Food List</h2>
      <Row gutter={[16, 16]}>
        {filteredFoods.map(food => (
          <Col key={food.name} span={8}>
            <FoodBox food={food} deleteFood={deleteFood} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FoodList;
