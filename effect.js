document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.section-header');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    // 既存のコンテンツ非表示ボタン
    const toggleContentBtn = document.getElementById('toggleContentBtn');
    if (toggleContentBtn) {
        toggleContentBtn.addEventListener('click', function() {
            document.body.classList.toggle('hide-content');
        });
    }
});
