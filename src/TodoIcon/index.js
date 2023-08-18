import { ReactComponent as CheckSVG} from "../img/ok.svg"
import { ReactComponent as DeleteSVG} from "../img/x.svg"
import "./TodoIcon.css"

const iconTypes = {
    "check": (color) =><CheckSVG 
    className="Icon-svg" fill={color} />,
    "delete":(color) => <DeleteSVG
     className="Icon-svg" fill={color}/>
}
function TodoIcon ({type, color, onClick}){
    return (
        <span
            className={`Icon-container Icon-continer-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export{TodoIcon}