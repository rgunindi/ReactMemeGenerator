import React from 'react';
export default function Meme() {
    const [meme, setMeme] = React.useState({
        toptext: '',
        bottomtext: '',
        randomImg: 'http://i.imgflip.com/1bij.jpg',
    });
    const [memeList, setMemeList] = React.useState([]);
    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes').then(res => res.json()).then(res => setMemeList(res.data.memes))
    }, []);

    function getMeme() {
        const random = Math.floor(Math.random() * memeList.length);
        let memes = (memeList[random].url);
        setMeme(prev => ({
            ...prev,
            randomImg: memes,
        }));
    }
    function handleChange(e) {
        const { name, value } = e.target;
        setMeme(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <main>
            <div className='form'>
                <input type="text" className='form--input' placeholder="Top text"
                    name="toptext" value={meme.toptext} onChange={handleChange} />

                <input type="text" className='form--input' placeholder="Bottom text"
                    name="bottomtext" value={meme.bottomText} onChange={handleChange} />
                <button
                    onClick={getMeme}
                    className='form--button'>Get a new meme image 🖼

                </button>
            </div>
            <div className='meme'>
                <img src={meme.randomImg} className='form--img' alt='' />
                <h2 className="meme--text top">{meme.toptext}</h2>
                <h2 className="meme--text bottom">{meme.bottomtext}</h2>
            </div>
        </main>
    )
}