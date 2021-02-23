
import {useState} from 'react';

const CreateTaskForm = () => {

    const [currentTaskName, setTaskName] = useState('');
    const [currentNote, setNote] = useState('');
    const [currentPriority, setPriority] = useState('1');
    const [currentDate, setDate] = useState(new Date())

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return(
        <div id='task-form-wrapper'>
            <form>
                <ul class="flex-outer">
                    <li>
                        <label for='taskName'>Task Name: </label>
                        <input
                            type='text'
                            id='task-name'
                            name='taskName'
                            onChange={(e) => setTaskName(e.target.value)}
                        />
                    </li>
                    <li>
                    <label for='note'>Notes: </label>
                        <textarea
                            name='note'
                            id='note-textarea'
                            onChange={(e) => setNote(e.target.value)}
                        />
                    </li>
                    <li>
                        <label for='priority'>Priority: </label>
                        <select
                            name='priority'
                            id='priority'
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                        </select>
                    </li>
                    <li>
                        <label for="start">Start date:</label>

                        <input type="date" id="start" name="start"
                            min="2018-01-01" max="2050-12-31"
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </li>
                    <li>
                        <button type="submit">add task</button>
                    </li>
                </ul>
            </form>
        </div>
    );
};

export default CreateTaskForm;
