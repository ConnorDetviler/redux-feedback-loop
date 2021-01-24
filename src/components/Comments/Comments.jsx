import { useHistory } from 'react-router-dom';

function Comments() {
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submitted')
        history.push('/Review')
    }

    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Comments?
                    <input type="text"/>
                </label>
                <input type="submit" value="Next"/>
            </form>
        </div>
    )
}

export default Comments;