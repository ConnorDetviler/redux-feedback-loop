import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function Review() {

    const history = useHistory();
    const dispatch = useDispatch();

    const feedback = useSelector((state) => state.feedbackReducer)

    const handleSubmit = () => {
        axios.post('/feedback', feedback)
        .then((response) => {
            console.log(response);
            dispatch({ type: 'RESET_FEEDBACK' });
            history.push("/Success");
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const goBack = () => {
        history.push('/comments');
    }

    return (
        <div>
            <h1>Review your feedback</h1>

            <h3>Feelings: {feedback.feeling} </h3>
            <h3>Understanding: {feedback.understanding} </h3>
            <h3>Support: {feedback.support} </h3>
            <h3>Comments: {feedback.comments} </h3>

            <button onClick={goBack} >back</button>
            <button onClick={handleSubmit} >Submit</button>
        </div>
    )
}

export default Review;