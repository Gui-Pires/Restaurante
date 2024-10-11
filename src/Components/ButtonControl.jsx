export default function ButtonControl(props) {
    const nameButton = props.text === 'Todos' ? '' : props.text

    return (
        <div className={props.classCol ? props.classCol : 'col'}>
            <button className="btn form-control bg-color h-100" name={props.text} onClick={() => props.func(nameButton)}>
                {props.img ? <img src={props.img} className="size-icon" alt="" /> : ''}
                <span>{props.text}</span>
            </button>
        </div>
    )
}