import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Understanding({handleInput}) {

    const history = useHistory();
    const dispatch = useDispatch();

    const [understanding, setUnderstanding] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        if(understanding === '') {
            alert('please enter a number to continue')
            return;
        } else {
            dispatch({ type: 'SET_UNDERSTANDING', payload: Number(understanding)})
            history.push('/supported')
        }
    }

    const goBack = () => {
        history.push('/');
    }

    return (
    <div>
        <h1>How well are you understanding the content?</h1>
        <button onClick={goBack} >back</button>
        <form onSubmit={handleSubmit}>
            <label>
                Understanding?
                <input
                    type="number"
                    value={understanding}
                    onChange={(event) => setUnderstanding(handleInput(event))}
                    placeholder="1 - 5"
                />
            </label>
            <input type="submit" value="Next"/>
        </form>
    </div>
    )
}

export default Understanding;