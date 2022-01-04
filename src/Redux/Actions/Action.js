

export const makeFavorite = musicList => {
    return { 
        type: "MAKE_FAVORITE",
        payload: musicList
    }
    
} 



export const addData = data => {
    return { 
        type: "ADD_DATA",
        payload: data
    }
    
} 