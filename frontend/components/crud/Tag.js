import React, { useEffect, useState } from "react";
import { getCookie } from "../../actions/auth";
import { create, getTags, removeTag } from "../../actions/tag";

const Tag = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [tags, setTags] = useState([]);
  const [removed, setRemoved] = useState(false);
  const [reload, setReload] = useState(false);

  const token = getCookie('token')

  useEffect(() => {
    getTags().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setTags(data);
      }
    });
  }, [reload]);

  const tagForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-muted">Tag Name</label>
          <input
            type={"text"}
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
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

  const handleSubmit = (e) => {
    e.preventDefault();

    create({name}, token).then(data => {
        if(data.error) {
            setError(data.error)
        } else {
            setName("")
            setError(false);
            setReload(!reload);
        }
    })
  };

  const showTags = () => {
    return (
      <React.Fragment>
        <h5 className="mt-4">List Tags</h5>
        <hr className="mt-0" />
        {tags.map((t, i) => (
          <button
            onDoubleClick={() => confirmDelete(t.slug)}
            title="Double click to delete"
            key={i}
            className="btn btn-outline-primary mr-1 ml-1"
          >
            {t.name}
          </button>
        ))}
      </React.Fragment>
    );
  };

  const confirmDelete = (slug) => {
    let answer = window.confirm('"Are you sure you want to delete this tag?"')

    if(answer) {
        deleteTag(slug, token)
    }
  };

  const deleteTag = slug => {
    removeTag(slug, token).then(data => {
        if(data.error) {
            console.log(data.error);
        } else {
            setRemoved(!removed);
            setReload(!reload);
        }
    })
  }

  const showError = () => {
    if (error) {
      return <p className="text-danger">Tag already exist</p>;
    }
  };

  const showRemoved = () => {
    if (removed) {
      return <p className="text-danger">Tag is removed</p>;
    }
  };

  const handleMouseMove = () => {
    setError(false);
    setRemoved(false);
  };

  return (
    <React.Fragment>
      {showError()}
      {showRemoved()}
      <div onMouseMove={handleMouseMove}>
        {tagForm()}
        {showTags()}
      </div>
    </React.Fragment>
  );
};

export default Tag;
