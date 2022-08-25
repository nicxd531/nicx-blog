import Bloglist from './Bloglist';
import Loading from './loading';
import useFetch from './useFetch';

const Home = () => {
  const { data:blogs,isPending,error}= useFetch(" http://localhost:7001/blogs")

    return (
        <div className="home">
            {error && <div className='err'><img src='/image/err=-404.png' alt='failed'/></div>}
            {isPending && <Loading/>}
           {blogs && <Bloglist blogs={blogs} title="All Blogs!" />}
        </div>
    );
}
 
export default Home;