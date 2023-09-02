export const todoAction = (data , dispatch) => {
    dispatch({type : "ADD_TASK" , payload : data }) 
}