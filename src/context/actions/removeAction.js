export const removeAction = (data , dispatch) => {
    dispatch({type : "REMOVE_TASK" , payload : data})
};
