import Quizlogo from '../assets/quiz-logo.png'

export default function Header() {
    return (
        <header>
            <img src={Quizlogo} />
            <h1>React Quiz</h1>
        </header>
    )
}