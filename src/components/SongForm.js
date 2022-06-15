import {useState} from "react";
import {v4 as uuidv4} from "uuid"

function SongForm(props) {
    const [artist, setArtist] = useState("")
    const [title, setTitle] = useState ("")
    const [genre, setGenre] = useState ("")
    const [rating, setRating] = useState ("")

    function UpdateArtist(e) {
        const {name, value} = e.target 
        switch(name) {
        case "artist":
            return setArtist(value)
        case "title":
            return setTitle(value)
        case "genre":
            return setGenre(value)
        case "rating":
            return setRating(value)
        default: 
            return alert("Oops! There went something wrong, please try again..")
        }
    }
    function handleSubmit(e) {
        e.preventDefault()
        const song = {id: uuidv4(),artist, title, genre, rating }
        props.addSong(song)
      }
    return (
        <div>
            <form className="Form" >
                <label> Artist: 
                    <input name='artist' type="text" placeholder="artist" onChange={UpdateArtist} />
                </label>
                <label>Title: 
                    <input name='title' type="text" placeholder="title" onChange={UpdateArtist} />
                </label>
                <label>Genre: 
                    <select onChange={UpdateArtist} type="text" name="genre" >   
                    <option value="Select">Select...</option> 
                    <option value="Pop">Pop</option> 
                    <option value="Rock">Rock</option> 
                    <option value="Trance">Trance</option> 
                    <option value="Soul">Soul</option> 
                    <option value="Punk">Punk</option> 
                    </select>
                </label>
                <label>Rating: 
                    <input name='rating' type="number" placeholder="rating" min={0} max={5} onChange={UpdateArtist} />
                </label>
                <button onClick={handleSubmit}>Add Song</button>
            </form>   
        </div>
    )
}

export default SongForm