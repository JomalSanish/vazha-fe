import { Card } from './Card';
import { Input } from './Input';
import { useState } from 'react';

const Task = () => {
    const initialTasks =
    [
        {
            id: 1,
            taskName: "first"
        },
        {
            id: 2,
            taskName: "second"
        },
    ]
    const [tasks, setTasks] = useState(initialTasks);
    const addTaskHandler = (taskName) => {
        const newTask =
        {
            id: Math.random(),
            taskName: taskName
        }
        setTasks(prev => [...prev, newTask])
    }
    const completeTaskHandler = (id) => {
        setTasks(previousTasks => previousTasks.filter(item => item.id !== id));
    }

    return (
        <div id="tasks">
                 <Input  addTaskHandler={addTaskHandler}/>
                 {tasks.map(task => <Card taskName={task.taskName} id={task.id} completeTaskHandler={completeTaskHandler} />)}
        </div>
    )
}
export default Task;