/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (loginPass, loginEye) =>{
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye)

   iconEye.addEventListener('click', () =>{
      // Change password to text
      if(input.type === 'password'){
         // Switch to text
         input.type = 'text'

         // Icon change
         iconEye.classList.add('ri-eye-line')
         iconEye.classList.remove('ri-eye-off-line')
      } else{
         // Change to password
         input.type = 'password'

         // Icon change
         iconEye.classList.remove('ri-eye-line')
         iconEye.classList.add('ri-eye-off-line')
      }
   })
}

showHiddenPass('login-pass','login-eye')

const user = {
   username: 'Ziki',
   password: '123',
}
const rand1 = Math.floor(Math.random() * 100) + 1
const rand2 = Math.floor(Math.random() * 10) + 1

const jw1 = document.getElementById('jw1')
jw1.innerHTML='<input type="text" value="'+rand1+'+'+rand2+'" class="mt-1 px-4 text-center py-2 w-full border rounded-md focus:ring focus:ring-indigo-300"/>'
const jawaban =rand1+rand2
btnLoginElm.addEventListener('click', function () {
    const username = usernameElm.value
    const password = passwordElm.value
    const jawabannya = jawabElm.value

    if (username !== "" && password !== "") {
        if ((username.toLowerCase() === user.username.toLowerCase()) && (password === user.password)) {
            if(jawabannya == jawaban){
                alert('Anda Berhasil Login')
                landingElm.style.display = 'none'
               
            } else {
                alert('Gagal Login, Jawaban Anda Salah')
            }            

        } else {
            alert('Username dan Password anda salah')
        }
    } else {
        alert('Username dan Password harus diisi dulu')
    }

})