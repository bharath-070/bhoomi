function toggleLike(likeId, dislikeId) {
    const likeButton = document.getElementById(likeId);
    const dislikeButton = document.getElementById(dislikeId);

    if (likeButton.classList.contains('active')) {
        likeButton.classList.remove('active');
    } else {
        likeButton.classList.add('active');
        dislikeButton.classList.remove('active');
    }
}

function toggleDislike(likeId, dislikeId) {
    const likeButton = document.getElementById(likeId);
    const dislikeButton = document.getElementById(dislikeId);

    if (dislikeButton.classList.contains('active')) {
        dislikeButton.classList.remove('active');
    } else {
        dislikeButton.classList.add('active');
        likeButton.classList.remove('active');
    }
}

function togglePlay(videoElement) {
    if (videoElement.paused) {
        videoElement.play();
    } else {
        videoElement.pause();
    }
}

// Optional: Add class styling to indicate active state
const style = document.createElement('style');
style.innerHTML = `
    .active img {
        filter: brightness(0.5);
    }
`;
document.head.appendChild(style);
