import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {createList} from '../../store/createlist';

const CreateListForm = () => {

const currentUser = useSelector(fullReduxState => {
    return fullReduxState.lists;
})

    const dispatch = useDispatch();
    const [currentListName, setListName] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            listName: currentListName,
            userId: currentUser.id
        }
        dispatch(createList(payload));
        history.push('/lists')
    }

    return(
        <div id='list-form-wrapper'>
            <form onSubmit={handleSubmit}>
                <ul class="flex-outer">
                    <li>
                        <label for='listName'>List Name: </label>
                        <input
                            type='text'
                            id='list-name'
                            name='listName'
                            onChange={(e) => setListName(e.target.value)}
                            />
                    </li>
                    <li>
                        <button type="submit">add list</button>
                    </li>
                </ul>
            </form>
        </div>
    );
};

export default CreateListForm;
