const addCommentButton = document.querySelector('#addComment')

const commentFormHandler = async (event) => {
    event.preventDefault();
    const comment_body = document.querySelector('#comment').value.trim();
    const path = window.location.pathname.split('/');
    const length = path.length
    const content_id = path[(length - 1)]
    if (comment_body) {
        await fetch('/api/comment/', {
            method: 'POST',
            body: JSON.stringify({ comment_body, content_id }),
            headers: { 'Content-Type': 'application/json' },
        })
        document.location.replace(`/content/${content_id}`)
    }
};

addCommentButton.addEventListener('click', commentFormHandler)
