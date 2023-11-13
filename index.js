let btnEl = document.getElementById('btn');
let secEl = document.getElementById('sec');
let rootEl = document.getElementById('root');
let imgEl = document.getElementById('img');

let images = ["https://res.cloudinary.com/nxt-wave-programe/image/upload/v1683033954/image_search_1602939205328_oolwgy.jpg", "https://res.cloudinary.com/nxt-wave-programe/image/upload/v1689169419/image_search_1688996487806_grwxby.jpg", "https://res.cloudinary.com/nxt-wave-programe/image/upload/v1682486712/image_search_1658848145594_m9uv7b.jpg", "https://res.cloudinary.com/nxt-wave-programe/image/upload/v1682486712/image_search_1658848161732_xjfbjw.jpg", "https://res.cloudinary.com/nxt-wave-programe/image/upload/v1682486712/image_search_1658848138088_xmwuxt.jpg"];
let randomNum = Math.round(Math.random() * 4);


btnEl.onclick = () => {
    count = 10;
    uniqId = setInterval(() => {
        btnEl.style.display = 'none';
        secEl.textContent = `${count} Seconds`;
        count = count - 1;

        if (count == -1) {
            clearInterval(uniqId);
            secEl.textContent = '';
            imgEl.src = images[randomNum];
        };
    }, 1000);


}

