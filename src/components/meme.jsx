import React from "react";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        image : "http://i.imgflip.com/1bij.jpg"
    })

    const [allMeme, setAllMeme] = React.useState([])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        setMeme( x => ({...x, image: allMeme[randomNumber].url}));
    }

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMeme(data.data.memes)
        }
        getMemes();
    }, [])

    function change(event) {
        const {name, value} = event.target
        setMeme( x => {
            return {
                ...x,
                [name]: value
            }
        })
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    className="form_input" 
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={change}
                />
                
                <input
                    type="text" 
                    className="form_input" 
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={change}
                />
                <button className="form_button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.image} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}