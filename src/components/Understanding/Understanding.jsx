import { useHistory } from 'react-router-dom';

function Understanding() {
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submitted')
        history.push('/supported')
    }


    return (
    <div>
        <h1>How well are you understanding the content?</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Understanding?
                <input type="number"/>
            </label>
            <input type="submit" value="Next"/>
        </form>
    </div>
    )
}

export default Understanding;