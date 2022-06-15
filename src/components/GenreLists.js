function GenreLists({FilteredGenreList}) {

    return(
        <div className="genreList-block">
            <button id="all" name="SelectedGenre"  value="All" onClick={FilteredGenreList} className="genreList-btn" checked="checked">All</button>
            <button id="Pop" name="SelectedGenre"  value="Pop" onClick={FilteredGenreList} className="genreList-btn">Pop</button>
            <button id="Rock" name="SelectedGenre"  value="Rock" onClick={FilteredGenreList} className="genreList-btn">Rock</button>
            <button id="Trance" name="SelectedGenre"  value="Trance" onClick={FilteredGenreList} className="genreList-btn">Trance</button>
            <button id="Soul" name="SelectedGenre"  value="Soul" onClick={FilteredGenreList} className="genreList-btn">Soul</button>
            <button id="Punk" name="SelectedGenre"  value="Punk" onClick={FilteredGenreList} className="genreList-btn">Punk</button>
            <button id="Select" name="SelectedGenre"  value="Select genre.." onClick={FilteredGenreList} className="genreList-btn">Select genre...</button>
        </div>

    )
}

export default GenreLists