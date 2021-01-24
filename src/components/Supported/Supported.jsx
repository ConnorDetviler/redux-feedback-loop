import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Supported({handleInput}) {

    const history = useHistory();
    const dispatch = useDispatch();

    const [support, setSupport] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        if(support === '') {
            alert('please enter a number to continue')
            return;
        } else {
            dispatch({ type: 'SET_SUPPORT', payload: Number(support)})
            history.push('/Comments')
        }
    }

    const goBack = () => {
        history.push('/understanding');
    }

    return (
    <div>
        <h1>How well are you being supported?</h1>
        <button onClick={goBack} >back</button>
        <form onSubmit={handleSubmit}>
            <label>
                Support?
                <input
                    type="number"
                    value={support}
                    onChange={(event) => setSupport(handleInput(event))}
                    placeholder="1 - 5"
                />
            </label>
            <input type="submit" value="Next"/>
        </form>
    </div>
    )
}

export default Supported;