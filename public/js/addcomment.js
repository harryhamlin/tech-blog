const addCommentButton = document.querySelector('#addComment')

const commentFormHandler = async (event) => {
    event.preventDefault();
    console.log('click')
    const comment_body = document.querySelector('#comment').value.trim();
    const user_id = 1;
    const path = window.location.pathname.split('/');
    const length = path.length
    const content_id = path[(length - 1)]
    if (comment_body) {
        fetch('/api/comment/', {
            method: 'POST',
            body: JSON.stringify({ comment_body, user_id, content_id }),
            headers: { 'Content-Type': 'application/json' },
        });
    }
};

addCommentButton.addEventListener('click', commentFormHandler)
