import { useHistory } from 'react-router-dom'

function Success() {

    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    }

    return (
        <div>
            <h1>Thank you!</h1>
            <button onClick={handleClick} >Leave new feedback</button>
        </div>
    )
}

export default Success;