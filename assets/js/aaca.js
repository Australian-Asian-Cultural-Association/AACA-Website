/* AACA website – small helper script (mobile menu + footer year) */
(function () {
  var btn = document.querySelector('.aaca-nav__toggle');
  var nav = document.getElementById('aaca-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  var y = document.getElementById('aaca-year');
  if (y) { y.textContent = new Date().getFullYear(); }
})();
