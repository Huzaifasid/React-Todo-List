
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../Components/todo.css'


const Todo = () => {

  const [inpVal, setinpVal] = useState('');
  const [todoS, settodoS] = useState([]);
  const [eBtn, seteBtn] = useState(true);
  const [eBtnAdd, seteBtnAdd] = useState(null)

  // add todo 


  const addtodo = () => {
    if (!inpVal) {
      alert("Please Enter Some Values")
    } else if (inpVal && !eBtn) {
      settodoS(
        todoS.map((val) => {
          if (val.id === eBtnAdd) {
            return {
              ...val, name: inpVal
            }
          }
          return val

        })
      )
      seteBtn(true);
      setinpVal('')
      seteBtnAdd(null);
    }
    else {

      const allData = { id: new Date().getTime().toString(), name: inpVal }
      settodoS([...todoS, allData]);
      setinpVal('');
    }

  }

  // del todo 


  const delTodo = (ind) => {
    const del = todoS.filter((val) => {
      return ind !== val.id;
    })
    settodoS(del);
  }

  // edit todo 

  const editTodo = (id) => {
    let edit = todoS.find((val) => {
      return val.id === id
    })
    seteBtn(false);
    setinpVal(edit.name)
    seteBtnAdd(id);
  }
  // remove all 
  const remtodo = () => {
    settodoS([]);
  }

  return (<>

    <div className="container col-lg-5 col-md-6 col-sm-12">
      <div>
        <h1 className='text-center'>Todo List</h1>

      </div>
      <div className="row">
        <div className="col">
          <div className='d-flex flex-wrap form-control  justify-content-between'>

            <input className='myInput ' placeholder='Enter Todo...✍ '
              value={inpVal}
              onChange={(e) => setinpVal(e.target.value)}
            />
            <div className='btnDiv'>
              {eBtn ? <i onClick={addtodo} className="fa-solid fa-circle-plus myBtn"></i> : <i onClick={addtodo} className="fa-solid fa-pen-to-square myBtn"></i>}

              <i onClick={remtodo} className="fa-solid fa-trash-can myBtn"></i>
            </div>

          </div>
          <div className='mt-5 text-capitalize text-break'>
            {todoS.map((val) => {
              return (
                <div className='d-flex mt-2 flex-wrap form-control justify-content-between align-items-center' key={val.id}>
                  <h3>{val.name}</h3>
                  <div >

                    <i onClick={() => { delTodo(val.id) }} className="fa-solid fa-trash-can myBtn"></i>
                    <i onClick={() => { editTodo(val.id) }} className="fa-solid fa-pen-to-square myBtn"></i>
                  </div>

                </div>
              )
            })}

          </div>

        </div>

      </div>
   
    </div>




  </>)

}


export default Todo