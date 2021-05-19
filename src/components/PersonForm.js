import React from "react";

const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.submit}>
        <div>
          name:{" "}
          <input
            id="name"
            value={props.name}
            onChange={props.nameChangeHanldler}
          />
        </div>
        <div>
          number:{" "}
          <input
            id="number"
            value={props.number}
            onChange={props.numberChangeHandler}
          />
        </div>
        <div>
          <button id="submit" type="submit">
            add
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
