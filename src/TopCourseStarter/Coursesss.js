import { useEffect, useState } from 'react';
import Filter from './Filter';
import Cards from './Cards';
import Navbar from './Navbar';
import { filterdata, apiUrl } from './Data';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Styli.css';

const Coursesss = () => {
  const [Courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetching = await fetch(apiUrl);
        const result = await fetching.json();
        setCourses(result.data); // Note: Ensure `result.data` matches the actual structure of your API response
        // console.log(result);
        console.log("Courses value update");
        console.log(Courses);
      } catch (error) {
        toast.error("Wow so easy!");
      }
    }
    fetchData();
  }, []);

  return (
    <div> 
      <Filter filterdata={filterdata} />
      {Courses ? <Cards Courses={Courses} /> : <p></p>}
      <Navbar />
    </div>
  );
};

export default Coursesss;
