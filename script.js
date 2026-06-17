

console.log("Portfolio JS Loaded Successfully");

document.getElementById('year').textContent = new Date().getFullYear();


const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', function () {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(function (a) {
  a.addEventListener('click', function () { navLinks.classList.remove('open'); });
});

function openCert(src) {
  document.getElementById('certImg').src = src;
  document.getElementById('certModal').classList.add('open');
}
function closeCert(e, force) {
  if (force || e.target.id === 'certModal') {
    document.getElementById('certModal').classList.remove('open');
  }
}


document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const f = e.target;
  const name = f.name.value;
  const email = f.email.value;
  const phone = f.phone.value;
  const message = f.message.value;
  const body =
    'Name: ' + name + '%0D%0A' +
    'Email: ' + email + '%0D%0A' +
    'Phone: ' + phone + '%0D%0A%0D%0A' +
    message;
  window.location.href =
    'mailto:sardarsathiamarsingh@gmail.com?subject=Portfolio Contact from ' +
    encodeURIComponent(name) + '&body=' + body;
  document.getElementById('formNote').textContent =
    'Opening your email app... Thanks for reaching out!';
  f.reset();
});
