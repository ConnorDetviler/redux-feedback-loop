import { useHistory } from 'react-router-dom';

function Supported() {
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submitted')
        history.push('/Comments')
    }

    return (
    <div>
        <h1>How well are you being supported?</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Support?
                <input type="number"/>
            </label>
            <input type="submit" value="Next"/>
        </form>
    </div>
    )
}

export default Supported;