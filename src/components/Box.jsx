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

  return (
    <div
      style={{ ...styles, ...stylingProps, backgroundColor: "white"}}
      role={preview ? 'BoxPreview' : 'Box'}>
      {workOrderNumber} -- {customerName} -- {jobDescription}
    </div>
  );
});
