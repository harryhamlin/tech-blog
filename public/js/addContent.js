const addContentButton = document.querySelector('#addContent')

const contentFormHandler = async (event) => {
    event.preventDefault();
    console.log('click')
    const content_body = document.querySelector('#content').value.trim();
    const user_id = 1;
    if (content_body) {
        await fetch('/api/content/', {
            method: 'POST',
            body: JSON.stringify({ content_body, user_id}),
            headers: { 'Content-Type': 'application/json' },
        })
    }
};

addContentButton.addEventListener('click', contentFormHandler)
