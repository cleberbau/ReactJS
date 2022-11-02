export default function ListItem(props){
    return(
        <li>
                            <a 
                            target="_blank"
                            rel="noreferer"
                            href={props.url}>
                                <img 
                                src={props.imageUrl}
                                alt={props.alt}/>
                            </a>
        </li>

    )
}