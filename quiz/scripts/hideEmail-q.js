/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu'];

window.onload = function hideEmail() {
    const list = document.getElementById('emails')
    list.innerHTML = '';
    for (const email of emails) {
        if (email.match(/^.+@(.+\.)*@northeastern.edu$/)){
            console.log(email); 
            let list_item = document.createElement("li");
            list_item.textContent = email.slice(0, email.indexOf('@')).replace(/./g, "*"); 
            list.appendChild(list_item); 
        }else{
            console.log(email);
        }
    }
}