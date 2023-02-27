const loginButton = document.querySelector('#login')

const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log('click')

    const name = document.querySelector('#un').value.trim();
    const password = document.querySelector('#pw').value.trim();

    if (name && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
loginButton.addEventListener('click',loginFormHandler)
  