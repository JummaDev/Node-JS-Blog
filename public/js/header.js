    const currentLocation = location.href;
    // const currentLocation2 = location.href;
      const navListItems = document.querySelectorAll('.nav-list li a');
      // const navListRespItems = document.querySelectorAll('.nav-list-responsive li a');
      const navListLength = navListItems.length;
      // const navListRespLength = navListRespItems.length;

      for(i=0; i < navListLength; i++){
        if(navListItems[i].href === currentLocation) {
          navListItems[i].className = "active";
        }
      }

      // for(j=0; j < navListRespLength; j++){
      //   if(navListRespItems[j].href === currentLocation) {
      //     navListItems[j].className = "active-hamburger";
      //   }
      // }

// header media query javascript starts here
const hamburger = document.querySelector(".hamburger")
hamburger.onclick = function() {
  const navbar = document.querySelector(".nav-responsive");
  navbar.classList.toggle("heighty")

  const currentLocation2 = location.href;
  const navListRespItems = document.querySelectorAll('.header .nav-list-responsive li a');
  const navListRespLength = navListRespItems.length;

  for(j=0; j < navListRespLength; j++){
    if(navListRespItems[j].href === currentLocation2) {
      navListRespItems[j].className = "active";
    }
  }
}

// header meadia query javascript ends here