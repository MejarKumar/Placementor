import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export default function EditModal(props) {
  const [name, setName] = useState(props.data.name);
  const [selected_students, setSelected_students] = useState(
    props.data.selected_students
  );
  const [description, setDescription] = useState(props.data.description);
  const [year, setYear] = useState(props.data.year);
  const [error, setError] = useState(false);
  const [type, setType] = useState(props.data.type);
  const [submitted, setSubmitted] = useState(false);

  //handle type change
  const handleType = (e) => {
    setType(e.target.value);
    console.log(e.target.value);
  };
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
  };

  // Handling the selected_student change
  const handleSelected_students = (e) => {
    setSelected_students(e.target.value);
  };
  // Handling the selected_student change
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  // Handling the selected_student change
  const handleYear = (e) => {
    setYear(e.target.value);
  };

  // Handling the form submission
  const handleSubmit = async function (e) {
    e.preventDefault();
    if (
      type === "" ||
      name === "" ||
      selected_students === "" ||
      description === "" ||
      year === ""
    ) {
      setError(true);
    } else {
      const item = { name, selected_students, description, year };

      const result = await fetch(
        `http://localhost:3000/${type}/update/${props.data._id}`,
        {
          method: "PUT",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(result);
      setName("");
      setSelected_students("");
      setDescription("");
      setYear("");
      setType("");
      setSubmitted(true);
      setError(false);
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
      setError(false);
    }
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        m={2}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {submitted && (
          <Form.Text
            style={{ color: "green" }}
            className="m-2  align-text-center"
          >
            <h3>SuccessFull Submitted</h3>
          </Form.Text>
        )}
        <Form.Text className="text-muted">{error}</Form.Text>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Company
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* ===================form body==================== */}
          <Form>
            <Form.Check
              inline
              name="group1"
              label="Placement"
              value="placement"
              type="radio"
              onChange={handleType}
            />
            <Form.Check
              inline
              name="group1"
              label="Internship"
              value="internship"
              type="radio"
              onChange={handleType}
            />

            <Form.Group className="mb-3">
              {/* ------------------Name--------------------  */}
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                rows={1}
                onChange={handleName}
                value={name}
              />
              {/* ------------------Name--------------------  */}

              {/* ------------------Selected Students--------------------  */}
              <Form.Label>Selected Students</Form.Label>
              <Form.Control
                min="1"
                type="number"
                rows={1}
                onChange={handleSelected_students}
                value={selected_students}
              />

              {/* ------------------Selected Students--------------------  */}

              {/* ------------------Description--------------------  */}
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={handleDescription}
                className="input"
                value={description}
                type="text"
              />
              {/* ------------------Description--------------------  */}

              {/* ------------------Year--------------------  */}
              <Form.Label>Year</Form.Label>
              <Form.Control
                onChange={handleYear}
                className="input"
                value={year}
                type="text"
              />
              {/* ------------------Year--------------------  */}
            </Form.Group>
          </Form>
          {/* ======================form body=======================  */}
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-success" onClick={handleSubmit}>
            Add
          </Button>
          <Button className="btn-danger" onClick={props.onHide}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
