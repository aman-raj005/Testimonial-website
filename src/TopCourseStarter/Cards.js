import Card from './Card';
import './Styli.css';

const Cards = ({ Courses }) => {
  const getCourses = () => {
    let allCourses = [];
    Object.values(Courses).forEach((courseCategory) => {
      courseCategory.forEach((Course) => {
        allCourses.push(Course);
      });
    });
    return allCourses;
  }

  return (
    <div>
      {getCourses().map((Course, index) => (
        <Card key={Course.id} Course={Course} />
      ))}
    </div>
  );
}

export default Cards;
