import { React, useState } from 'react';
import { Box, Button, Modal } from 'react-bulma-components';
import { useForm } from 'react-hook-form';

export default function NavButtons() {
  // Setting up state/react-hook-form on form data
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch('workOrderNumber')); // watch input value by passing the name of it

  // using state to open/close Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // array of times to populate job length form options
  const jobTime = [];
  for (let time = 0.1; time <= 8.0; time += 0.1) {
    jobTime.push(time.toFixed(1));
  }

  return (
    <>
      {/* Button in NavBar that opens modal */}
      <Box>
        <Button.Group>
          <Button onClick={handleShow}>Add Job</Button>
        </Button.Group>
      </Box>

      {/* Modal itself */}
      <Modal show={show} onClose={handleClose}>
        <Modal.Content backgroundColor='white' showClose={true}>
          <form onSubmit={handleSubmit(onSubmit)} size={2}>
            <label>Work Order Number</label>
            <input {...register('workOrderNumber', { required: true })}></input>
            <label>Customer Name</label>
            <input {...register('customerName', { required: true })}></input>
            <label>Job Description</label>
            <input {...register('jobDescription', { required: true })}></input>
            <label>Job Length</label>
            <select {...register('jobLength', { required: true })}>
              {jobTime.map((timeDetails, index) => {
                return (
                  <option key={index} value={timeDetails}>
                    {timeDetails}
                  </option>
                );
              })}
            </select>
            {errors.exampleRequired && <span>This field is required</span>}
            <br></br>
            <br></br>
            <input
              className='button'
              type='submit'
              renderAs='span'
              value='Create Job'
            />
            <input
              className='button'
              type='button'
              renderAs='span'
              onClick={handleClose}
              value='Cancel'
            />
          </form>
        </Modal.Content>
      </Modal>
      <br></br>
    </>
  );
}
