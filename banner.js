document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("banner-container");
  if (!root) return;

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
}
.button,
.button:hover,
.button:focus,
.button:active {
  text-decoration: none !important;
}

`;
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
  root.appendChild(tabContainer);

  // 버튼 영역 삽입
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";
  buttonContainer.innerHTML = `<noscript>자바스크립트를 켜야 링크를 볼 수 있습니다.</noscript>`;
  root.appendChild(buttonContainer);

  // 링크 데이터
const linkData = [
  { text: "조아툰", url: "https://xn--v52b27qokbe3x.com/tn1", class: "joatoon freetoon" },
  { text: "블랙툰", url: "https://xn--v52b27qokbe3x.com/tn2", class: "freetoon" },
  { text: "뉴토끼", url: "https://xn--v52b27qokbe3x.com/tn3", class: "freetoon" },
  { text: "툰코", url: "https://xn--v52b27qokbe3x.com/tn4", class: "freetoon" },
  { text: "북토끼", url: "https://xn--v52b27qokbe3x.com/tn5", class: "freetoon" },
  { text: "펀비", url: "https://xn--v52b27qokbe3x.com/tn6", class: "freetoon" },
  { text: "해피툰", url: "https://xn--v52b27qokbe3x.com/tn7", class: "freetoon" },
  { text: "야툰", url: "https://xn--v52b27qokbe3x.com/tn9", class: "freetoon" },
  { text: "무료툰", url: "https://xn--v52b27qokbe3x.com/tn12", class: "freetoon" },
  { text: "머니툰", url: "https://xn--v52b27qokbe3x.com/tn15", class: "freetoon" },
  { text: "만화방", url: "https://xn--v52b27qokbe3x.com/tn18", class: "manga" },
  { text: "쿡마나", url: "https://xn--v52b27qokbe3x.com/tn19", class: "manga" },
  { text: "일일툰", url: "https://xn--v52b27qokbe3x.com/tn20", class: "manga" },
  { text: "마나토끼", url: "https://xn--v52b27qokbe3x.com/tn22", class: "manga" },
  { text: "마나보자", url: "https://xn--v52b27qokbe3x.com/tn23", class: "manga" },
  { text: "모애니", url: "https://xn--v52b27qokbe3x.com/tn25", class: "anime" },
  { text: "애니24", url: "https://xn--v52b27qokbe3x.com/tn26", class: "anime" },
  { text: "애니위크", url: "https://xn--v52b27qokbe3x.com/tn27", class: "anime" },
  { text: "링크KKF", url: "https://xn--v52b27qokbe3x.com/tn28", class: "anime" },
  { text: "애니울프", url: "https://xn--v52b27qokbe3x.com/tn29", class: "anime" },
  { text: "애니야24", url: "https://xn--v52b27qokbe3x.com/tn30", class: "anime" },
  { text: "애니라이프", url: "https://xn--v52b27qokbe3x.com/tn31", class: "anime" },
  { text: "탑툰", url: "https://xn--v52b27qokbe3x.com/tn32", class: "webtoon" },
  { text: "미툰", url: "https://xn--v52b27qokbe3x.com/tn33", class: "freetoon" },
  { text: "봄툰", url: "https://xn--v52b27qokbe3x.com/tn34", class: "webtoon" },
  { text: "리디", url: "https://xn--v52b27qokbe3x.com/tn35", class: "webtoon" },
  { text: "무툰", url: "https://xn--v52b27qokbe3x.com/tn36", class: "webtoon" },
  { text: "큐툰", url: "https://xn--v52b27qokbe3x.com/tn37", class: "webtoon" },
  { text: "네이버웹툰", url: "https://xn--v52b27qokbe3x.com/tn38", class: "webtoon" },
  { text: "레진코믹스", url: "https://xn--v52b27qokbe3x.com/tn39", class: "webtoon" },
  { text: "카카오웹툰", url: "https://xn--v52b27qokbe3x.com/tn40", class: "webtoon" },
  { text: "미스터블루", url: "https://xn--v52b27qokbe3x.com/tn41", class: "webtoon" },
  { text: "케이툰", url: "https://xn--v52b27qokbe3x.com/tn42", class: "webtoon" },
  { text: "원스토리", url: "https://xn--v52b27qokbe3x.com/tn43", class: "webtoon" },
  { text: "버프툰", url: "https://xn--v52b27qokbe3x.com/tn44", class: "webtoon" },
  { text: "코미코", url: "https://xn--v52b27qokbe3x.com/tn45", class: "webtoon" },
  { text: "까만봉지", url: "https://xn--v52b27qokbe3x.com/tn46", class: "webtoon" }
];


  // 링크 생성
  linkData.forEach(item => {
    const a = document.createElement("a");
    a.href = item.url;
    a.textContent = item.text;
    a.className = "button " + item.class;
    a.target = "_blank";
     a.rel = "nofollow noopener noreferrer";
    buttonContainer.appendChild(a);
  });

  // 필터 기능
  const tabButtons = tabContainer.querySelectorAll(".tab-button");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category");
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      buttonContainer.querySelectorAll(".button").forEach(button => {
        button.style.display = (category === "all" || button.classList.contains(category)) ? "flex" : "none";
      });
    });
  });
});
