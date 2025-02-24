import React, { useState } from 'react'
import jobsServices from '../services/jobsServices'

function AddJob({ setJobs }) {
  const [role, setRole] = useState('')
  const [company, setCompany] = useState('')
  const [remote, setRemote] = useState('')
  const [salary, setSalary] = useState('')
  const [location, setLocation] = useState('')

  function randomId() {
    return Math.floor(Math.random() * (200 - 4) + 4).toString()
  }

  function addJob(e) {
    e.preventDefault()
    const job = {
      id: randomId(),
      role: role,
      company: company,
      remote: remote,
      salary: salary,
      location: location,
    }
    jobsServices
      .create(job)
      .then((response) => {
        console.log(response)
        setJobs((prevJobs) => [...prevJobs, response])
        setRole('')
        setCompany('')
        setRemote('')
        setSalary('')
        setLocation('')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className='form'>
      <h1 class='form-title'>Add a Job</h1>
      <form onSubmit={addJob}>
        <input
          className='input'
          name='role'
          value={role}
          placeholder='Job Role'
          onChange={(e) => setRole(e.target.value)}
        />
        <input
          className='input'
          name='company'
          value={company}
          placeholder='Add Company'
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          className='input'
          name='remote'
          value={remote}
          placeholder='Remote'
          onChange={(e) => setRemote(e.target.value)}
        />
        <input
          className='input'
          name='Salary'
          value={salary}
          placeholder='Salary'
          onChange={(e) => setSalary(e.target.value)}
        />
        <input
          className='input'
          name='location'
          value={location}
          placeholder='Location'
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className='form-btn' type='submit'>
          Add Job
        </button>
      </form>
    </div>
  )
}

export default AddJob
