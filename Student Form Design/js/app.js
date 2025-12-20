let userForm = document.querySelector('.form');

let inputUserName = document.querySelector('.firstnameinput');

let inputUserLastName = document.querySelector('.lastnameinput');

let inputUserAge = document.querySelector('.inputuserage');

let inputUserJob = document.querySelector('.userjobinput');

let inputUserGmail = document.querySelector('.usergmailinput');

let inputUserPostalCode = document.querySelector('.userpostalcodeinput');

let inputUserAddress = document.querySelector('.useraddressinput');

let searchBox = document.querySelector('#searchBox');

let container = document.querySelector('#box');

let allUsers = JSON.parse(localStorage.getItem('students')) || [];

displayUsers(allUsers);

function displayUsers(users) {

    container.innerHTML = "";

    users.forEach(user => {
        
        let div = document.createElement("div");
        
        div.classList.add("user-item");

        div.innerHTML = `

            <div>your name : ${user.firstName}</div>

            <div>your lastname : ${user.lastName}</div>

            <div>your age : ${user.userAge}</div>

            <div>your job : ${user.userJob}</div>

            <div>your Gmail : ${user.userGmail}</div>

            <div>your postal code : ${user.userPostalCode}</div>

            <div>your address : ${user.userAddress}</div>
            
            <button class="delete-button" user-id="${user.id}">DELETE</button>
            
            <hr>

        `;

        container.appendChild(div);

    });
}

userForm.addEventListener("submit", (e) => {
    
    e.preventDefault();

    function etelaat () {
        return {
            id: Date.now(),
            firstName: inputUserName.value,
            lastName: inputUserLastName.value,
            userAge: Number(inputUserAge.value),
            userJob: inputUserJob.value,
            userGmail: inputUserGmail.value,
            userPostalCode: inputUserPostalCode.value,
            userAddress: inputUserAddress.value,
        }
    }

    let user = etelaat();



    if (user.firstName.trim().length <= 2){
        alert("اسم وارد شده کوتاهه (بیشتر از 2 حرف وارد کن)");
        return;
    }

    else if (user.lastName.trim().length < 5){
        alert('فامیلی وارد شده کوتاهه (5 حرف یا بیشتر از 5 حرف وارد کنید)');
        return;
    }

    else if (user.userAge < 10 || user.userAge > 70){
        alert("سن شما برای ثبت اطلاعات کم است");
        return;
    }

    else if (user.userJob.trim().length < 4){
        alert("شغل وارد شده کوتاهه (4 حرف یا بیشتر از 4 حرف وارد کن)");
        return;
    }

    else if (user.userGmail.trim().length < 10){
        alert("جیمیل وارد شده کوتاهه (10 حرف یا بیشتر از 10 حرف وارد کن)");
        return;
    }

    else if (user.userPostalCode.trim().length !== 10){
        alert("کد پستی باید 10 رقم باشد");
        return;
    }

    else if (user.userAddress.trim().length < 3){
        alert("آدرس را اشتباه وارد کردین ، لطفا آدرس را درست وارد کنید");
        return;
    }

    if (inputUserAddress.value.includes('tehran')) {
        alert('به دلیل اینکه شما در تهران هستید بسته شما زودتر به دستتان میرسد');
    }
    
    allUsers.push(user);
    
    localStorage.setItem("students", JSON.stringify(allUsers));

    displayUsers(allUsers);
});

searchBox.addEventListener("input", () => {

    let searchValue = searchBox.value.toLowerCase();

    let filtered = allUsers.filter(user =>

        user.firstName.toLowerCase().includes(searchValue) ||

        user.lastName.toLowerCase().includes(searchValue) ||

        user.userJob.toLowerCase().includes(searchValue) ||

        user.userAddress.toLowerCase().includes(searchValue)
    );

    displayUsers(filtered);

});

container.addEventListener("click", (e) => {

    if (e.target.classList.contains("delete-button")) {

        let id = Number(e.target.getAttribute("user-id"));
        
        allUsers = allUsers.filter(user => user.id !== id);

        localStorage.setItem("students", JSON.stringify(allUsers));

        displayUsers(allUsers);
    
    }

});
