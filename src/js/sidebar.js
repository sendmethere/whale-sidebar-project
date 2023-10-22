document.addEventListener('DOMContentLoaded', function () {
    const list = document.getElementById('randomNumberList');

    // 10개의 랜덤한 숫자 생성
    for (let i = 0; i < 10; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = Math.floor(Math.random() * 100); // 0에서 99 사이의 랜덤 숫자
        listItem.classList.add('mb-2', 'py-2', 'px-4', 'rounded-xl', 'list-none');

        // 마우스 오버 시 랜덤한 색상으로 변경
        listItem.addEventListener('mouseover', function () {
            this.style.backgroundColor = getRandomColor();
        });

        list.appendChild(listItem);
    }
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
