//가로 스크롤 부드럽게
const scrollContainer = document.querySelector('#scroll-container');

let isScrolling = false;

scrollContainer.addEventListener('wheel', (event) => {
    event.preventDefault();

    if (isScrolling) return; // 이미 스크롤 중이면 중복 실행 방지

    isScrolling = true;

    const scrollSpeed = 10; // 속도 조절값
    const targetScrollLeft = scrollContainer.scrollLeft + event.deltaY * scrollSpeed;

    // 미끄러지듯 스크롤 함수 호출
    smoothScroll(scrollContainer, targetScrollLeft, 1000);
});

function smoothScroll(element, targetScrollLeft, duration) {
    const startScrollLeft = element.scrollLeft;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easing = easeInOutQuad(progress);

        element.scrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft) * easing;

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        } else {
            isScrolling = false; // 스크롤 완료 후 상태 변경
        }
    };

    requestAnimationFrame(animateScroll);
}

function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
//가로 스크롤 부드럽게


