import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Feeling() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [feeling, setFeeling] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_FEELING', payload: feeling})
        history.push('/understanding')
    }

    return (
        <div>
            <h1>How are you feeling today?</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Feeling?
                    <input
                        type="number"
                        value={feeling}
                        onChange={(event) => setFeeling(event.target.value)}
                        placeholder="1 - 5"
                    />
                </label>
                <input type="submit" value="Next"/>
            </form>
        </div>
    )
}

export default Feeling;