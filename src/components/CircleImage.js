const CircleImage = ({image}) => {
    return(
        <div>
            <img src={image} alt="profile" style={{
                height:40,
                width:40,
                borderRadius:22,
                marginRight:20,
                border: "2px solid green"
            }}/>
        </div>
    )
}
export default CircleImage