import { useState } from 'react'
import AddJob from './components/AddJob'
import Joblistings from './components/joblistings'
function App() {
  const [count, setCount] = useState(0)
  const [jobs, setJobs] = useState([
    {
      id: 1,
      role: 'Front End Developer',
      company: 'Amazon',
      remote: 'hybrid',
      salary: '100k',
      location: 'boston',
    },
    {
      id: 2,
      role: 'Full-Stack Engineer',
      company: 'Ebay',
      remote: 'remote',
      salary: '80k',
      location: 'philly',
    },
  ])

  return (
    <>
      <AddJob setJobs={setJobs} />
      <Joblistings jobs={jobs} setJobs={setJobs} />
    </>
  )
}

export default App
