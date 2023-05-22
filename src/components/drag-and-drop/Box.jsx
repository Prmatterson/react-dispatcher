import { memo } from 'react';
const styles = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  cursor: 'move',
};
export const Box = memo(function Box({
  workOrderNumber,
  customerName,
  jobDescription,
  preview,
  ...stylingProps
}) {
  const backgroundColor = 'white';
  return (
    <div
      style={{ ...styles, ...stylingProps, backgroundColor }}
      role={preview ? 'BoxPreview' : 'Box'}>
      {workOrderNumber} -- {customerName} 
      <br></br>
      {jobDescription}
    </div>
  );
});
