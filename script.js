function getPassword(){
    let chars = "01234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()-_=+[{}]<>,.?/";
    let passwordLength = 16;
    let password = "";

    for(let i=0; i<passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementsByClassName("password").value = password;
}
getPassword();

document.getElementsByClassName('password').addEventListener('click', async event => {
    if (!navigator.clipboard) {
        // Clipboard API not available
        return
      }
      const text = event.target.innerText
      try {
        await navigator.clipboard.writeText(text)
        event.target.textContent = 'Copied to clipboard'
      } catch (err) {
        console.error('Failed to copy!', err)
      }
})