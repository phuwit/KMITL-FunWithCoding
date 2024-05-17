const COOKIE_NAME = 'ft_list';
const COOKIE_OPTIONS = `; expires=${new Date(2147483647 * 1000).toUTCString()};`

const newButton = document.getElementById('newButton');
const todoContainer = document.getElementById('ft_list');

loadTodosFromCookie();
addClickDetector();

newButton.addEventListener("mouseup", () => {
  const title = window.prompt('Todo title:');
  addTodoToCookie(title);
  loadTodosFromCookie();
  addClickDetector();
});

function addTodoToCookie(title) {
  const cookies = document.cookie.split("; ");
  const cookieKey = `${COOKIE_NAME}=`
  cookies.forEach(cookie => {
    if (cookie.startsWith(cookieKey)) {
      const cookieValue = cookie.replace(cookieKey, '');
      // console.log(cookieValue);
      document.cookie = `${cookieKey}<div>${title}</div>${cookieValue}${COOKIE_OPTIONS}`
    }
  });
}

function loadTodosFromCookie() {
  const cookies = document.cookie.split("; ");
  const cookieKey = `${COOKIE_NAME}=`
  cookies.forEach(cookie => {
    if (cookie.startsWith(cookieKey)) {
      const cookieValue = cookie.replace(cookieKey, '');
      console.log(cookieValue);
      todoContainer.innerHTML = cookieValue;
    }
  });

  console.log(todoContainer.childNodes)

  if (todoContainer.childNodes.length === 0) {
    document.cookie = `${cookieKey}${COOKIE_OPTIONS}`;
  }
}

function addClickDetector() {
  todoContainer.childNodes.forEach(node => {
    node.addEventListener('mouseup', () => {
      if(!window.confirm(`remove "${node.textContent}?"`)) {
        return;
      }
      
      node.remove();

      const cookies = document.cookie.split("; ");
      const cookieKey = `${COOKIE_NAME}=`
      cookies.forEach(cookie => {
        if (cookie.startsWith(cookieKey)) {
          document.cookie = `${cookieKey}${todoContainer.innerHTML}${COOKIE_OPTIONS}`
        }
      });
    });
  });
}