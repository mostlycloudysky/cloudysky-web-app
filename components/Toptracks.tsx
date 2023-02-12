import React, {useEffect, useState} from 'react'

function Toptracks() {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   fetch('/api/top-tracks')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data)
  //       setLoading(false)
  //     })
  // }, [])

    useEffect(() => {
    setLoading(true)
    fetch('/api/my-playlist')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No Data to load</p>

  const playListData = data.data
  console.log(playListData.name)
  console.log(playListData.owner.display_name)

  return (
    <div>
      <h1>test</h1>
    </div>
  )
}

export default Toptracks
