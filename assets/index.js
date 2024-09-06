
    document.addEventListener("DOMContentLoaded", function() {
        const newsContent = document.querySelector('.news__content');
        const scrollThumb = document.querySelector('.scroll-thumb');

        // Set initial scroll thumb height to 24px
        scrollThumb.style.height = '30px';
        scrollThumb.style.width = '30px';

        // Calculate and set the position of the thumb based on scroll position
        function updateThumbPosition() {
            const contentHeight = newsContent.scrollHeight;
            const visibleHeight = newsContent.clientHeight;
            const scrollPercentage = newsContent.scrollTop / (contentHeight - visibleHeight);
            const thumbMaxTop = newsContent.clientHeight - scrollThumb.offsetHeight;
            scrollThumb.style.top = `${scrollPercentage * thumbMaxTop}px`;
        }

        // Adjust scroll step (how much content scrolls with each action)
        function adjustScrollStep(event) {
            const scrollStep = 30; // Adjust this value to control scroll step
            if (event.deltaY > 0) {
                // Scroll down
                newsContent.scrollTop += scrollStep;
            } else {
                // Scroll up
                newsContent.scrollTop -= scrollStep;
            }
            updateThumbPosition();
        }

        // Update the scroll thumb position on scroll
        newsContent.addEventListener('scroll', updateThumbPosition);

        // Add smooth scrolling and adjust scroll step
        newsContent.addEventListener('wheel', adjustScrollStep, { passive: true });
    });
