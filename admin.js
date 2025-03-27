function logout() {
    alert('Cerrando sesión...');
    window.location.href = 'index.html';
  }  
  
  document.getElementById('logoutButton').addEventListener('click', logout);
  
  function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }
  
  window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
      if (event.target === modals[i]) {
        modals[i].style.display = 'none';
      }
    }
  };
  