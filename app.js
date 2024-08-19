const bodyElement = document.querySelector("body");

const createEle = ({
  tagName,
  className,
  textInBody,
  idName,
  parentEle,
  attributes = {},
}) => {
  const ele = document.createElement(`${tagName}`);

  ele.id = idName;
  if (className) ele.classList.add(className);
  ele.innerText = textInBody;

  for (const [key, value] of Object.entries(attributes)) {
    ele.setAttribute(key, value);
  }
  parentEle.appendChild(ele);
  return ele;
};

const containerEle = createEle({
  tagName: "div",
  className: "container",
  textInBody: "",
  idName: "",
  parentEle: bodyElement,
});

const heading = createEle({
  tagName: "h1",
  className: "",
  textInBody: "Get Advice",
  idName: "heading",
  parentEle: containerEle,
});

const adviceContainer = createEle({
  tagName: "div",
  className: "advice-container",
  textInBody: "",
  idName: "",
  parentEle: containerEle,
});

const imageContainer = createEle({
  tagName: "div",
  className: "image-container",
  textInBody: "",
  idName: "",
  parentEle: adviceContainer,
});

const image = createEle({
  tagName: "img",
  className: "kanha-image",
  textInBody: "",
  idName: "",
  parentEle: imageContainer,
  attributes: {
    src: `./images/img1.png`,
    alt: "Kanha",
  },
});

const contentContainer = createEle({
  tagName: "div",
  className: "content-container",
  textInBody: "",
  idName: "",
  parentEle: imageContainer,
});

let advice =
  "Good advice is always certain to be ignored, but thats' no reason not to give it. ."

let adviceOne = createEle({
  tagName: "h2",
  className: "advice",
  textInBody: advice,
  idName: "advice-1",
  parentEle: contentContainer,
});


const imageContainer2 = createEle({
  tagName: "div",
  className: "image-container",
  textInBody: "",
  idName: "",
  parentEle: adviceContainer,
});


const contentContainer2 = createEle({
  tagName: "div",
  className: "content-container",
  textInBody: "",
  idName: "",
  parentEle: imageContainer2,
});

const image2 = createEle({
    tagName: "img",
    className: "kanha-image",
    textInBody: "",
    idName: "",
    parentEle: imageContainer2,
    attributes: {
      src: `./images/sudarshan.png`,
      alt: "Kanha",
    },
  });

let advice2 = "Things are just things. Don't get too attached to them."

let adviceTwo = createEle({
  tagName: "h2",
  className: "advice",
  textInBody: advice2,
  idName: "advice-2",
  parentEle: contentContainer2,
});



const generateBtn = document.createElement('button');
generateBtn.classList.add('generate-btn');
generateBtn.innerText= "Get Advice";

adviceContainer.insertBefore(generateBtn, imageContainer2)

const fetchData = async (advice, slipId) => {
  try {
    const res = await fetch(`https://api.adviceslip.com/advice/${slipId}`);
    const data = await res.json();
    advice.innerText = data.slip.advice;

  } catch (error) {
    console.error(error);
  }
};

generateBtn.addEventListener('click',()=> {
    const slipId = Math.floor(Math.random()*223);
    fetchData(adviceOne,slipId);
    setTimeout(()=>{
        fetchData(adviceTwo,slipId+1);
    }, 1000);
});
