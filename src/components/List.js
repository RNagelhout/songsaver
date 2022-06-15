
function List(props) {
        const ListItems = props.FilteredList.map(song => {
        return <li key={song.id} className="listItem">
                <p className="songProp">{song.artist}</p>
                <p className="songProp">{song.title}</p>
                <p className="songProp">{song.genre}</p>
                <p className="songProp">{song.rating}</p>
                <button id={song.id} className='trashcan' onClick={props.handleDelete} ></button>
              </li>})
    
    return (
        <ul>
            {ListItems}

            <div className='underBar'>
                <p className="underBarTitle"> *2022* Nailwood Company</p> 
            </div>
        </ul>
    )
}

export default List