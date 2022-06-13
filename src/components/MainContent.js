import {useState} from "react"
import SongForm from "./SongForm";
import List from "./List";


function MainContent() {
    const [listSongs, setListSongs] = useState([])

    function addSong(song) {
      const newList = [...listSongs]
      newList.push(song)
      setListSongs(newList)

      console.log(listSongs)
    }
    

    return(
        <main>
            <SongForm addSong={addSong} />
            <h2>Your Favorite Songs!</h2>
            <List listSongs={listSongs}/>
        </main>
    )

}

export default MainContent