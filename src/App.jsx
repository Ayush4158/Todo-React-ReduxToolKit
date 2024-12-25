import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <div className='h-screen w-screen bg-[#D8E9A8] flex justify-center '>
      <div id='todoList' className='w-[60%] mt-10 rounded-lg p-10 bg-[#4E9F3D] max-h-[400px] overflow-y-auto ' >
        <div className='rounded-2xl py-2 px-5 flex justify-center w-full'>
          <AddTodo />
        </div>
        <Todos />
      </div>
    </div>
  )
}

export default App