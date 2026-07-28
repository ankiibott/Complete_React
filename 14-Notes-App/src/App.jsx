import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    if (!title.trim() && !details.trim()) return

    const copyTask = [...task];

    copyTask.push({ title, details })

    setTask(copyTask)

    setTitle('')
    setDetails('')
  }


  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1)

    setTask(copyTask)
  }

  return (
    <div className='min-h-screen lg:flex bg-black text-white'>

      <form onSubmit={submitHandler} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>

        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>

        {/* HEADING INPUT */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 border-gray-700 bg-gray-900 text-white placeholder-gray-500 outline-none focus:border-white rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        {/* DETAILS TEXTAREA */}
        <textarea
          placeholder='Write Details here'
          className='px-5 w-full font-medium h-32 py-2 border-2 border-gray-700 bg-gray-900 text-white placeholder-gray-500 outline-none focus:border-white rounded resize-none'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              submitHandler(e)
            }
          }}
        />

        <button
          type='submit'
          className='bg-white active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded cursor-pointer hover:bg-gray-200 transition-all'
        >
          Add Note
        </button>

      </form>
      <div className='lg:w-1/2 lg:border-l-2 border-gray-800 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {task.map(function (elem, idx) {

            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div className='w-full overflow-hidden'>
                <h3 className='leading-tight text-lg font-bold break-words'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-700 break-words whitespace-pre-wrap'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 hover:bg-red-600 py-1 text-xs rounded font-bold text-white transition-colors'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App  