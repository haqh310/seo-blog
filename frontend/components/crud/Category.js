import React, { useEffect, useState } from "react";
import { getCookie } from "../../actions/auth";
import { create, getCategories, removeCategory } from "../../actions/category";

const Category = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState([]);
  const [removed, setRemoved] = useState(false);
  const [reload, setReload] = useState(false);

  const token = getCookie("token");

  useEffect(() => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  }, [reload]);

  const handleMouseMove = () => {
    setError(false);
    setRemoved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    create({ name }, token).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setName("");
        setError(false);
        setReload(!reload);
      }
    });
  };

  const showCategories = () => {
    return (
      <React.Fragment>
        <h5 className="mt-4">List Categories</h5>
        <hr className="mt-0"/>
        {categories.map((c, i) => (
          <button
            onDoubleClick={() => confirmDelete(c.slug)}
            title="Double click to delete"
            key={i}
            className="btn btn-outline-primary mr-1 ml-1"
          >
            {c.name}
          </button>
        ))}
      </React.Fragment>
    );
  };

  const categoryForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-muted">Category Name</label>
          <input
            type={"text"}
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    );
  };

  const confirmDelete = (slug) => {
    let answer = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (answer) {
      deleteCategory(slug);
    }
  };

  const deleteCategory = (slug) => {
    removeCategory(slug, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setRemoved(!removed);
        setReload(!reload);
      }
    });
  };

  const showError = () => {
    if (error) {
      return <p className="text-danger">Category already exist</p>;
    }
  };

  const showRemoved = () => {
    if (removed) {
      return <p className="text-danger">Category is removed</p>;
    }
  };

  return (
    <React.Fragment>
      {showError()}
      {showRemoved()}
      <div onMouseMove={handleMouseMove}>
        {categoryForm()}
        {showCategories()}
      </div>
    </React.Fragment>
  );
};

export default Category;
