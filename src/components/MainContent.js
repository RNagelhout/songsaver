import {useState} from "react"
import SongForm from "./SongForm";
import List from "./List";
import SortOptions from "./SortBlock";
import GenreLists from "./GenreLists";


function MainContent() {
    const [listSongs, setListSongs] = useState([])
    const [FilteredList, setFilteredList] = useState([])
    
    function addSong(song) {
      const newList = [...listSongs]
      newList.push(song)
      setListSongs(newList)
    }

    function handleDelete(e){
      e.preventDefault()
      const id = e.target
      let newListSongs = [...listSongs]
      const checkId = listSongs.filter((item) => item.id !== id)
      if (checkId !== -1) {
        newListSongs.splice(id, 1)
        setListSongs(newListSongs)
      }   
    }

    function sortListArtist(e) {
      e.preventDefault()
      const {className} = e.target
      const temp = [...listSongs]
      if (className === "AZ") {
        temp.sort((a, b) => 
        a.artist > b.artist ? 1: -1)
        return setListSongs(temp)
      } else if (className === "ZA") {
        temp.sort((a, b) => 
        b.artist > a.artist ? 1: -1)
        return setListSongs(temp)
      }
    }

    function sortListTitle(e) {
      e.preventDefault()
      const {className} = e.target
      const temp = [...listSongs]
      if (className === "AZ") {
        temp.sort((a, b) => 
        a.title > b.title ? 1: -1)
        return setListSongs(temp)
      } else if (className === "ZA") {
        temp.sort((a, b) => 
        b.title > a.title ? 1: -1)
        return setListSongs(temp)
      }
    }

    function sortListGenre(e) {
      e.preventDefault()
      const {className} = e.target
      const temp = [...listSongs]
      if (className === "AZ") {
        temp.sort((a, b) => 
        a.genre > b.genre ? 1: -1)
        return setListSongs(temp)
      } else if (className === "ZA") {
        temp.sort((a, b) => 
        b.genre > a.genre ? 1: -1)
        return setListSongs(temp)
      }
    }

    function sortListRating(e) {
      e.preventDefault()
      const {className} = e.target
      const temp = [...listSongs]
      if (className === "AZ") {
        temp.sort((a, b) => 
        a.num - b.num ? 1: -1)
        return setListSongs(temp)
      } else if (className === "ZA") {
        temp.sort((a, b) => 
        b.num - a.num ? 1: -1)
        return setListSongs(temp)
      }
    }

    function FilteredGenreList(e){
      e.preventDefault()
      const targetId = e.target.id
      let FilteredList 
      if (targetId === "all"){
        FilteredList = listSongs
      } else if (targetId === "Pop" || "Rock" || "Punk" || "Select" || "Trance" || "Soul") {
        FilteredList = listSongs.filter(song => song.genre === targetId)
      } else FilteredList = listSongs
      setFilteredList(FilteredList)  
    }
    
      
    return(
        <main>
            <SongForm addSong={addSong} />
            <h2>Your Favorite Songs!</h2>
            <GenreLists FilteredGenreList={FilteredGenreList}/>
            <SortOptions listSongs={listSongs} FilteredList={FilteredList} sortListGenre={sortListGenre} sortListArtist={sortListArtist} sortListTitle={sortListTitle} sortListRating={sortListRating}/>
            <List listSongs={listSongs} FilteredList={FilteredList} handleDelete={handleDelete} />
        </main>
    )

}

export default MainContent