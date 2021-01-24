import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Review() {

    const history = useHistory();

    const feedback = useSelector((state) => state.feedbackReducer)

    const handleSubmit = () => {
        
        history.push("/Success");
    }

    return (
        <div>
            <h1>Review your feedback</h1>

            <h3>Feelings: {feedback.feeling} </h3>
            <h3>Understanding: {feedback.understanding} </h3>
            <h3>Support: {feedback.support} </h3>
            <h3>Comments: {feedback.comments} </h3>

            <button onClick={handleSubmit} >Submit</button>
        </div>
    )
}

export default Review;