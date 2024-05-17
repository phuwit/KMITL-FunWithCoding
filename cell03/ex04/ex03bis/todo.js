const COOKIE_NAME = 'ft_list';
const COOKIE_OPTIONS = `; expires=${new Date(2147483647 * 1000).toUTCString()};`

$(document).ready(function(){
  function addTodoToCookie(title) {
    const cookies = document.cookie.split("; ");
    const cookieKey = `${COOKIE_NAME}=`
    cookies.forEach(cookie => {
      if (cookie.startsWith(cookieKey)) {
        const cookieValue = cookie.replace(cookieKey, '');
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
        $("#ft_list").html(cookieValue);
      }
    });

    console.log($("#ft_list").children())

    if ($("#ft_list").children().length === 0) {
      document.cookie = `${cookieKey}${COOKIE_OPTIONS}`;
    }
  }

  function addClickDetector() {
    $("#ft_list").children().each(function () {
      this.addEventListener('mouseup', () => {
        if(!window.confirm(`remove "${this.textContent}?"`)) {
          return;
        }

        this.remove();

        const cookies = document.cookie.split("; ");
        const cookieKey = `${COOKIE_NAME}=`
        cookies.forEach(cookie => {
          if (cookie.startsWith(cookieKey)) {
            document.cookie = `${cookieKey}${$("#ft_list").html()}${COOKIE_OPTIONS}`
          }
        });
      });
    });
  }

  loadTodosFromCookie();
  addClickDetector();

  $("#newButton").mouseup(function(){
    const title = window.prompt('Todo title:');
    if (!title) {
      return
    }
    addTodoToCookie(title);
    loadTodosFromCookie();
    addClickDetector();
  });
});
