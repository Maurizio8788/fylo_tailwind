const themeToggleBtn = document.querySelector("#theme-toggle");
const themeToggleDarkIcon = document.querySelector("#theme-toggle-dark-icon");
const themeToggleLightIcon = document.querySelector("#theme-toggle-light-icon");

if( localStorage.getItem("color-theme") === 'dark' || ( !("color-theme" in localStorage ) && window.matchMedia("(prefers-color-scheme:dark)").matches ) ) {
    //Show Light icon
    themeToggleLightIcon.classList.remove("hidden");
  } else {
      themeToggleDarkIcon.classList.remove("hidden");
  }

  themeToggleBtn.addEventListener("click",  toggleMode);

  function toggleMode() {
      //toggle icon
      themeToggleDarkIcon.classList.toggle("hidden");
      themeToggleLightIcon.classList.toggle("hidden");

      //If is set localstorage

      if(localStorage.getItem("color-theme")) {
          // If Light, make dark and save in LS
          if (localStorage.getItem("color-theme") === 'light') {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
          } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
          }
      } else {
          //If not in localstorage
          if( document.documentElement.classList.contains("dark") ) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
          } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
          }
      }
  }

