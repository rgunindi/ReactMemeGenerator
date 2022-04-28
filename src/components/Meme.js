import React from 'react';
import data from '../data/memesData';
export default function Meme() {
    let meme 
    function getMeme() {
        console.log(data.data.memes);
        const random = Math.floor(Math.random() * data.data.memes.length);
        let memes = JSON.stringify(data.data.memes[random].url);
        meme = memes;
        document.getElementById('meme').src = memes;
       // return memes;
    }
    return (
        <main>
            <form className='form'>
                <p>{meme}</p>
                <input type="text" className='form--input' placeholder="Shut up" />
                <input type="text" className='form--input' placeholder="and take my money" />
                <button
                    onClick={getMeme}
                    className='form--button'>Get a new meme image 🖼

                    </button>
            </form>
            <main className='meme-main'>
                <img 
                id='meme'
                src="" alt='' />
            </main>
        </main>
    )
}