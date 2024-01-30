import { v4 } from "uuid";
export const Input = ({setTodos, todos}) => {
    let id = 0 ;
    const handleKey = (event) => {
        if(event.keyCode === 13){
            let todo = {
                title : event.target.value,
                id : v4()
            }
            event.target.value = null
            setTodos(( todos ) => [...todos , todo ] )
            window.localStorage.setItem("todos", JSON.stringify([...todos, todo]))
        }
    }
    return(
        <>  
            <div className="w-50 mx-auto" style={{userSelect:"none" , marginTop:'15rem'}}>
            <input  autoFocus={true} onKeyUp={handleKey} className="w-50 form-control mx-auto shadow" type="text" placeholder="Create Todo"  style={{ userSelect:"none" , padding:"0.8rem"}}/>
            </div>
        </>
    )
}