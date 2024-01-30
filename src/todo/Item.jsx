export const Item = ({ text, todos, id, setTodos, read, setRead }) => {
    const handleClick = (event) => {
        switch (event.target.id) {
            case "delete": {
                let filter = todos.filter(item => item.id !== id)
                setTodos(filter)
                window.localStorage.setItem("todos", JSON.stringify(filter))
            }break ;
            case "edit" : {
                setRead(!read)
                
            }break;
            
            

        }
    }
    const handleKey = (event) => {
        if(event.keyCode === 13 && event.target.value.length){
            let idx = todos.findIndex(item => item.id === id)
            todos[idx].title = event.target.value 
            window.localStorage.setItem("todos", JSON.stringify(todos))
            setRead(true)
        }
    }
    return (

        <>
            <li className="d-flex align-items-center justify-content-between text-light text-center mt-2 bg-dark rounded" style={{ userSelect: "none", fontSize: "23px", margin: "1rem  0rem", padding: "0.4rem" }}>
                <input onKeyUp={handleKey} readOnly={read} defaultValue={text} className="text-light text-center" type="text" style={{ userSelect: "none", width: "60%", border: "1px solid transparent", outline: "1px solid transparent", background: "transparent" }} />
                <div className="d-flex align-items-center justify-content-between">
                    <button onClick={handleClick} id="edit" className="btn btn-success">Edit</button>
                    <button id="delete" onClick={handleClick} className="btn btn-danger mx-2">Delete</button>
                </div>
            </li>
        </>
    )
}