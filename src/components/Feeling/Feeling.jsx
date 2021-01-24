import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Feeling() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [feeling, setFeeling] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_FEELING', payload: Number(feeling)})
        history.push('/understanding')
    }

    const handleInput = (event) => {
        let input = event.target.value;
        // following conditional allows user to quickly replace number by entering a different one
        // limits input to one digit
        if (input.length > 1){
            input = input.slice(-1);
        }
        // next conditional limits that one digit to numbers 1 thru 5
        if (input > 5) {
            input = 5;
        } else if (input < 1) {
            input = 1;
        }
        setFeeling(input)
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
                        onChange={(event) => handleInput(event)}
                        placeholder="1 - 5"
                        maxLength={1}
                    />
                </label>
                <input type="submit" value="Next"/>
            </form>
        </div>
    )
}

export default Feeling;