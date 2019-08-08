import * as constants from "../constants";
import { Note, AddNote, EditNote, DeleteNote } from "../types";

export function addNote(note: Note): AddNote {
    return {
            type: constants.ADD_NOTE,
            note
    }
}

export function editNote(note: Note): EditNote {
    return {
            type: constants.EDIT_NOTE,
            note
    }
}

export function deleteNote(id: number): DeleteNote {
    return {
        type: constants.DELETE_NOTE,
        id
    }
}