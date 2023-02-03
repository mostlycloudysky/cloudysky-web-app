import React, {useEffect, useState} from 'react'

function Toptracks() {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/top-tracks')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No Data to load</p>

  console.log(data.tracks)
  return (
    <div>
      <h1>test</h1>
    </div>
  )
}

export default Toptracks
