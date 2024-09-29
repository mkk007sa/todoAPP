document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    // Function to add a new task
    const addTask = () => {
      const taskValue = taskInput.value.trim();
  
      if (taskValue === '') {
        alert('Please enter a task');
        return;
      }
  
      // Create a new list item
      const li = document.createElement('li');
      li.textContent = taskValue;
  
      // Create a remove button for each task
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', () => {
        taskList.removeChild(li);
      });
  
      li.appendChild(removeBtn);
      taskList.appendChild(li);
  

      taskInput.value = '';
    };
  

    addTaskBtn.addEventListener('click', addTask);
  

    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTask();
      }
    });
  });
  