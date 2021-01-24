import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Understanding() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [understanding, setUnderstanding] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_UNDERSTANDING', payload: Number(understanding)})
        history.push('/supported')
    }


    return (
    <div>
        <h1>How well are you understanding the content?</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Understanding?
                <input
                    type="number"
                    value={understanding}
                    onChange={(event) => setUnderstanding(event.target.value)}
                    placeholder="1 - 5"
                />
            </label>
            <input type="submit" value="Next"/>
        </form>
    </div>
    )
}

export default Understanding;