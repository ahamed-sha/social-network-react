import images from "../assets"
import { Link } from "react-router-dom"

const MenuItem = () => {
    return(
        <div>
        
        <Link to="/">
            <img style={{
                margin:"0 30px",
                cursor: 'pointer',
                height:30,
                width:30,
            }}
        src={images.home} alt="MenuImg" />
        </Link>

        <Link to="/chat">
        <img style={{
            margin:"0 30px",
            cursor: 'pointer',
            height:30,
            width:30,
        }}
        src={images.group} alt="MenuImg" />
        </Link>

        <Link to="/video">
        <img style={{
            margin:"0 30px",
            cursor: 'pointer',
            height:30,
            width:30,
        }}
        src={images.video} alt="MenuImg" />
        </Link>

        <Link to="/game">
        <img style={{
            margin:"0 30px",
            cursor: 'pointer',
            height:30,
            width:30,
        }}
        src={images.game} alt="MenuImg" />
        </Link>

        <Link to="/FAQ">
        <img style={{
            margin:"0 30px",
            cursor: 'pointer',
            height:30,
            width:30,
        }}
        src={images.faq} alt="MenuImg" />
        </Link>

        </div>
    )
    
}
export default MenuItem