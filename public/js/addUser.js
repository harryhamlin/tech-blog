const createButton = document.querySelector('#create')

const createFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const name = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (email && password && username) {
      const response = await fetch('/api/user/create', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
createButton.addEventListener('click',createFormHandler)