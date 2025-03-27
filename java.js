// Obtener elementos
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");
const closeLogin = document.getElementById("closeLogin");
const closeRegister = document.getElementById("closeRegister");
const docBtn = document.getElementById("docBtn");
const contactBtn = document.getElementById("contactBtn");
const moreInfoBtn = document.getElementById("moreInfoBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

// Datos de administradores
const adminAccounts = [
  { username: 'esteban', password: 'esteban123' },
  { username: 'sebastian', password: 'sebastian123' },
  { username: 'nicolas', password: 'nicolas123' }
];

// Datos de usuarios básicos
const basicUsers = [
  { username: 'santiago', password: 'santiago456' }
];

// Abrir ventana de iniciar sesión
if (loginBtn) {
  loginBtn.addEventListener('click', function() {
    if (loginModal) {
      loginModal.style.display = "block";
    }
  });
}

// Abrir ventana de registro
if (registerBtn) {
  registerBtn.addEventListener('click', function() {
    if (registerModal) {
      registerModal.style.display = "block";
    }
  });
}

// Cerrar ventana de iniciar sesión
if (closeLogin) {
  closeLogin.addEventListener('click', function() {
    if (loginModal) {
      loginModal.style.display = "none";
    }
  });
}

// Cerrar ventana de registro
if (closeRegister) {
  closeRegister.addEventListener('click', function() {
    if (registerModal) {
      registerModal.style.display = "none";
    }
  });
}

// Manejo del envío de formulario de registro
const registerSubmit = document.getElementById("registerSubmit");
if (registerSubmit) {
  registerSubmit.addEventListener('click', function() {
    const username = document.getElementById("registerUsername").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const hasTDAH = document.getElementById("hasTDAH").checked;

    if (!username || !email || !password || !confirmPassword) {
      alert("Por favor completa todos los campos.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    alert(`Registro exitoso!\nUsuario: ${username}\nCorreo: ${email}\nTDAH: ${hasTDAH ? 'Sí' : 'No'}`);
    registerModal.style.display = "none";
  });
}

// Agregar funcionalidad de inicio de sesión
const loginSubmit = document.getElementById('loginSubmit');
if (loginSubmit) {
  loginSubmit.addEventListener('click', function() {
    const username = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const isAdmin = adminAccounts.some(account => account.username === username && account.password === password);
    const isBasicUser  = basicUsers.some(user => user.username === username && user.password === password);

    if (isAdmin) {
      alert('Inicio de sesión como Administrador. Redirigiendo...');
      window.location.href = 'admin.html';
    } else if (isBasicUser ) {
      alert('Inicio de sesión como Usuario. Redirigiendo...');
      window.location.href = 'usuarios.html';
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  });
}

// Funcionalidad de botones de documentación y contacto
if (docBtn) {
  docBtn.addEventListener('click', function() {
    window.location.href = 'documentacion.html';
  });
}

if (contactBtn) {
  contactBtn.addEventListener('click', function() {
    window.location.href = 'contacto.html';
  });
}

// Mostrar/Ocultar menú desplegable
if (moreInfoBtn) {
  moreInfoBtn.addEventListener('click', function() {
    if (dropdownMenu) {
      dropdownMenu.classList.toggle('show');
    }
  });
}

// Ocultar el menú desplegable al hacer clic fuera
window.addEventListener('click', function(event) {
  if (!event.target.matches('#moreInfoBtn')) {
    if (dropdownMenu && dropdownMenu.classList.contains('show')) {
      dropdownMenu.classList.remove('show');
    }
  }
});