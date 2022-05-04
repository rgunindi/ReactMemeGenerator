import React from 'react';
import data from '../data/memesData';
export default function Meme() {
    const [meme, setMeme] = React.useState("");
    function getMeme() {
        const random = Math.floor(Math.random() * data.data.memes.length);
        let memes = (data.data.memes[random].url);
        setMeme(memes);
    }
    return (
        <main>
            <div className='form'>
                <input type="text" className='form--input' placeholder="Shut up" />
                <input type="text" className='form--input' placeholder="and take my money" />
                <button
                    onClick={getMeme}
                    className='form--button'>Get a new meme image 🖼

                </button>
            </div>
            <img src={meme} className='form--img' alt='' />
        </main>
    )
}