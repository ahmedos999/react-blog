import {useParams} from "react-router-dom"
import useFetch from "./use_fetch";
import { useHistory } from "react-router-dom";
const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog,error,ispending} = useFetch('http://localhost:8000/blogs/'+id);
    const History = useHistory();

    const HandleClick = ()=>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method:'DELETE'
        }).then(()=>{
            History.push('/')
        })
    }
    return (
        <div className="blog-details">
            {ispending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={HandleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;