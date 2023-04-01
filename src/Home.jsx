import Alert1 from './Alert1';
import Bloglist from './Bloglist';
import Faq from './Faq';
import Loading from './loading';
import useFetch from './useFetch';
import { useEffect, useState } from 'react';


const Home = () => {
  const [Alert, setAlert] = useState(true)
  
  const { data:blogs,isPending,error}= useFetch("https://my-json-server.typicode.com/nicxd531/jsonS/blogs")
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false)
    }, 5000);

    // Cleanup function to clear the timer if the component is unmounted or re-rendered before the timer expires
    return () => clearTimeout(timer);
  }, [])
  
    return (
        <div className="home">
          {Alert && <Alert1/>}
          {error && <div className='err'><img src='/image/err404.png' alt='failed'/></div>}
          {isPending && <Loading/>}
          {blogs && <Bloglist blogs={blogs} title="All Blogs!" />}
          <Faq/>
        </div>
    );
}
 
export default Home;