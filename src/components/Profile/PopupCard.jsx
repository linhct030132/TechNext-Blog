import React from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    width: "350px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
  },
};

Modal.setAppElement("#root");
const PopupCard = ({
    modalIsOpen,
    closeModal,
    post
  }) => {
const {title, body} = post;
    function afterOpenModal() {}
    const onSubmit = (e) => {
      e.preventDefault();
      const formData = {
        title: e.target.title.value,
        description: e.target.body.value,
      };
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify(formData),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => closeModal());
    };
    return (
        <div>
            <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="">
          <form className="" onSubmit={(e) => onSubmit(e)}>
            <div className="my-3">
              <input
                className="form-control"
                type="text"
                placeholder="Note Title..."
                name="title"
                defaultValue={title}
              />
            </div>
            <div className="my-3">
              <textarea
                className="form-control "
                placeholder="Type Here..."
                name="body"
                rows="8"
                defaultValue={body}

              />
            </div>
            <input className="btn btn-success" type="submit" value="Update" />
          </form>
        </div>
      </Modal> 
        </div>
    );
};

export default PopupCard;