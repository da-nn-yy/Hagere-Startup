import React from 'react'

const  page = async ({params }: {params:{id: string}}) => {
    const id = (await params).id
  return (
    <>
        <h1 className='text-3xl'>This is is a startup page number {id}</h1>
    </>
  )
}

export default page
