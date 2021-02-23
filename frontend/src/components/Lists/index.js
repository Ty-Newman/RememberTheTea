import {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {fetchAllLists} from '../../store/lists';

const ListsPage = () => {

    const dispatch = useDispatch();

    const currentLists = useSelector(fullReduxState => {
        return fullReduxState.lists;
    })

    const currentUser = useSelector(state => {
        return state.session.user;
    });
    console.log(currentLists);
    console.log(currentUser);

    useEffect(async () => {
        // const response = await fetch('/api/lists');
        // setLists(response.data.lists);
        dispatch(fetchAllLists());
    }, []);

    return (
        <div id="list-wrapper">
            <h1>Pick a task list</h1>
            {!currentLists && <h3>Loading....</h3>}
            <ul>
                {currentLists && currentLists.map(list => {
                    if (currentUser.id === list.userId){
                        return <li><a href={'/lists/' + list.id}>{list.listName}</a></li>
                    }
                })}
            </ul>
            <a href="/create-list">Create a List</a>
        </div>
    );
};

export default ListsPage;
