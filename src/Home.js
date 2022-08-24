import Bloglist from './Bloglist';
import Loading from './loading';
import useFetch from './useFetch';

const Home = () => {
  const { data:blogs,isPending,error}= useFetch("https://mocki.io/v1/6915132f-b368-42da-8dfe-ed813421b3ab")

    return (
        <div className="home">
            {error && <div className='err'><img src='/image/err=-404.png' alt='failed to fetch'/></div>}
            {isPending && <Loading/>}
           {blogs && <Bloglist blogs={blogs} title="All Blogs!" />}
        </div>
    );
}
 
export default Home;