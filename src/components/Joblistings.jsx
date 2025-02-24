import React, { useState } from 'react'
import jobsServices from '../services/jobsServices'

function Joblistings({ jobs, setJobs }) {
  const [jobFilterText, setJobfilTerText] = useState('')

  function deleteJob(id) {
    jobsServices
      .remove(id)
      .then((response) => {
        console.log('job has been deleted')
        setJobs(jobs.filter((job) => job.id !== id))
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const jobsToShow =
    jobFilterText === ''
      ? jobs
      : jobs.filter((job) =>
          job.company.toLowerCase().includes(jobFilterText.toLowerCase())
        )

  return (
    <div>
      <input
        className='filter'
        name='filter'
        value={jobFilterText}
        placeholder='Filter Jobs By Company'
        onChange={(e) => setJobfilTerText(e.target.value)}
      />
      <ul className='jobList-grid'>
        {jobsToShow.map((job) => (
          <li className='joblist-card' key={job.id}>
            <h2>{job.role}</h2>
            <p>{job.company}</p>
            <p>{job.remote}</p>
            <p>{job.salary}</p>
            <div className='joblist-card-bottom'>
              <p>{job.location}</p>
              <button
                className='joblist-card-btn'
                onClick={() => deleteJob(job.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Joblistings
