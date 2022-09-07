import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux/es/exports';
// import { addTodo } from '../redux/actions';
import { todoSlice } from './todoSlice';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { remainingTodoList } from '../redux/selectors';

export default function TodoList() {
  const todoList = useSelector(remainingTodoList);
  const [todoName, setTodoName] = useState('');
  const handleInputTodoName = (e) => {
    setTodoName(e.target.value);
  };
  const [priority, setPriority] = useState('Medium');
  const handleAddPriority = (value) => {
    setPriority(value);
  };
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    dispatch(
      todoSlice.actions.addTodo({
      id: uuidv4(),
      name: todoName,
      priority: priority,
      completed: false
    }));
    setTodoName('');
    setPriority('Medium');
  };
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {todoList.map((todo) => <Todo name={todo.name} id={todo.id} prioriry={todo.priority} status={todo.completed} key={todo.id} />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputTodoName}/>
          <Select defaultValue="Medium" value={priority} onChange={handleAddPriority}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
