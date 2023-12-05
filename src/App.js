import './App.css';
import { useState } from 'react';
import Table from "./table";

function App() {
  const [inputdata, setInputdata] = useState({ firstname: "", lastname: "", address: "" });
  const [record, setRecord] = useState([]);

  const handleonchange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setInputdata({ ...inputdata, [e.target.name]: e.target.value })
  }

  const handlesubmit = () => {
    setRecord([...record, inputdata]);
    setInputdata({ firstname: "", lastname: "", address: "" });
  }
  return (
    <div className="App">
      <div>
        <label htmlFor='fname'>first Name</label>
        <input type='text' id='fname' name='firstname' value={inputdata.firstname} onChange={(e) => handleonchange(e)} />
      </div>
      <div>
        <label htmlFor='lname'>last Name</label>
        <input type='text' id='lname' name='lastname' value={inputdata.lastname} onChange={(e) => handleonchange(e)} />
      </div>
      <div>
        <label htmlFor='address'>address</label>
        <input type='text' id='age' name='address' value={inputdata.address} onChange={(e) => handleonchange(e)} />
      </div>
      <div>
        <button type='submit' onClick={() => handlesubmit()}>SUBMIT</button>
      </div>
      <div>
        <Table data={record} />
      </div>
    </div>
  );
}

export default App;
