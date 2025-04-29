// banner.js - CSS, 컨테이너, 배너 자동 삽입형 (1파일 완성형)
(function() {
    // 1. 스타일 자동삽입
    const css = `
#my-banner-widget-container {
    display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; padding: 0; background: transparent;
}
.my-banner-widget-banner {
    flex: 0 1 calc(25% - 10px); max-width: calc(25% - 10px); box-sizing: border-box;
    border: 1px solid #444; border-radius: 8px; overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.5);
}
.my-banner-widget-wide { flex: 0 1 calc(50% - 10px); max-width: calc(50% - 10px);}
.my-banner-widget-banner img { width: 100%; height: auto; display: block;}
.my-banner-widget-banner a { text-decoration: none; display: block;}
@media (max-width:1199px){.my-banner-widget-banner{flex:0 1 calc(33.3% - 10px);max-width:calc(33.3% - 10px);}}
@media (max-width:991px){.my-banner-widget-banner{flex:0 1 calc(50% - 10px);max-width:calc(50% - 10px);}
.my-banner-widget-wide{flex:0 1 100%;max-width:100%;}}
@media (max-width:480px){.my-banner-widget-banner,.my-banner-widget-wide{flex:0 1 100%;max-width:100%;}}
    `;
    const style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);

    // 2. 컨테이너 자동삽입(없을때만)
    let container = document.getElementById('my-banner-widget-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'my-banner-widget-container';
        document.body.insertBefore(container, document.body.firstChild);
    }

    // 3. 배너 데이터 및 함수
    const fixedBanners = [
        { url: "https://xn--vy7ba476b.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/c4352a78-3a5f-42ce-5255-5f9be9ced200/public" }
    ];
    const banners = [
        { url: "https://a8l-audi.com/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/42adcbce-2231-4973-8e14-0ee48c8b3f00/public" },
        { url: "https://aha-bmw.com/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/ef33775e-5535-44d3-7638-9e6a0eaf6b00/public" },
        { url: "https://s-16.com?jc=6c8f3b33f054c3cf", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/9d3b636f-934a-441b-4d76-c92ef9eb5e00/public" },
        { url: "http://xn--mi3bz4k.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/9826c574-8fc8-4330-2fbe-d1b6d0456100/public" },
        { url: "http://xn--h11by6u74e3oi.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/215a25ab-4b50-4157-0202-e77deb83b300/public" },
        { url: "http://xn--2i0ba424pba.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/89fb37c7-9e2f-4d87-fbd3-00d13a413500/public" },
        { url: "http://rc337.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/20199e87-2b76-4011-2412-fcb5c5164a00/public" },
        { url: "http://dg745.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/ecf0c844-3ea7-48e1-d565-ba1cadf15900/public" },
        { url: "https://www.kcasinojoin.com/?a=53625/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/5f552e98-695e-4df4-473d-6a5c32e74a00/public" },
        { url: "https://www.bet38join.com/?a=40381/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/bff71d34-5f5a-42a9-41c8-9bdd43229200/public" },
        { url: "https://opview75.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/f035c716-5ed6-4d68-2896-fe07c463c300/public" }
    ];
    const wideBanner = {
        url: "https://xn--2j5b2zz4c.net/",
        img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/d20a69f9-c32f-446c-a21e-6d786777a700/public",
        wide: true
    };
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    function renderBanners() {
        // 이미 배너가 있으면 중복 방지
        if (container.dataset.filled === "1") return;
        container.dataset.filled = "1";
        shuffle(banners);
        const insertIndex = Math.floor(Math.random() * (banners.length + 1));
        banners.splice(insertIndex, 0, wideBanner);
        const finalBanners = [...banners, ...fixedBanners];
        finalBanners.forEach(banner => {
            const a = document.createElement('a');
            a.href = banner.url;
            a.target = "_blank";
            a.rel = "nofollow noopener noreferrer";
            const img = document.createElement('img');
            img.src = banner.img;
            img.alt = "Banner";
            const div = document.createElement('div');
            div.className = 'my-banner-widget-banner';
            if (banner.wide) div.classList.add('my-banner-widget-wide');
            a.appendChild(img);
            div.appendChild(a);
            container.appendChild(div);
        });
    }

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        renderBanners();
    } else {
        document.addEventListener('DOMContentLoaded', renderBanners);
    }
})();
