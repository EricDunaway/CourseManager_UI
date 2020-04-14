import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

const addCourse = (handleClose, title, capacity, setState) => async () => {

    if (title) {
        capacity = isNaN(+capacity) ? 0 : Math.max(Math.min(+capacity, 150),0);
        // eslint-disable-next-line no-undef
        await add_course(title, capacity);
        // eslint-disable-next-line no-undef
        const courses = await get_courses();
        setState({ courses });
        handleClose();
    }


}

export default ({ open, handleClose, setState }) => {

    const [title, setTitle] = useState("");
    const [capacity, setCapacity] = useState(0);
    useEffect(() => { setTitle(""); setCapacity(0); }, [open])

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add Course</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To add a course fill out the title and capacity.
          </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Course Title"
                    type="text"
                    fullWidth
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <TextField
                    margin="dense"
                    id="name"
                    label="Capacity"
                    type="number"
                    fullWidth
                    value={capacity}
                    onChange={(event) => setCapacity(event.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
          </Button>
                <Button onClick={addCourse(handleClose, title, capacity, setState)} color="primary">
                    Add Course
          </Button>
            </DialogActions>
        </Dialog>
    )
};