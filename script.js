window.addEventListener('load', () => {
    const container = document.getElementById('loop-container');
    const images = document.querySelectorAll('.scroll-img');
    
    // png 1장의 정확한 세로 길이를 구합니다.
    const singleImageHeight = images[0].offsetHeight;
    
    // 속도 조절 (숫자가 클수록 빠름)
    const speed = 1.5; 
    let currentY = 0;

    function loopScroll() {
        currentY += speed;
        
        // 첫 번째 png 분량만큼 내려갔다면 순간적으로 맨 위로 리셋
        if (currentY >= singleImageHeight) {
            currentY = 0; 
        }
        
        window.scrollTo(0, currentY);
        requestAnimationFrame(loopScroll);
    }

    loopScroll();
});
