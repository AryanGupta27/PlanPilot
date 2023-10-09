import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export const Task = (props) => {
  return (
    <div
      className={`task ${props.completeStatus ? "completed" : ""}`}
      //   style={{ backgroundColor: props.completeStatus ? "green" : "white" }}
    >
      <h1>{props.taskName}</h1>
      <button
        className="delete-button"
        onClick={() => {
          props.deleteTask(props.id);
        }}
      >
        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
      </button>

      <button
        className="complete-button"
        onClick={() => {
          props.updateTask(props.id);
        }}
      >
        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
      </button>
    </div>
  );
};
