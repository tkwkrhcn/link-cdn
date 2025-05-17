document.addEventListener("DOMContentLoaded", function () {
  // 스타일 삽입
  const style = document.createElement("style");
  style.textContent = `
@keyframes neon-glow {
  0% { box-shadow: 0 0 10px #00eaff, 0 0 20px #00eaff; }
  50% { box-shadow: 0 0 15px #ff00ff, 0 0 30px #ff00ff; }
  100% { box-shadow: 0 0 10px #00eaff, 0 0 20px #00eaff; }
}
@keyframes neon-glow-orange {
  0% { box-shadow: 0 0 15px #FF8C00, 0 0 30px #FF4500; }
  50% { box-shadow: 0 0 25px #FFA500, 0 0 50px #FF6347; }
  100% { box-shadow: 0 0 15px #FF8C00, 0 0 30px #FF4500; }
}
.tab-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
}
.tab-button {
  padding: 10px 20px;
  background-color: #222;
  color: #fff;
  border: 1px solid #555;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
.tab-button.active {
  background-color: #00eaff;
  color: #000;
}
.button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(45% - 10px);
  max-width: 280px;
  min-width: 140px;
  padding: 14px 20px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 10px;
  background: linear-gradient(45deg, #00eaff, #ff00ff);
  border: 2px solid #00eaff;
  box-shadow: 0 0 10px #00eaff, 0 0 20px #00eaff;
  animation: neon-glow 2s infinite alternate;
  transition: transform 0.2s ease;
  text-align: center;
}
.button:hover {
  transform: scale(1.04);
}
.button:focus {
  outline: 2px dashed #00eaff;
  outline-offset: 4px;
}
.button.joatoon {
  background: linear-gradient(45deg, #FF8C00, #FFA500, #FF4500);
  border: 2px solid #FF8C00;
  box-shadow: 0 0 15px #FF8C00, 0 0 30px #FF4500;
  animation: neon-glow-orange 1.5s infinite alternate;
}`;
  document.head.appendChild(style);

  // 탭 버튼 삽입
  const tabContainer = document.createElement("div");
  tabContainer.className = "tab-container";
  tabContainer.innerHTML = `
    <button class="tab-button active" data-category="all">전체</button>
    <button class="tab-button" data-category="freetoon">무료웹툰</button>
    <button class="tab-button" data-category="manga">무료만화</button>
    <button class="tab-button" data-category="anime">무료애니</button>
    <button class="tab-button" data-category="webtoon">유료웹툰</button>
  `;
  document.body.appendChild(tabContainer);

  // 버튼 영역 삽입
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";
  buttonContainer.innerHTML = `<noscript>자바스크립트를 켜야 링크를 볼 수 있습니다.</noscript>`;
  document.body.appendChild(buttonContainer);

  // 링크 데이터
  const linkData = [
    { text: "무료웹툰 조아툰", url: "https://joatoon65.com/", class: "joatoon freetoon" },
    { text: "무료웹툰 블랙툰", url: "https://blacktoon357.com/", class: "freetoon" },
    { text: "무료웹툰 뉴토끼", url: "https://newtoki468.com/", class: "freetoon" },
    { text: "무료웹툰 툰코", url: "https://tkor013.com/", class: "freetoon" },
    { text: "무료웹툰 북토끼", url: "https://booktoki468.com/", class: "freetoon" },
    { text: "무료웹툰 펀비", url: "https://funbe527.com/", class: "freetoon" },
    { text: "무료웹툰 해피툰", url: "https://happytoon01.com/", class: "freetoon" },
    { text: "무료웹툰 섹툰", url: "https://3.sektoon.me/", class: "freetoon" },
    { text: "무료웹툰 야툰", url: "https://yatoon201.com/", class: "freetoon" },
    { text: "무료웹툰 나미툰", url: "https://namee74.com/", class: "freetoon" },
    { text: "무료웹툰 뉴툰", url: "https://newtoon272.com/", class: "freetoon" },
    { text: "무료웹툰 무료툰", url: "https://foc91.com/", class: "freetoon" },
    { text: "무료웹툰 핫툰", url: "https://hottoon53.com/", class: "freetoon" },
    { text: "무료웹툰 빅픽쳐", url: "https://bpt95.com/", class: "freetoon" },
    { text: "무료웹툰 머니툰", url: "https://mtoon122.com/", class: "freetoon" },
    { text: "무료웹툰 마징가툰", url: "https://z66.mzgtoon.com/", class: "freetoon" },
    { text: "무료웹툰 호두코믹스", url: "https://t67.hoduhodu.com/", class: "freetoon" },
    { text: "무료만화 만화방", url: "https://manhwabang.org/", class: "manga" },
    { text: "무료만화 쿡마나", url: "https://www.cookmana47.com/", class: "manga" },
    { text: "무료만화 일일툰", url: "https://www.11toon143.com/", class: "manga" },
    { text: "무료망가 망가24", url: "https://manga24.net/", class: "manga" },
    { text: "무료만화 마나토끼", url: "https://manatoki468.net/", class: "manga" },
    { text: "무료만화 마나보자", url: "https://www.manaboza82.com/", class: "manga" },
    { text: "무료만화 사쿠가보", url: "https://01.sakugabo.net/", class: "manga" },
    { text: "무료애니 모애니", url: "https://moeni.live/", class: "anime" },
    { text: "무료애니 애니24", url: "https://ohli24.com/", class: "anime" },
    { text: "무료애니 애니위크", url: "https://aniweek.com/", class: "anime" },
    { text: "무료애니 링크KKF", url: "https://kr.linkkf.net/", class: "anime" },
    { text: "무료애니 애니울프", url: "https://aniwolf.com/", class: "anime" },
    { text: "무료애니 애니야24", url: "https://www.aniya24.com/", class: "anime" },
    { text: "무료애니 애니라이프", url: "https://anilife.app/", class: "anime" },
    { text: "유료웹툰 탑툰", url: "https://toptoon.com/", class: "webtoon" },
    { text: "무료웹툰 미툰", url: "https://metoon.co.kr/sub/?mode=toon", class: "freetoon" },
    { text: "유료웹툰 봄툰", url: "https://www.bomtoon.com/bom/comic/main", class: "webtoon" },
    { text: "유료웹툰 리디", url: "https://ridibooks.com/webtoon/recommendation", class: "webtoon" },
    { text: "유료웹툰 무툰", url: "https://www.mootoon.co.kr/", class: "webtoon" },
    { text: "유료웹툰 큐툰", url: "https://www.qtoon.co.kr/", class: "webtoon" },
    { text: "유료웹툰 네이버웹툰", url: "https://comic.naver.com/index", class: "webtoon" },
    { text: "유료웹툰 레진코믹스", url: "https://www.lezhin.com/ko", class: "webtoon" },
    { text: "유료웹툰 카카오웹툰", url: "https://webtoon.kakao.com/", class: "webtoon" },
    { text: "유료웹툰 미스터블루", url: "https://mrblue.com/", class: "webtoon" },
    { text: "유료웹툰 케이툰", url: "https://www.myktoon.com/web/homescreen/main.kt?loginYn=N&adultViewYn=false", class: "webtoon" },
    { text: "유료웹툰 원스토리", url: "https://onestory.co.kr/", class: "webtoon" },
    { text: "유료웹툰 버프툰", url: "https://bufftoon.plaync.com/", class: "webtoon" },
    { text: "유료웹툰 코미코", url: "https://www.comico.kr/", class: "webtoon" },
    { text: "유료웹툰 까만봉지", url: "http://www.kkatoon.com/", class: "webtoon" }
  ];

  // 링크 생성
  linkData.forEach(item => {
    const a = document.createElement("a");
    a.href = item.url;
    a.textContent = item.text;
    a.className = "button " + item.class;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    buttonContainer.appendChild(a);
  });

  // 필터 기능
  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category");
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      document.querySelectorAll(".button-container .button").forEach(button => {
        button.style.display = (category === "all" || button.classList.contains(category)) ? "flex" : "none";
      });
    });
  });
});
