import React, { useState } from 'react';


function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    batch: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, 
        [e.target.name]: e.target.value 
    });
  };
  console.log("handle");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://gym-website-mrho.onrender.com/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.error); 
      }
      // alert(result.message);
    }
     catch (error) {
      console.error(error);
      alert("catch");
      alert(error);
      alert('Error enrolling userrrrrrrr.');
    }
   
  };

  return (
    <div className="App">
      <h1>Yoga Enrollment Form</h1>
      <form onSubmit={handleSubmit} className='option'>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} required />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" onChange={handleChange} required />
        </label>
        <br />
        <label>
          Batch:
          <select name="batch" onChange={handleChange} required>
            <option value="">Select Batch</option>
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
        </label>
        <br />
        <button type="submit">Enroll</button>
      </form>
    </div>
  );
}

export default App;