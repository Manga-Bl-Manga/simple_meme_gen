import "./styles/Body.css"
import {useState} from 'react'

export default function Body() {

    const [memeObj,setMemeObj] = useState({
        url:"http://i.imgflip.com/1bij.jpg",
        topText:"One does not simply",
        bottomText:"Walk into Mordor"
        })

    return (
        <>
            <div className="theMeat">
                <div className="form">
                    <label>Top Text
                        <input type="text" name="top-half" />
                    </label>

                    <label>Bottom Text
                        <input type="text" name="top-half" />
                    </label>

                </div>
                <div className="get-image">
                    <button>Get a new cat image!</button>
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