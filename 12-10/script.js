function getCookie(name) {
  const cookies = document.cookie.split('; ');

  let result = null;

  cookies.forEach(cookie => {
    if (cookie.indexOf(name + '=') == 0) {
      result = cookie.substring(name.length + 1);
    }
  });
  return result;
}

function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/;`;
}

const flashButton2 = document.querySelector('#flashButton2');
const flashPrompt = document.querySelector('#flashPrompt');

if (flashButton2 && flashPrompt) {
  flashButton2.addEventListener('click', () => {
    flashPrompt.hidden = true;
    setCookie('flashAllow', '1');
  });

  if (getCookie('flashAllow') === '1') {
    flashPrompt.hidden = true;
  }
}




//credit to clanker for the candycanes
const candyCounterContainer = document.getElementById('candyCounterContainer');

fetch('../candycanecounter/candyCounter.html').then(res => res.text()).then(data => {
    candyCounterContainer.innerHTML = data;

    const candyCounter = document.getElementById('candyCounter');
    const count = parseInt(getCookie('candyCount') || '0');
    candyCounter.querySelector('.candyCountNumber').textContent = count;
    candyCounter.style.opacity = count > 0 ? '1' : '0';
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.candyCane').forEach(cane => {
    const id = cane.dataset.id;

    if (getCookie(`candyClicked_${id}`) === '1') {
      cane.style.opacity = '1';
      cane.style.pointerEvents = 'none';
    } else {
      cane.style.opacity = '0.4';
    }

    cane.addEventListener('click', () => clickCandy(cane));
  });
});

function clickCandy(element) {
  const id = element.dataset.id;

  if (getCookie(`candyClicked_${id}`) === '1') return;

  let candyCount = parseInt(getCookie('candyCount') || '0');
  if (candyCount < 6) candyCount++;
  setCookie('candyCount', candyCount);

  setCookie(`candyClicked_${id}`, '1');

  const candyCounter = document.getElementById('candyCounter');
  if (candyCounter) {
      candyCounter.style.opacity = '1';
      candyCounter.querySelector('.candyCountNumber').textContent = candyCount;
  }

  element.style.opacity = '1';
  element.style.pointerEvents = 'none';
}

function beGoneScreen() {
  document.getElementById("deleteScreen").style.background = "black";
  document.getElementById("nuked").src = "";
  document.getElementById("nuked2").src = "";
  document.getElementById("nuked3").src = "";
  document.getElementById("nuked4").src = "";
  document.getElementById("nuked5").src = "";
  document.getElementById("nuked6").src = "";

  setTimeout(alertMessage, 2000)
}

function alertMessage() {
  alert("Happy Christmas!!!")
}

if (getCookie('candyCount') == 6) {
  document.getElementById("nuked").src = "../Kaboom.gif";
  document.getElementById("nuked2").src = "../Kaboom.gif";
  document.getElementById("nuked3").src = "../Kaboom.gif";
  document.getElementById("nuked4").src = "../Kaboom.gif";
  document.getElementById("nuked5").src = "../Kaboom.gif";
  document.getElementById("nuked6").src = "../Kaboom.gif";

  setTimeout(beGoneScreen, 5000)
}
