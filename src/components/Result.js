import Section from "./Section";

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
                <Section>
                    <label style={styles.correct}>
                        Very Good! :)
                    </label>
                </Section>
            ) : (
                <Section>
                    <label style={styles.incorrect}>
                        Try again! :(
                    </label>
                </Section>
            )
}

export default Result;