import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetch} from '../../store/csrf';

const TasksPage = () => {

    const [currentTasks, setTasks] = useState([]);
    const params = useParams();
    const {id} = params;

    useEffect(async () => {
        const response = await fetch(`/api/lists/${id}`);
        setTasks(response.data.tasks);
        console.log(currentTasks);
    }, [])

    return (
        <div id='task-wrapper'>
            {!currentTasks && <h3>Loading....</h3>}
            <table>
                <thead>
                    <tr>
                        <th>Task Name</th>
                        <th>Due Date</th>
                        <th>Priority</th>
                        <th>Completed</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {currentTasks && currentTasks.map(task => {
                        if(task.listId == id){
                            return (
                                <tr>
                                    <td>{task.taskName}</td>
                                    <td>{task.dueDate}</td>
                                    <td>{task.priority}</td>
                                    <td>{task.isCompleted}</td>
                                    <td>{task.note}</td>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </table>
        </div>
    );
}


export default TasksPage;
