import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Comments() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [comments, setComments] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_COMMENTS', payload: comments})
        history.push('/Review')
    }

    const goBack = () => {
        history.push('/supported');
    }

    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <button onClick={goBack} >back</button>
            <form onSubmit={handleSubmit}>
                <label>
                    Comments?
                    <input
                        type="text"
                        value={comments}
                        onChange={(event) => setComments(event.target.value)}
                    />
                </label>
                <input type="submit" value="Next"/>
            </form>
        </div>
    )
}

export default Comments;