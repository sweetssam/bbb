document.addEventListener('DOMContentLoaded', function() {
    // 모든 3차시 제목(h3) 요소를 가져옵니다.
    const lessonHeaders = document.querySelectorAll('.lesson-day h3');

    // 각 제목에 클릭 이벤트 리스너를 추가합니다.
    lessonHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // 클릭된 h3 요소의 바로 다음 형제 요소(p.toggle-content)를 찾습니다.
            const content = this.nextElementSibling;

            // 'show' 클래스를 토글하여 내용을 보이거나 숨깁니다.
            content.classList.toggle('show');

            // 'active' 클래스를 토글하여 제목의 스타일(예: '+' / '-' 아이콘)을 변경합니다.
            this.classList.toggle('active');
        });
    });
});