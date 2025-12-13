function changeOpacity() {
  document.getElementById("candyCane").style.opacity = "1";
}

const flashButton2 = document.querySelector('#flashButton2');
const flashPrompt = document.querySelector('#flashPrompt');

flashButton2.addEventListener('click', () => {
    flashPrompt.hidden = true;
    document.cookie = 'flashAllow=1; max-age=31536000; path=/;';
})

//ignore error outside of index.html

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

if (getCookie("flashAllow") === "1") {
  flashPrompt.hidden = true;
}



//Create counter with JS: increment by 1 when click on candycane if already clicked don't count