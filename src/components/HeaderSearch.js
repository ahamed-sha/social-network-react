const HeaderSearch = () => {
    return(
        <div style={{
            marginLeft: 40,
        }}>
            <input style={{
                height:45,
                width:250,
                borderRadius:25,
                backgroundColor:"#FFFFFF1A",
                border:"none",
                outline:"none",
                color:"white",
                padding:"0 15px"
            }}
            type="text" placeholder="Enter your search term"/>
            <button style={{
                marginLeft: 10,
                height: 45,
                width:100,
                color:"white",
                fontSize:16,
                borderRadius:25,
                border:"none",
                outline:"none",
                cursor:"pointer",
                backgroundColor: "#F56D91"
            }}>Search</button>
        </div>
    )
}
export default HeaderSearch