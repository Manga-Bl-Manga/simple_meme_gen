import Hambola from "./assets/7ambola.jpg"
import "./styles/Header.css"
export default function Header() {
    return (
        <header>
            <img className="Hambola" src={Hambola}/>
            <h1>Cat Meme Generator</h1>
        </header>
    )
}