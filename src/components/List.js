import ListItem from "./ListItem"

function List(props) {

    const listComponents = props.songList.map(song => {
        return(
            <ListItem  artist={song.artist} title={song.title} genre={song.genre} rating={song.rating} />
        )})

        return(
            <ul>
                {listComponents}
            </ul>
        )
}

export default List