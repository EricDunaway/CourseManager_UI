import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import CourseCard from '../../components/CourseCard';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import CourseDialog from './CourseDialog';

const fetchCourses = (setState) => async () => {
  // eslint-disable-next-line no-undef
  let courses = await get_courses();
  setState({ courses });
}

const useStyles = makeStyles((theme) => ({
  fab_pos: {
    position: 'absolute',
    bottom: '1.5rem',
    right: '1.5rem',
  },
}));

export default function SimpleContainer() {
  const styles = useStyles();
  const [state, setState] = useState({ courses: [] })
  const [open, setOpen] = useState(false);
  const { courses } = state;
  useEffect(fetchCourses(setState), []);

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <Container maxWidth="xs">
      {courses.map(e => <CourseCard course={e} />)}
      <div className={styles.fab_pos}>
        <Fab color="primary" aria-label="add" onClick={()=>setOpen(true)}>
          <AddIcon />
        </Fab>
      </div>
      <CourseDialog open={open} handleClose={handleClose} setState={setState} />
    </Container>
  );
}
