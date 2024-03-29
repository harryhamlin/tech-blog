const loginButton = document.querySelector('#login')

const loginFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#un').value.trim();
    const password = document.querySelector('#pw').value.trim();

    if (email && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
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
  