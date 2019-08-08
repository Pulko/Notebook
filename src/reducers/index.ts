import { Store, Note, NoteAction, initialState } from "../types";
import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from "../constants";


export function reducer(state: Store = initialState, action: NoteAction) {
    switch (action.type) {
        case ADD_NOTE:
            return {
                notes: [
                    ...state.notes, 
                    action.note
                ]
            }
        case EDIT_NOTE:
            return {
                notes: [
                    ...state.notes.filter( (n: Note) => n.id !== action.note.id),
                    action.note
                ]
            }
        case DELETE_NOTE:
            return {
                ...state,
                notes: [
                    ...state.notes.filter( (n: Note) => n.id !== action.id)
                ]
            }
    }
    return state;
}

  
