import React from "react";

const Filters = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: ev.target.id,
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          className="form__input-text"
          type="text"
          name="name"
          placeholder="Ric"
          id="name"
          onChange={handleChange}
        />
        <input
          className="form__input-text"
          type="text"
          name="location"
          placeholder="localizacion"
          id="location"
          onChange={handleChange}
        />
      </form>
    </section>
  );
};

export default Filters;
