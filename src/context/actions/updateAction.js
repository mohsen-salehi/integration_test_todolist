export const updateAction = (data , dispatch) => {
    dispatch({type: "UPDATE_TASK" , payload : data})
}