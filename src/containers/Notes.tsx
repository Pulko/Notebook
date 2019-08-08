import NotesWrapper from '../components/NotesWrapper';
import { Store, Note } from "../types";
import { connect } from 'react-redux';
import  {editNote, deleteNote} from "../actions";


export default connect(
    (state: Store) => ({
      notes: state.notes
    }),
  (dispatch) => ({
      editNote: (note: Note) => dispatch(editNote(note)),
      deleteNote: (id: number) => dispatch(deleteNote(id))
  })
  )(NotesWrapper)