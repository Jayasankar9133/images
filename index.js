let btnEl = document.getElementById('btn');
let secEl = document.getElementById('sec');
let rootEl = document.getElementById('root');
let imgEl = document.getElementById('img');


btnEl.onclick = () => {
    count = 4;
    uniqId = setInterval(() => {
        btnEl.style.display = 'none';
        console.log(count);
        secEl.textContent = `${count} Seconds`;
        count = count - 1;

        if (count == -1) {
            clearInterval(uniqId);
            secEl.textContent = '';
            imgEl.src = "https://res.cloudinary.com/nxt-wave-programe/image/upload/v1683033954/image_search_1602939205328_oolwgy.jpg"
        };
    }, 1000);


}

