import { useEffect, useState } from 'react'
import AddJob from './components/AddJob'
import Joblistings from './components/joblistings'
import jobsServices from './services/jobsServices'

function App() {
  const [jobs, setJobs] = useState([])

  const hook = () => {
    jobsServices
      .getAll()
      .then((response) => {
        setJobs(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(hook, [])

  return (
    <>
      <AddJob setJobs={setJobs} />
      <Joblistings jobs={jobs} setJobs={setJobs} />
    </>
  )
}

export default App
