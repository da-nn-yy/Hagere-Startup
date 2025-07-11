import React from 'react'

const page = async ({params}:{params: Promise<{id: string}>}) => {
    const id = (await params).id
  return (
    <div>The startup id is : {id}</div>
  )
}

export default page
