import React, { useState } from 'react'

function AddJob({ setJobs }) {
  const [role, setRole] = useState('')
  const [company, setCompany] = useState('')
  const [remote, setRemote] = useState('')
  const [salary, setSalary] = useState('')
  const [location, setLocation] = useState('')

  function randomId() {
    return Math.floor(Math.random() * (200 - 4) + 4)
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
    setJobs((prevJobs) => [...prevJobs, job])
    setRole('')
    setCompany('')
    setRemote('')
    setSalary('')
    setLocation('')
  }

  return (
    <div>
      <h1>Add a Job to the list</h1>
      <form onSubmit={addJob}>
        <input
          name='role'
          value={role}
          placeholder='Job Role'
          onChange={(e) => setRole(e.target.value)}
        />
        <input
          name='company'
          value={company}
          placeholder='Add Company'
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          name='remote'
          value={remote}
          placeholder='Remote'
          onChange={(e) => setRemote(e.target.value)}
        />
        <input
          name='Salary'
          value={salary}
          placeholder='Salary'
          onChange={(e) => setSalary(e.target.value)}
        />
        <input
          name='location'
          value={location}
          placeholder='Location'
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type='submit'>Add Job</button>
      </form>
    </div>
  )
}

export default AddJob
