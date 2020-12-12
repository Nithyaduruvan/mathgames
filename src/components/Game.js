import { useState } from "react";
import Answer from "./Answer";
import Question from "./Question";
import Result from "./Result";
import Section from "./Section";

const generateRandom = () => {
    return Math.floor(Math.random() * 100);
}

const tryParseInt = strval => {
    return parseInt(strval) ? parseInt(strval) : 0
}

const Game = () => {
    const [question, setQuestion] = useState(generateRandom());
    const [answer, setAnswer] = useState('');
    const [result, setResult] = useState(null);

    const reset = () => {
        setQuestion(generateRandom());
        setAnswer('');
        setResult(null);
    }

    const isCorrect = (value) => {
        return tryParseInt(value) === question + 1;
    }

    const answerChanged = (value) => {
        setAnswer(value);
        setResult(isCorrect(value));
    }

    return (
        <Section>
            What's the next number ??
            <Question question={question}></Question>
            <Answer text={answer} answerChanged={answerChanged} resetCallback={reset}></Answer>
            <Result correct={result}></Result>
            <input type="submit" value="Reset" onClick={reset} />
        </Section>
    )
}

export default Game;