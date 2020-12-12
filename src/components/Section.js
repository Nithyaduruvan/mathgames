const Section = props => {
    const styles = {
        wrapper: {
            margin: '10px'
        }
    }

    return (
        <div style={styles.wrapper}>
            {props.children}
        </div>
    )
}

export default Section;