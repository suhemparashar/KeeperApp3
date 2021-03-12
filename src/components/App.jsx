import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  console.log(notes);

  function addNotes(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function createNote(note, index) {
    return (
      <Note
        key={index}
        id={index}
        title={note.title}
        content={note.content}
        deleted={deleteNote}
      />
    );
  }

  function deleteNote(id) {
    setNotes(() => {
      return notes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea added={addNotes} />
      {notes.map(createNote)}
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
