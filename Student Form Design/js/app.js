let userForm = document.querySelector('.form');

let inputUserName = document.querySelector('.firstnameinput');

let inputUserLastName = document.querySelector('.lastnameinput');

let inputUserAge = document.querySelector('.inputuserage');

let inputUserJob = document.querySelector('.userjobinput');

let inputUserSport = document.querySelector('.usersportinput');

let inputUserPostalCode = document.querySelector('.userpostalcodeinput');

let inputUserAddress = document.querySelector('.useraddressinput');

userForm.addEventListener("submit" , (e) => {
    
    e.preventDefault();
    
    let address = inputUserAddress.value;

    let userAddress = inputUserAddress.value.toLowerCase();

    let user = {
        firstName : e.target.firstName.value,
        lastName : e.target.lastName.value,
        userAge : Number(inputUserAge.value),
        userJob : e.target.userJob.value,
        userSport : e.target.userSport.value,
        userPostalCode : e.target.userPostalCode.value,
        userAddress : e.target.userAddress.value,
        userAddress : userAddress
    }

    if (inputUserName.value.trim().length <= 2) {
        alert('لطفا یک اسم بیشتر از 3 حرف وارد کنید');
        return
    }

    else if (inputUserLastName.value.trim().length < 5) {
        alert('لطفا یک فامیلیه بیشتر از 5 حرف وارد کنید');
        return
    }

    else if (inputUserAge.value < 10) {
        alert('متاسفانه سن شما برای ثبت اطلاعات کم است');
        return
    }

    else if (inputUserJob.value.trim().length < 4) {
        alert('لطفا شغلی وارد کنید که بیشتر از 4 حرف داشته باشد');
        return
    }

    else if (inputUserSport.value.trim().length < 4) {
        alert('لطفا ورزشی وارد کنید که بیشتر از 4 حرف داشته باشد');
        return
    }

    else if (inputUserPostalCode.value.trim().length !== 10) {
        alert('کد پستی نمیتواند کمتر یا بیشتر از 10 رقم باشد');
        return
    }

    else if (address !== address.trim() || inputUserAddress.value.length < 3) {
        alert('آدرس را اشتباه وارد کردید ، لطفا آدرس را درست وارد کنید');
        return
    }

    if (userAddress.includes('tehran')) {
        alert('به دلیل اینکه شما در تهران هستید بسته شما زود تر به دستتان میرسد');
    }
        
        let bax = document.createElement('div');

        let box = document.getElementById("box");
        
        bax.classList.add("bax");

        box.innerHTML = `
            your name : ${user.firstName} ✔
            your lastname : ${user.lastName} ✔
            your age : ${user.userAge} ✔
            your job : ${user.userJob} ✔
            your sport : ${user.userSport} ✔
            your postal code : ${user.userPostalCode} ✔
            your address : ${user.userAddress} ✔
        `

        document.body.appendChild(bax);
});