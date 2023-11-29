import React, { useEffect } from 'react'

function Home() {
    const[todos, settodos] = useState([ ])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
        .then(result => settodos(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
        axios.get('http://localhost:3001/update/'+id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.get('http://localhost:3001/delete/'+id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }
  return (
    <div>
      <h2>ToDo list</h2>
      <create/>
      <br></br>
      {
        todos.length === 0 ?
        <div><h2>No Record</h2></div>
        :
        todos.map(todo => (
            <div className='task'>
                <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                    todo.done ? {<BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill>}
                   : <BsCirclefill className='icon'/>
                   <p className={todo.done ? "line_through" : ""}>{todo.task}</p>

                </div>
                <div>
                    <span><BsFilltrashFill className='icon' onClick={()=>handleDelete(todo._id)}/></span>
                </div>
                
            </div>
        ))
      }
    </div>
  )
}

export default Home
