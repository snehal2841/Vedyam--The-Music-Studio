window.onscroll = () => {
  const nav = document.querySelector('#mainNavbar');
  if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
};