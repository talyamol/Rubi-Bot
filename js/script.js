
//מכניס לתוך הדף את המערך הזה
function arrpro1() {
  const DivElement = document.querySelector("#divpro1");
  for (let i = 0; i < imagesPro.length; i++) {
    const containerEl = document.createElement("div");
    containerEl.classList.add("intoAnather");
    const containerEl1 = document.createElement("div");
    const ppp = document.createElement("p");
    ppp.textContent = imagesPro[i].title;
    containerEl1.appendChild(ppp);
    const prepre = document.createElement("pre");
    prepre.textContent = imagesPro[i].pre;
    containerEl1.appendChild(prepre);
    DivElement.appendChild(containerEl);
    containerEl.appendChild(containerEl1);
    const imgimg = document.createElement("img");
    imgimg.src = imagesPro[i].img;
    containerEl.appendChild(imgimg);
    DivElement.appendChild(containerEl);
  }
}
//מכניס לתוך הדף את המערך הזה
function arrpro2() {
  const DivElement = document.querySelector("#divpro2");
  for (let i = 0; i < imagesPro.length; i++) {
    const containerEl = document.createElement("div");
    containerEl.classList.add("intoAnather");
    const containerEl1 = document.createElement("div");
    const ppp = document.createElement("p");
    ppp.textContent = imagesPro[i].title;
    containerEl1.appendChild(ppp);
    const prepre = document.createElement("pre");
    prepre.textContent = imagesPro[i].pre;
    containerEl1.appendChild(prepre);
    DivElement.appendChild(containerEl);
    containerEl.appendChild(containerEl1);
    const imgimg = document.createElement("img");
    imgimg.src = imagesPro[i].img;
    containerEl.appendChild(imgimg);
    DivElement.appendChild(containerEl);
  }
}
//מכניס לתוך הדף את המערך הזה
function arrAi1() {
  const DivElement = document.querySelector("#AI1");
  for (let i = 0; i < imgAI.length; i++) {
    const containerEl = document.createElement("div");
    containerEl.classList.add("intoAnather");
    const containerEl1 = document.createElement("div");
    const ppp = document.createElement("p");
    ppp.textContent = imgAI[i].title;
    containerEl1.appendChild(ppp);
    const prepre = document.createElement("pre");
    prepre.textContent = imgAI[i].pre;
    containerEl1.appendChild(prepre);
    DivElement.appendChild(containerEl);
    containerEl.appendChild(containerEl1);
    const imgimg = document.createElement("img");
    imgimg.src = imgAI[i].img;
    containerEl.appendChild(imgimg);
    DivElement.appendChild(containerEl);
  }
}
//מכניס לתוך הדף את המערך הזה
function arrAi2() {
  const DivElement = document.querySelector("#AI2");
  for (let i = 0; i < imgAI1.length; i++) {
    const containerEl = document.createElement("div");
    containerEl.classList.add("intoAnather");
    const containerEl1 = document.createElement("div");
    const ppp = document.createElement("p");
    ppp.textContent = imgAI1[i].title;
    containerEl1.appendChild(ppp);
    const prepre = document.createElement("pre");
    prepre.textContent = imgAI1[i].pre;
    containerEl1.appendChild(prepre);
    DivElement.appendChild(containerEl);
    containerEl.appendChild(containerEl1);
    const imgimg = document.createElement("img");
    imgimg.src = imgAI1[i].img;
    containerEl.appendChild(imgimg);
    DivElement.appendChild(containerEl);
  }
}

// בטעינת הדף יהיה ב HTML מה שיוצרות הפונקציות הבאות:
window.onload = function () {
  switch (document.querySelector("body").id) {
    case "bodym":
      sentenceInto();
      break;
    case "bodyChat":
      getParams();
      break;
    case "body":
      arrpro1();
      arrpro2();
      break;
    case "bodyAi":
      arrAi1();
      arrAi2();
      break;
    case "bodyp":
      htmkpointer();
      break;
  }
};

window.addEventListener("load", function () {
  var links = document.getElementsByTagName("a");

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", addUnderline);
    links[i].addEventListener("mouseout", removeUnderline);
  }
});
function addUnderline() {
  this.style.textDecoration = "none";
}

function removeUnderline() {
  this.style.color = "white";
}

function getParams() {
  const paramsString = location.search;
  const searchChat = new URLSearchParams(paramsString);
  const chatInfo = searchChat.get("query");
  const div1 = document.querySelector("#chat-messages");
  const divChat = document.createElement("div");
  const pChat = document.createElement("p");
  divChat.classList.add("user");
  pChat.innerHTML=chatInfo;
  divChat.appendChild(pChat);
  div1.appendChild(divChat);
  countWord(chatInfo);
}

function countWord(chatInfo) {
  const chata = chatInfo.split(" ");

  const chatAns = sentences.map(function (sentence) {
    let sentenceWords = sentence.split(" ");
    let correctWordCount = 0;
    for (i = 0; i < chata.length; i++) {
      for (j = 0; j < sentenceWords.length-i ; j++) {
        if (chata[i] === sentenceWords[j]) {
          correctWordCount++;
        }
      }
    }
    return correctWordCount;
  });
  let maxw = 0;
  let index1 = 0;
  for (i = 0; i < chatAns.length; i++) {
    if (maxw < chatAns[i]) {
      maxw = chatAns[i];
      index1 = i;
    }
  }
  
  const div1 = document.querySelector("#chat-messages");
  const divChat = document.createElement("div");
  const pChat = document.createElement("p");
  divChat.classList.add("rubi");

  if (maxw == 0) {
    const stringauto =
      "אני מצטער, אבל אני כרגע עסוק ולומד איך להשתפר.בקרוב אחזור לפעילות.";
    pChat.innerHTML += stringauto;
    divChat.appendChild(pChat);
    div1.appendChild(divChat);
  } else {
    pChat.innerHTML += sentences[index1];
    divChat.appendChild(pChat);
    div1.appendChild(divChat);
    
  }
}
/*function clickChat() {
  var form = document.getElementById("inChat");
  var button = document.getElementsByClassName("imageChat");
  form.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    button.click();}
    button.addEventListener("click", function(event) {
      form.submit();
    });
    chat();
  });
}*/
function chat() {
  const chat1 = document.querySelector("#inputChat").value + "\n";
  const div1 = document.querySelector("#chat-messages");
  const divChat = document.createElement("div");
  const pChat = document.createElement("p");
  divChat.classList.add("user");
  pChat.innerHTML += chat1;
  divChat.appendChild(pChat);
  div1.appendChild(divChat);
  document.querySelector("#inputChat").value = " ";
  countWord(chat1);
}
//create timer
function loudtime() {
  const divloader = document.querySelector("#load");
  const divload = document.createElement("div");
  divload.classList.add("loader");
  const spanl1 = document.createElement("span");
  spanl1.classList.add("loader__element");
  divload.appendChild(spanl1);
  const spanl2 = document.createElement("span");
  spanl2.classList.add("loader__element");
  divload.appendChild(spanl2);
  const spanl3 = document.createElement("span");
  spanl3.classList.add("loader__element");
  divload.appendChild(spanl3);
  divloader.appendChild(divload);
  setTimeout(removeLoadTime, 2000);
}
//remove timer
function removeLoadTime() {
  const removediv1 = document.querySelector(".loader");
  removediv1.remove();
  chat();
}

function htmkpointer() {
  setTimeout(removeLoadTime, 3000);
  setTimeout(jump, 3300);
}
function jump() {
  const paramsString = location.search;
  const searchChat = new URLSearchParams(paramsString);
  const chatInfo = searchChat.get("rechiName1");
  alert(`שלום ${chatInfo} הזמנתך התקבלה בהצלחה!`);
}





// function sentenceInto(){
//   const sent=document.querySelector("#divchange");
//   for(let i=0;i<sentenceChange.length;i++){
//     const divch = document.createElement("p");
//     divch.innerHTML=sentenceChange[i];
//     sent.appendChild(divch);
//     setTimeout(divch.remove(), 1500);
//   }
// }
