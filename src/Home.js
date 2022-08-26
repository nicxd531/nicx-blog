import Bloglist from './Bloglist';
import Loading from './loading';
import useFetch from './useFetch';

const Home = () => {
  const { data:blogs,isPending,error}= useFetch("https://my-json-server.typicode.com/nicxd531/jsonS/blogs")

    return (
        <div className="home">
            {error && <div className='err'><img src='/image/err404.png' alt='failed'/></div>}
            {isPending && <Loading/>}
           {blogs && <Bloglist blogs={blogs} title="All Blogs!" />}
        </div>
    );
}
 
export default Home;