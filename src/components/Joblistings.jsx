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
          job.role.toLowerCase().includes(jobFilterText.toLowerCase())
        )

  return (
    <div>
      <ul>
        <input
          name='filter'
          value={jobFilterText}
          placeholder='Filter Jobs'
          onChange={(e) => setJobfilTerText(e.target.value)}
        />
        {jobsToShow.map((job) => (
          <li key={job.id}>
            {job.role}
            {job.company}
            {job.remote}
            {job.salary}
            {job.location}
            <button onClick={() => deleteJob(job.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Joblistings
