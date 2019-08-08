import { Store, Note } from "../types";
import { connect } from 'react-redux';
import  { addNote } from "../actions";
import AddNoteForm from "../components/AddNoteForm";


export default connect(
    (state: Store) => ({
      notes: state.notes
    }),
  (dispatch) => ({
      addNote: (note: Note) => dispatch(addNote(note))  
  })
  )(AddNoteForm)