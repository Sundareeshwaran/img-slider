const imgObj = [
  {
    id: 1,
    img: "images/img_1.jpg",
    title: "Guadeloupe Raccoon",
    description:
      "The Guadeloupe raccoon is a common raccoon subspecies endemic to the two main islands of Guadeloupe in the Lesser Antilles.",
  },
  {
    id: 2,
    img: "images/img_2.jpg",
    title: "Grizzly bear",
    description:
      "The grizzly bear, also known as the North American brown bear or simply grizzly, is a population or subspecies of the brown bear inhabiting North America.",
  },
  {
    id: 3,
    img: "images/img_3.jpg",
    title: "Koala",
    description:
      "It is the only extant representative of the family Phascolarctidae.",
  },
  {
    id: 4,
    img: "images/img_4.jpg",
    title: "Golden hamster",
    description:
      " Their natural geographical range is in an arid region of northern Syria and southern Turkey.",
  },
  {
    id: 5,
    img: "images/img_5.jpg",
    title: "Bengal Tiger",
    description: "It ranks among the biggest wild cats alive today.",
  },
  {
    id: 6,
    img: "images/img_6.jpg",
    title: "Leo",
    description:
      "The Barbary lion was a population of the lion subspecies Panthera leo leo.",
  },
];
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const list = document.querySelector(".list");
let currImg = 0;

function fun() {
  list.innerHTML = `<img src="${imgObj[currImg].img}" alt="" />
          <div class="content">
            <h3>${imgObj[currImg].title}</h3>
            <p>${imgObj[currImg].description}</p>
            <button>Let's Explore <i class="ri-arrow-right-line"></i></button>
          </div>`;
}

next.addEventListener("click", () => {
  currImg = (currImg + 1) % imgObj.length;
  fun();
});

prev.addEventListener("click", () => {
  currImg = (currImg - 1 + imgObj.length) % imgObj.length;
  fun();
});
