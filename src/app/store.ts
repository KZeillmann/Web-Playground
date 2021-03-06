import { configureStore } from "@reduxjs/toolkit";
import { type } from "os";


export const store = configureStore({
    reducer: {
        
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
