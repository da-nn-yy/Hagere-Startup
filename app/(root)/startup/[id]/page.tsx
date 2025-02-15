import React from 'react'

async function Page({params}: {params: Promise<{id: string}>}) {
    const id = (await params).id
  return (
    <>
        <h1 className="text-3xl">Page number of this startup page is: {id} </h1>
    </>
  )
}

export default Page;
