
import BlogList from "./blog_list";
import useFetch from "./use_fetch";

const Home = () => {
    const {data, isPending,error} = useFetch('http://localhost:8000/blogs')
   

    // const Delete = (id) =>{
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlog(newBlogs);
    // }
    
    
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <BlogList blogs={data} title = "All blogs"></BlogList>}
        </div>
        
     );
}
 
export default Home;