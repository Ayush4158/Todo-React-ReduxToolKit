import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 ">
      <input
        type="text"
        className=" outline-none w-[71%] text-white bg-[#1E5128] rounded-3xl py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-[#1E5128] py-2 px-5 focus:outline-none hover:bg-[#1a4629] rounded-full text-lg"
      >
        Add
      </button>
    </form>
  )
}

export default AddTodo