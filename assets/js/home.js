document.addEventListener('DOMContentLoaded', () => {
    // --- Champions Accordion Logic ---
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = item.querySelector('.accordion-content');
            const isActive = item.classList.contains('active');

            // Close all others
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = null;
                }
            });

            // Toggle current
            if (isActive) {
                item.classList.remove('active');
                content.style.maxHeight = null;
            } else {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // --- Read Our Story Toggle ---
    const storyBtn = document.getElementById('read-story-btn');
    const fullStory = document.getElementById('about-full-story');

    if (storyBtn && fullStory) {
        storyBtn.addEventListener('click', () => {
            fullStory.classList.toggle('open');

            if (fullStory.classList.contains('open')) {
                fullStory.style.maxHeight = fullStory.scrollHeight + "px";
                storyBtn.innerHTML = 'Read Less <i class="fas fa-chevron-up" style="margin-left: 10px;"></i>';
            } else {
                fullStory.style.maxHeight = null;
                storyBtn.innerHTML = 'Read Our Story <i class="fas fa-chevron-down" style="margin-left: 10px;"></i>';
            }
        });
    }

    // --- Video Controls Logic ---
    const video = document.getElementById('heroVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const muteBtn = document.getElementById('muteBtn');

    if (video) {
        // Play/Pause
        playPauseBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';

                // Auto Fullscreen on Play (only if supported)
                if (video.requestFullscreen) {
                    video.requestFullscreen();
                } else if (video.webkitRequestFullscreen) {
                    video.webkitRequestFullscreen();
                } else if (video.msRequestFullscreen) {
                    video.msRequestFullscreen();
                }
            } else {
                video.pause();
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        });

        // Mute/Unmute
        muteBtn.addEventListener('click', () => {
            video.muted = !video.muted;
            updateVolumeIcon();
        });

        function updateVolumeIcon() {
            if (video.muted) {
                muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            } else {
                muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            }
        }

        // Initialize state
        video.muted = false; // Ensure starts unmuted
        updateVolumeIcon();
    }
});
