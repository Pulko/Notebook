import React, { Component, CSSProperties } from 'react';
import { Note, Tag } from "../types";
import './styles/Note.css';


export interface NoteProps {
    note: Note;
    onEdit: ( note: Note ) => void;
    onDelete: ( id: number ) => void;
}

export interface NoteState {
    editMode: boolean;
    expandedMode: boolean;
    editText: string;
    editHeading: string;
    editTag: Tag;
}

class NoteComponent extends Component<NoteProps, NoteState> {
    constructor(props: NoteProps) {
        super(props);
        this.state = {
            editMode: false,
            expandedMode: false,
            editHeading: "",
            editTag: "No tag",
            editText: ""
        }
    }

    onNoteClick = () => {
        this.setState(
            {
                expandedMode: !this.state.expandedMode,
                editMode: false
            }
        )
    }

    get renderContent() {
        const text = this.props.note.text;
        return (
            <div>
                {text ? <div className={"note-text"}>{text}</div> : null}
                <div className={"note-controls"}>
                    <button value={"Edit"} onClick={this.onEditHandler}>Edit</button>
                    <button value={"Delete"} onClick={this.onDeleteHandler}>Delete</button>
                </div>
            </div>
        )
    }

    onHeadingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(
            {
                editHeading: e.target.value
            }
        )
    }

    onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(
            {
                editText: e.target.value
            }
        )
    }

    onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState(
            {
                editTag: e.target.value as Tag
            }
        )
    }

    onSubmitEditing = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {editHeading, editText, editTag} = this.state;
        const noteObj: Note = {
            text: editText,
            heading: editHeading,
            tag: editTag,
            id: this.props.note.id 
        };
        this.props.onEdit(noteObj);
        this.setState(
            {
                editMode: false,
                expandedMode: false,
                editHeading: "",
                editTag: "No tag",
                editText: ""
            }
        )
    }

    get renderEditForm() {
        return (
            <form onSubmit={this.onSubmitEditing}>
                <input type="text" value={this.state.editHeading} placeholder={"heading..."} onChange={this.onHeadingChange} />
                <input type="text" value={this.state.editText} placeholder={"text..."} onChange={this.onTextChange} />
                <select form="noteForm" onChange={this.onSelectChange} value={this.state.editTag}>
                    <option value="">No tag</option>
                    <option value="Work">Work</option>
                    <option value="Health">Health</option>
                    <option value="Relax">Relax</option>
                </select>
                <input type="submit" value="Edit"/>
            </form>
        )
    }

    onEditHandler = () => {
        this.setState(
            {
            editMode: true,
            editText: this.props.note.text,
            editHeading: this.props.note.heading,
            editTag: this.props.note.tag
            }
        )
    }

    onDeleteHandler = () => {
        this.props.onDelete(this.props.note.id);
    }

    tagStyle(tag: Tag): CSSProperties {
        switch(tag) {
            case "No tag":
                return {background: "white"};
            case "Work":
                return {background: "brown"};
            case "Health":
                return {background: "green"};
            case "Relax":
                return {background: "purple"};
        }
    }

    render() {
        const {id, heading, tag} = this.props.note;
        return (
            <div className={"note-wrapper"}>
            <div className={"note-items-wrapper"} key={id}>
                <div className={"note-heading"}>{heading}</div>
                <span onClick={this.onNoteClick} style={{color: "rgba(0,0,0,0.7)", fontSize: "20px", cursor: "pointer"}}>{this.state.expandedMode ? "︿" : "﹀"}</span>
                <span className={"note-tag"} style={this.tagStyle(tag)}>{tag}</span>
            </div>
            {
                    this.state.expandedMode 
                    ? this.renderContent
                    : null
                }
            {
                this.state.editMode 
                ? this.renderEditForm
                : null
            }
            </div>
        )
    }
}

export default NoteComponent;