function ListItem(props) {
    return(
        <li key={props.id} className="listItem">
            <p className='songProp'>{props.artist}</p> 
            <p className='songProp'>{props.title}</p> 
            <p className='songProp'>{props.genre}</p>
            <p className='songProp'>{props.rating}</p>
        </li>
    )
}

export default ListItem