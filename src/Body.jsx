import "./styles/Body.css"
import {useState, useEffect} from 'react'

export default function Body() {

    const [memeObj,setMemeObj] = useState({
        url:null,
        topText:"i am Mr.meow",
        bottomText:"o i i a i o i i i a i"
        })

    const [counter, setCounter] = useState(0)

    function updateText(theEvent){
        const {value, name} = theEvent.currentTarget;
        console.log(value);
        setMemeObj({...memeObj, [name]: value})
    }

    useEffect(() => {
        console.log("use effect ran!")
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(res => res.json())
            .then(data => setMemeObj({...memeObj, url: data[0].url}))
    },[counter])

    return (
        <>
            <div className="theMeat">
                <div className="form">
                    <label>Top Text
                        <input type="text" name="topText" placeholder={memeObj.topText} onChange={updateText}/>
                    </label>

                    <label>Bottom Text
                        <input type="text" name="bottomText" placeholder={memeObj.bottomText} onChange={updateText}/>
                    </label>

                </div>
                <div className="get-image">
                    <button onClick={() => setCounter(prev => prev+1)}>Get a new cat image!</button>
                </div>
                <div className="meme">
                    <img src={memeObj.url} />
                    <span className="top">{memeObj.topText}</span>
                    <span className="bottom">{memeObj.bottomText}</span>
                </div>
            </div>
        </>
    )
}