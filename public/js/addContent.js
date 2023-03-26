const addContentButton = document.querySelector('#addContent')

const contentFormHandler = async (event) => {
    event.preventDefault();
    const content_body = document.querySelector('#content').value.trim();
    // const user_id = req.session.user_id;
    if (content_body) {
        await fetch('/api/content/', {
            method: 'POST',
            body: JSON.stringify({ content_body }),
            headers: { 'Content-Type': 'application/json' },
        })
        document.location.replace('/dashboard');
    }
    if (response.ok) {
        ;
    } else {
        alert('Failed to add dish');
    }
};

addContentButton.addEventListener('click', contentFormHandler);
