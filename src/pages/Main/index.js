import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import CourseCard from '../../components/CourseCard';

const fetchCourses = (setState) => async () => {
  // eslint-disable-next-line no-undef
  let courses = await get_courses();
  setState({ courses });
}

export default function SimpleContainer() {
  const [state, setstate] = useState({ courses: [] })
  const { courses } = state;
  useEffect(fetchCourses(setstate), []);
  return (

    <Container maxWidth="xs">
      {courses.map(e => <CourseCard course={e} />)}
    </Container>
  );
}
