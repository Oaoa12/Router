import React, { useState } from 'react';
import '../NoteBook.css';

const Notebook = () => {
    const [notes, setNotes] = useState([]);
    const [noteInput, setNoteInput] = useState('');

    const handleAddNote = () => {
        
        if (noteInput.trim()) {
            setNotes([...notes, noteInput.trim()]); 
            setNoteInput(''); 
        }
    };

    const handleDeleteNote = (index) => {
        const newNotes = notes.filter((_, i) => i !== index);
        setNotes(newNotes);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddNote();
        }
    };

    return (
        <div className="notebook-container">
            <h1>Notebook</h1>
            <input
                type="text"
                value={noteInput}
                onChange={(e) => setNoteInput(e.target.value)}
                onKeyPress={handleKeyPress} 
                placeholder="Add a new note..."
            />
            <button onClick={handleAddNote}>Add Note</button>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>
                        {note}
                        <button onClick={() => handleDeleteNote(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notebook;