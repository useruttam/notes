import React, { useState } from "react";
import './App.css';
import pic from "./images/loginph.png";
import data from "./mock.json"
//Bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
         const [records,setRecords]=useState(data);

  return (
    <div className="app container p-5">
    
    <button id="fk" type="button" class="btn btn-primary" onClick="#" >back</button>
    
    <h2>Patient Record History</h2>
    <br/>
    <center>
    <img src={pic}/>
    <br/>
    <center>
    <button id="fks" type="button" class="btn btn-secondary" onClick="#" >Username</button>
   </center>
    </center>
     <div className="app-container">
     <table>
     <thead>
      <tr>
      <th>Date</th>
      <th>Doctor Name</th>
      <th>Diagnosis</th>
      <th>Prescription</th>
      </tr>
      </thead>
      <tbody>
      {records.map((record)=>( <tr>
        <td>{record.Date_today}</td>
        <td>{record.DoctorsName}</td>
        <td>{record.DIagnosis_tested}</td>
        <td> <a href="{record.Prescription_given}">See Prescription</a></td>
        </tr>
        ))}
     
      </tbody>

     </table>
     </div>

    
       </div>
  );
}
