import * as constants from "../constants";

// store
export interface Store {
    notes: Array<Note>;
}

// exported types 
export type Tag = "Health" | "Work" | "Relax" | "No tag";


export interface Note {
    id: number;
    heading: string;
    text: string;
    tag: Tag;
}

// initial state
export const initialState: Store = {
    notes: [
        {
            id: 999999999999,
            heading: "finish this app",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            tag: "Work"
        },
        {
            id: 999999999998,
            heading: "finish this app",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            tag: "Health"
        },
        {
            id: 999999999997,
            heading: "finish this app",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            tag: "Relax"
        },
        {
            id: 999999999996,
            heading: "finish this app",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            tag: "No tag"
        }
    ],
}

// actions defining
export interface AddNote {
    type: constants.ADD_NOTE;
    note: Note;
}

export interface EditNote {
    type: constants.EDIT_NOTE;
    note: Note;
}

export interface DeleteNote {
    type: constants.DELETE_NOTE;
    id: number;
}

// summary type for easier actions defining in reducer
export type NoteAction = AddNote | EditNote | DeleteNote;

