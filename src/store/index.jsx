import { configureStore } from '@reduxjs/toolkit'
import userNameSlice  from './slice/userName.slice'



export default configureStore({
    reducer: {
        userName:userNameSlice
    }
})
