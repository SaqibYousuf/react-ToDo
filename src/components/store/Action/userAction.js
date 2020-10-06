export function addUser(payload){
    return{
        type:"Add",
        payload
    }
}
export function deleteUser(payload){
    return{
        type:"Delete",
        payload
    }
}
export function updateUser(payload){
    return{
        type:"Update",
        payload
    }
}
export function getUser(payload){
    return{
        type:"getUser",
        payload
    }
}


