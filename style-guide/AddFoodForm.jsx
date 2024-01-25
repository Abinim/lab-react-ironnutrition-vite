import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const AddFoodForm = ({ addFood }) => {
  const [form] = Form.useForm();

  const handleSubmit = values => {
    addFood(values);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={handleSubmit} layout='vertical'>
      <Form.Item
        label='Name'
        name='name'
        rules={[{ required: true, message: 'Please enter a name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Image'
        name='image'
        rules={[{ required: true, message: 'Please enter an image URL' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Calories'
        name='calories'
        rules={[
          {
            required: true,
            type: 'number',
            message: 'Please enter a valid number of calories',
          },
        ]}
      >
        <Input type='number' />
      </Form.Item>
      <Form.Item
        label='Servings'
        name='servings'
        rules={[
          {
            required: true,
            type: 'number',
            message: 'Please enter a valid number of servings',
          },
        ]}
      >
        <Input type='number' />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddFoodForm;
