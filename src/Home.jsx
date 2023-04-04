import Alert1 from './Alert1';
import Bloglist from './Bloglist';
import Faq from './Faq';
import Loading from './loading';
import { useEffect, useState } from 'react';
// useQuery is a hook used to send query to to the graphql sever ,while gql is used to transform the data to useable data
import { useQuery, gql } from '@apollo/client';

const Home = () => {
 
    //use query gets the data from blogs in thesame format from above
    const { loading, error, data } = useQuery(gql`
query GetBlogs {
  blogs{
    data{
      id
      attributes{
        date,
        author,
        title,
        body,
        image,
        categories{
          data{
            attributes{
              name
            }
          }
        }
      }
    }
  }
}`
  );
  
  // alert state that changes the activeness of the login to add blog alert 
  const [Alert, setAlert] = useState(true)
  
  // const { data:blogs,isPending,error}= useFetch("https://nordic-rose-backend-production.up.railway.app/api/blogs")

 
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false)
    }, 8000);
   

    // Cleanup function to clear the timer if the component is unmounted or re-rendered before the timer expires
    return () => {clearTimeout(timer);}
  }, [data])
  
    return (
        <div className="home">
          {Alert && <Alert1/>}
          {error && <div className='err'><img src='/image/err404.png' alt='failed'/></div>}
          {loading && <Loading/>}
          {data && <Bloglist blogs1={data}  title="All Blogs!" />}
          <Faq/>
        </div>
    );
}
 
export default Home;