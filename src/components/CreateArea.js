import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [load, setLoad] = useState(false);
  console.log(load);

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(e) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  }

  function handleFocus() {
    setLoad(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleClick}>
        {load && (
          <input
            onChange={handleChange}
            autoComplete="off"
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <input type="submit" style={{ display: "none" }}></input>
        <textarea
          onChange={handleChange}
          onFocus={handleFocus}
          autoComplete="off"
          name="content"
          placeholder="Take a note..."
          rows={load ? "3" : "1"}
          value={note.content}
        />

        <Zoom in={load}>
          <Fab
            onClick={handleClick}
            style={{ display: load ? "block" : "none" }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
