const Result = props => {
    const styles = {
        correct: {
            color: 'green'
        },
        incorrect: {
            color: 'red'
        }
    }
    
    return props.correct === null ? null : 
            props.correct ? (
                <div style={styles.correct}>
                    Very Good! :)
                </div>
            ) : (
                <div style={styles.incorrect}>
                    Try again! :(
                </div>
            )
}

export default Result;