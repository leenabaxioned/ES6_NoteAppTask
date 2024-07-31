/* Author: */
const createNote = () => {
  // Create the main list item
  const li = document.createElement('li');

  // Create and append the action buttons
  const noteActions = document.createElement('div');
  noteActions.className = 'note-actions';

  const editButton = document.createElement('button');
  editButton.className = 'edit-btn btn';
  editButton.textContent = 'Edit';
  
  const saveButton = document.createElement('button');
  saveButtonButton.className = 'edit-btn btn';
  saveButton.textContent = 'Save';
  saveButton.style.display = 'none';

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-btn btn';
  deleteButton.textContent = 'Delete';

  // Add event listeners
  editButton.addEventListener('click', () => {
      textarea.disabled = false;
      editButton.style.display = 'none';
      saveButton.style.display = 'inline-block';
  });

  saveButton.addEventListener('click', () => {
      textarea.disabled = true;
      editButton.style.display = 'inline-block';
      saveButton.style.display = 'none';
  });

  deleteButton.addEventListener('click', () => {
      li.remove();
  });

  noteActions.appendChild(editButton);
  noteActions.appendChild(saveButton);
  noteActions.appendChild(deleteButton);
  li.appendChild(noteActions);

  // Create and append the textarea
  const textarea = document.createElement('textarea');
  textarea.placeholder = 'Write your note here...';
  textarea.disabled = true; // Initially disable textarea
  li.appendChild(textarea);

  return li;
};

// Add event listener to the "Add New Note" button
document.querySelector('#addnote').addEventListener('click', () => {
  const notesList = document.querySelector('#notes-list');
  const newNote = createNote();
  notesList.appendChild(newNote);
});