function showlogin(){
  if(document.getElementById('login').classList.contains('login-section-go'))
  document.getElementById('login').classList.remove('login-section-go');
}
function hideLogin(){
  if(!document.getElementById('login').classList.contains('login-section-go'))
  document.getElementById('login').classList.add('login-section-go');
}
const lgnBtn = document.getElementById('lgn-btn');
const hide = document.getElementById('hide-login');
hide.addEventListener('click',()=>hideLogin())
lgnBtn.addEventListener('click',()=>showlogin())