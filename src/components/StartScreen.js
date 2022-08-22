import "./StartScreean.css";

const StartScreen = ({ startGame }) => {
    return (
        <div className="start">
            <div>
                <h2>Secret</h2>
                <h1>
                    <span className="Wo">Wo</span> 
                    <span className="r">r</span>
                    <span className="d">d</span>
                </h1>
            </div>

            <button onClick={startGame} >Começar o jogo</button>
        </div>
    )
}

export default StartScreen