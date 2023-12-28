const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const userForm = document.getElementById('userForm');

loginBtn.addEventListener('click', () => {
  // Aqui você pode adicionar lógica para o login
  // Exemplo: exibir um formulário de login
  alert('Implemente a lógica de login!');
});

logoutBtn.addEventListener('click', () => {
  // Aqui você pode adicionar lógica para o logout
  // Exemplo: deslogar o usuário e esconder botão de logout
  alert('Implemente a lógica de logout!');
});

userForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Aqui você pode adicionar lógica para o cadastro do usuário
  // Exemplo: coletar dados do formulário e realizar cadastro
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  alert(`Implemente a lógica de cadastro para ${name} (${email})!`);
});
