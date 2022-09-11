const QuestionsAndAnswersItem = ({ question, answer }) => {
    return (
        <div>
            <span> { question } </span>
            <p> { answer } </p>
        </div>
    )
};

export default QuestionsAndAnswersItem;
