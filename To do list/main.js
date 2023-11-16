const form = document.querySelector('form');
const checkboxList = document.querySelector('#checkbox-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('#input-text');
  const inputValue = input.value;
  if (!inputValue) { 
    alert('Please enter a task.');
    return;
  }
  const newDiv = document.createElement('div');
  newDiv.style.display = 'flex';
  newDiv.style.alignItems = 'center';
  newDiv.style.justifyContent = 'space-between';
  newDiv.style.marginBottom = '10px'; 
  const newCheckbox = document.createElement('input');
  newCheckbox.type = 'checkbox';
  newCheckbox.name = 'items';
  newCheckbox.value = inputValue;
  newCheckbox.id = 'checkbox-' + (checkboxList.children.length + 1);
  const label = document.createElement('label');
  label.setAttribute('for', newCheckbox.id); 
  label.textContent = inputValue;
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'Delete';
  deleteBtn.addEventListener('click', function() {
    newDiv.parentNode.removeChild(newDiv);
  });
  newCheckbox.addEventListener('click', function() {
    if (this.checked) {
      label.style.textDecoration = 'line-through';
    } else {
      label.style.textDecoration = 'none';
    }
  });
  newDiv.appendChild(newCheckbox);
  newDiv.appendChild(label);
  newDiv.appendChild(deleteBtn);
  checkboxList.appendChild(newDiv); 
  input.value = ''; 
});
