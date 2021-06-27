import React, {useState, useEffect} from 'react'
import axios from 'axios'
function DataFetching2() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1);
    const[idFromButtonClick, setIdFromButtonClick] = useState(1);

   const  handleClick = ()=>{
    setIdFromButtonClick(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(response=>{
            console.log(response)
            setPost(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idFromButtonClick])
    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}></input>
            <button type="button" onClick={ handleClick }> Fetch </button>
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

export default DataFetching2