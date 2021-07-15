const users = [
    {username:'rafi',password:'123'},
    {username:'khan',password:'123'}
]
const signin = () => {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const content = document.getElementById('content');
    const sec = document.getElementById('sec');
   const arr = users.filter((user)=>user.username===username.value && user.password===password.value)
   if(arr.length===1){
       localStorage.setItem('token','123');
       content.style.display = 'block';
       sec.style.display = 'none';
   }
}




