import { useEffect, useState } from "react"
import Post from "../../components/post"
import RegularText from "../../components/styled/RegularText"
const PostScreen = () => {

    const [posts, setPosts] = useState([])

    const getPosts =() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>{
            setPosts(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getPosts()
    }, [])

    return(
        <div style={{ 
        }}>
            {posts.map(post => <Post body={post.body} /> )}
        </div>
    )
}
export default PostScreen