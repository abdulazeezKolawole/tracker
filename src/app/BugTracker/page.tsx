"use client";
import store, { RootState } from "../store"
import { Provider, useSelector } from "react-redux"
import Navbar from "../Component/navbar"

export default function BugTracker(){
    // console.subscribe(()=>console.log('Updated state', store.getState()))
    // const bugs = useSelector((state: RootState) => state.bugs)
    
    store.dispatch({
        type: "bugAdded",
        payload: { description: "Bug description", owner: "John", status: "open", priority: "high" },
      });
          return(
        <>
       <Provider store={store}>
       //Side bar
       <Navbar/>
       </Provider>
        </>
    )
}