import React, { Component } from 'react';
import { Note, Tag } from "../types";
import './styles/Form.css';


export interface AddNoteProps {
    addNote: (note: Note) => void;
    notes: Array<Note>;
}

export interface AddNoteState {
    id: number;
    heading: string;
    text: string;
    tag: Tag
}

class AddNoteForm extends Component<AddNoteProps, AddNoteState> {
    constructor(props: AddNoteProps) {
        super(props);
        this.state = {
            heading: "",
            text: "",
            tag: "No tag",
            id: NaN
        }
    }

    submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {text, heading, tag} = this.state;
        const noteObj: Note = {
            text,
            heading,
            tag,
            id: parseInt(Math.random().toString(16).slice(-4)) 
        };
        if (text || heading) {
            this.props.addNote(noteObj);
            this.setState(
                {
                    heading: "",
                    text: "",
                    tag: "No tag",
                }
            )
        }
    }

    onHeadingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(
            {
                heading: e.target.value
            }
        )
    }

    onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(
            {
                text: e.target.value
            }
        )
    }

    onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState(
            {
                tag: e.target.value as Tag
            }
        )
    }

    render() {
        return (
            <div className="form-wrapper">
                <form id="noteForm" onSubmit={this.submitHandler}>
                    <input type="text" className={"input"} value={this.state.heading} onChange={this.onHeadingChange} placeholder={"Heading"}/>
                    <input type="text" className={"input"} value={this.state.text} onChange={this.onTextChange} placeholder={"Text"}/>
                    <select form="noteForm" className={"input"} onChange={this.onSelectChange} value={this.state.tag}>
                        <option value="">No tag</option>
                        <option value="Work">Work</option>
                        <option value="Health">Health</option>
                        <option value="Relax">Relax</option>
                    </select>
                    <input className={"input-btn"} type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default AddNoteForm;