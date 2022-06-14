function SortOptions(props) {
    return(
        <div className="sortBlock"> 
            <div className="sort-btnBlock">
                <label>Artist</label>
                    <button name="artist" onClick={props.sortListArtist} className="AZ">A-Z</button>
                    <button name="artist" onClick={props.sortListArtist} className="ZA">Z-A</button>
            </div>
            <div className="sort-btnBlock">
                <label>Title</label>
                    <button name="title" onClick={props.sortListTitle} className="AZ">A-Z</button>
                    <button name="title" onClick={props.sortListTitle} className="ZA">Z-A</button>
            </div>
            <div className="sort-btnBlock">
                <label>Genre</label>
                    <button name="genre" onClick={props.sortListGenre} className="AZ">A-Z</button>
                    <button name="genre" onClick={props.sortListGenre} className="ZA">Z-A</button>
            </div>
            <div className="sort-btnBlock">
                <label>Rating</label>
                    <button name="rating" onClick={props.sortListRating} className="AZ">1-5</button>
                    <button name="rating" onClick={props.sortListRating} className="ZA">5-1</button>
            </div>
        </div>
    )
}

export default SortOptions
