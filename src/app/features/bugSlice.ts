import { createSlice } from "@reduxjs/toolkit";

// Define a Bug type
type Bug = {
    id: number;
    description: string;
    owner: string;
    status: string;
    component?: string;
    priority: string;
    stage?:string;
    image?: File;
    resolved:boolean;
  };
  const initialState: Bug[] = [];


  
  // Action types
  type Action =
    | { type: "bugAdded"; payload: { description: string, owner:string, status:string, priority: string} }
    | { type: "bugDeleted"; payload: { id: number } }
    | { type: "bugEdited"; payload: { id: number; description: string, owner:string, priority:string, status:string } };
  
  // Starting ID counter
  let lastId = 0;

const bugsSlice = createSlice({
    name: "bugsSlice",
    initialState,
    reducers: {
        bugAdded: (state, action) => {
            return [
                ...state,
                {
                  id: ++lastId,
                  description: action.payload.description,
                  resolved: false,
                  owner: action.payload.owner,
                  status: action.payload.status,
                  priority: action.payload.priority,
                },
            ];
        },

        bugEdited :(state, action)=>{
            return state.map(bug=>bug.id===action.payload.id?
                    {...bug, description:action.payload.description, owner:action.payload.owner, priority:action.payload.priority}:bug
                )
        },

        deletedBug: (state, action)=>{
            return state.filter(bug => bug.id !== action.payload.id)
            }
    }
  });

export const { bugAdded, bugEdited,deletedBug } = bugsSlice.actions;

export default bugsSlice.reducer;
  