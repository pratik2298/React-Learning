import React, {useState, useEffect} from 'react'
import axios from 'axios'
function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
            console.log(response)
            setPost(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [id])
    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}></input>
            <div>{post.title}</div>
            {/* <ul>
                {
                    post.map(posts => (
                        <li key={posts.id}>{posts.title}</li>
                    ))
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
