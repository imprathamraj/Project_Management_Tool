const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const taskName = document.getElementById("taskName").value;
    const assignee = document.getElementById("assignee").value;
    const dueDate = document.getElementById("dueDate").value;

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `<strong>${taskName}</strong> - Assigned to: ${assignee}, Due: ${dueDate}`;
    
    taskList.appendChild(taskItem);

    taskForm.reset();
});
var taskObj = {
    clearChat: function () {
        localStorage.removeItem('chatHistory');
        chatMessages.innerHTML = '';
    }
};
const clearChatButton = document.getElementById('clear-chat-button');
clearChatButton.addEventListener('click', function () {
    taskObj.clearChat();
});
const form = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');
const nameInput = document.getElementById('name-input');
const chatMessages = document.getElementById('chat-messages');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const message = messageInput.value.trim();
  const name = nameInput.value.trim();

  if (message !== '' && name !== '') {
    let userColor = localStorage.getItem(name);
    if (!userColor) {
      userColor = getRandomColor();
      localStorage.setItem(name, userColor);
    }

    const messageElement = document.createElement('p');
    messageElement.classList.add('message');

    if (nameInput.value === name) {
      messageElement.classList.add('user-message');
      messageElement.style.backgroundColor = userColor;
    } else {
      messageElement.classList.add('other-message');
    }

    messageElement.textContent = `${name}: ${message}`;

    chatMessages.appendChild(messageElement);

    messageInput.value = '';

    saveChatHistory();
  }
});

function getRandomColor() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00', '#00ffff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function saveChatHistory() {
  const messages = chatMessages.innerHTML;
  localStorage.setItem('chatHistory', messages);
}

function loadChatHistory() {
  const chatHistory = localStorage.getItem('chatHistory');
  if (chatHistory) {
    chatMessages.innerHTML = chatHistory;
  }
}
window.addEventListener('load', function () {
  loadChatHistory();
});




