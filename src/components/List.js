
function List(props) {

    const ListItems = props.listSongs.map(song => {

        return <li key={song.id} className="listItem">
                <p className="songProp">{song.artist}</p>
                <p className="songProp">{song.title}</p>
                <p className="songProp">{song.genre}</p>
                <p className="songProp">{song.rating}</p>
                <button id={song.id} className='trashcan' onClick={props.handleDelete} ></button>
              </li>})
    return (
        <ul>
             {/* <div className='titles'>
                <p className='titleItem'>Artist</p>
                <p className='titleItem'>Title</p>
                <p className='titleItem'>Genre</p>
                <p className='titleItem'>Rating</p> 
            </div> */}
            {ListItems}
            <div className='underBar'>
                <p className="underBarTitle"> *2022* Nailwood Company</p> 
            </div>
        </ul>
    )
}

export default List