import { useHistory } from 'react-router-dom';

function Feeling() {

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submitted')
        history.push('/understanding')
    }

    return (
        <div>
            <h1>How are you feeling today?</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Feeling?
                    <input type="number"/>
                </label>
                <input type="submit" value="Next"/>
            </form>
        </div>
    )
}

export default Feeling;