import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const valueType = event.target.name;

    setNote((prevValue) => {
      const temp = {
        title: prevValue.title,
        content: prevValue.content
      };
      valueType === "title"
        ? (temp.title = newValue)
        : (temp.content = newValue);
      return temp;
    });
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button
          onClick={(event) => {
            props.added(note);
            event.preventDefault();
            setNote({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
