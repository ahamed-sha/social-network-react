import images from "../assets"
import CircleImage from "./CircleImage"
import Spacer from "./Spacer"
import RegularText from "./styled/RegularText"
import Row from "./styled/Row"

const Post = ({body}) => {
    return(
        <div style={{
            marginBottom: 10,
            borderRadius: 10,
            backgroundColor:"#1A1C20"
        }}>
            <Row style={{
                padding:"10px 20px",
                justifyContent:"space-between"
            }}>
                <Row>
                <CircleImage image={images.demoUser}/>
                <div>
                    <RegularText style={{
                        margin:0,
                        fontWeight:500,
                        fontSize:18
                    }}>
                        Username
                    </RegularText>
                    <RegularText style={{
                        fontSize:12
                    }}>
                        18 minutes ago...
                    </RegularText>
                    <Spacer height={10} />
                    <RegularText>{body}</RegularText>
                </div>
                </Row>
                
                <img style={{
                    cursor:"pointer",
                    height:30,
                    width:30
                }} src={images.menu} alt="menubutton" />
            </Row>
        </div>
    )
}
export default Post