import React from 'react'

function TaskNum({data}) {
  return (
    <>
    <div className='w-full mt-6 flex gap-7'>
      <div className='w-[30%] px-6 rounded-2xl py-4 bg-red-500'>
      <h1 className='font-semibold text-3xl'>{data.taskNumbers.newTask}</h1>
      <h2 className='font-medium text-2xl'>New Task</h2>
      </div>
      <div className='w-[30%] px-6 rounded-2xl py-4 bg-yellow-500'>
      <h1 className='font-semibold text-3xl'>{data.taskNumbers.completed}</h1>
      <h2 className='font-medium text-2xl'>Completed Task</h2>
      </div>
      <div className='w-[30%] px-6 rounded-2xl py-4 bg-emerald-500 text-green-700'>
      <h1 className='font-semibold text-3xl'>{data.taskNumbers.active}</h1>
      <h2 className='font-medium text-2xl'>Accepted Task</h2>
      </div>
      <div className='w-[30%] px-6 rounded-2xl py-4 bg-cyan-500'>
      <h1 className='font-semibold text-3xl'>{data.taskNumbers.failed}</h1>
      <h2 className='font-medium text-2xl'>Failed Task</h2>
      </div>
      
    </div>
    </>
  )
}

export default TaskNum