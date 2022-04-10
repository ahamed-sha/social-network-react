import images from "../assets"
import CircleImage from "./CircleImage"
import StyledGreyCard from "./styled/StyledGreyCard"
const HomeUser = () => {
    return(
        <StyledGreyCard style={{ 
            display:'flex',
            alignItems:'center',
        }}>
            <CircleImage image={images.demoUser} />
            
            <p style={{
                color:"white",
                fontSize:17,
                fontWeight:"bold"
            }}>Username</p>
        </StyledGreyCard>
    )
}
export default HomeUser