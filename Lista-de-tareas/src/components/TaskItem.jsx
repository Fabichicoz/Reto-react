import PropTypes from 'prop-types';

TaskItem.propTypes = {
  task: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onEditTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};
function TaskItem({ task, index, onEditTask, onDeleteTask }) {
  return (
    <li className="mb-2 flex justify-between items-center">
      <span>{task}</span>
      <div>
        <button
          onClick={() => onEditTask(index)}
          className="bg-yellow-400 text-white px-2 py-1 rounded mr-2"
        >
          Editar
        </button>
        <button
          onClick={() => onDeleteTask(index)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Borrar
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
