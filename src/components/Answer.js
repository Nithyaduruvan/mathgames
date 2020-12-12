const Answer = props => {
    const keypressed = evt => {
        if (evt.charCode === 13) {
            evt.preventDefault();
            props.resetCallback();
        }
    }
    
    return (
        <div>
            <input type="text" onChange={evt => {props.answerChanged(evt.target.value)}} value={props.text} onKeyPress={keypressed}></input>
        </div>
    )
}

export default Answer;