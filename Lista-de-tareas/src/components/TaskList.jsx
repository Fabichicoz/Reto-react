import TaskItem from './TaskItem';
import PropTypes from 'prop-types';

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  onEditTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};
function TaskList({ tasks, onEditTask, onDeleteTask }) {
  return (
    <ul className="list-disc pl-5">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
