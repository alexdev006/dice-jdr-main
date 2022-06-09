import React, { useState } from 'react';

const Test22 = () => {
  const initialValues = {
    company: '',
    position: '',
    link: '',
    date: '',
    note: '',
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log('name>>>>>>', name);
    console.log('value>>>>', value);
  };

  return (
    <span>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'solid 1px red',
          height: '20em',
        }}
      >
        <label htmlFor="company">Company</label>
        <input
          value={values.company}
          onChange={handleInputChange}
          name="company"
          label="Company"
        />
        <label htmlFor="position">Job title</label>
        <input
          value={values.position}
          onChange={handleInputChange}
          name="position"
          label="Job Title"
        />
        <button type="submit"> Submit </button>
      </form>
    </span>
  );
};

export default Test22;
