import {createSlice} from "@reduxjs/toolkit"

const themeSlice = createSlice({
    name:"Theme",
    initialState:{
        isLight:true,
        msg:""
    },
    reducers:{
        setIsLight:(StateObj,action)=>{
            StateObj.isLight=!StateObj.isLight;
            StateObj.msg=action.payload

        }
    }
})

export const {setIsLight}=themeSlice.actions;
export default themeSlice.reducer;