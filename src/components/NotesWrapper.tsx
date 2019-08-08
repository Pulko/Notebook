import React, { Component } from 'react';
import { Note, Tag } from '../types';
import './styles/Wrapper.css';
import NoteComponent from './Note';

export interface NotesWrapperProps {
    notes: Array<Note>;
    editNote: (n: Note) => void;
    deleteNote: (id: number) => void;
}

export interface NotesWrapperState {
    filterString: string;
    filterLabel: Tag | string;
}

class NotesWrapper extends Component<NotesWrapperProps, NotesWrapperState> {
    constructor(props: NotesWrapperProps) {
        super(props);
        this.state = {
            filterString: "",
            filterLabel: ""
        }
    }

    labelClickHadler = (val: Tag | undefined) => {
        if (typeof val === "undefined") {
            this.setState({
                filterLabel: ""
            })
        } else {
            this.setState({
                filterLabel: val
            })
        }
    }

    filterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(
            {
                filterString: e.target.value
            }
        )
    }

    render() {
        const filter = this.state.filterString
        const notes: Array<JSX.Element> = this.props.notes.length
        ? this.props.notes.filter(
            (note: Note) => {
                return this.state.filterLabel ? note.tag === this.state.filterLabel : true;
            }
        ).filter(
            (note: Note) => {
                if (filter) {
                    return note.heading.indexOf(filter) > -1 ||
                        note.text.indexOf(filter) > -1;
                } else {
                    return true;
                }
            }
        ).map(
            (note: Note) => {
                return <NoteComponent note={note}
                                      key={`note_${note.id}`}
                                      onEdit={this.props.editNote} 
                                      onDelete={this.props.deleteNote}/>
                }
            )
        : [];
        return (
            <div>
                <input type="text" className={"search"} placeholder="search..." value={this.state.filterString} onChange={this.filterChange}/>
                <button key={"no"} type="button" value="No tag" onClick={() => this.labelClickHadler("No tag")}>No Tag</button>
                <button key={"work"} type="button" value="Work" onClick={() => this.labelClickHadler("Work")}>Work</button>
                <button key={"health"} type="button" value="Health" onClick={() => this.labelClickHadler("Health")}>Health</button>
                <button key={"relax"} type="button" value="Relax" onClick={() => this.labelClickHadler("Relax")}>Relax</button>
                <button key={"all"} type="button" value="All" onClick={() => this.labelClickHadler(undefined)}>All</button>
            
                <div className={"notes-wrapper"}>
                    {notes.length ? notes : <span>No data</span>}
                </div>
            </div>
        );
    }
}

export default NotesWrapper;