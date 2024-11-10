import PropTypes from 'prop-types';

TaskInput.propTypes = {
  taskInput: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onAddTask: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
};
function TaskInput({ taskInput, onInputChange, onAddTask, isEditing }) {
  return (
    <div>
      <input
        type="text"
        className="border p-2 w-full mb-2"
        placeholder="Escribe una tarea..."
        value={taskInput}
        onChange={onInputChange}
      />
      <button
        onClick={onAddTask}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 w-full"
      >
        {isEditing ? 'Guardar Cambios' : 'Añadir Tarea'}
      </button>
    </div>
  );
}

export default TaskInput;
