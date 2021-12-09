let elBtnBox = document.querySelector(".box__btns-box");
let nameArr = ['fa-hand-rock','fa-hand-paper','fa-hand-scissors'];
let elModal = document.querySelector(".box__modal");
let player = 0;
let computer = 0;

nameArr.forEach(item =>{
    elBtnBox.innerHTML = elBtnBox.innerHTML +  `<button class="box__hands-bt"><i class="fas ${item}"></i></button>`
})

elBtnBox.querySelectorAll(".box__hands-bt").forEach(item =>{
    item.addEventListener("click", e => {
        copmuter(e.target);
    })
})


function copmuter (btn){
    for (let i = 0; i < 1; i++) {
        let rand1 = Math.floor(Math.random() * 3);
        let rand2 = Math.floor(Math.random() * 3);
        let rand3 = nameArr[rand1];
        nameArr[rand1] = nameArr[rand2];
        nameArr[rand2] = rand3;
        let btnValue = btn.querySelector(".fas");
       
        if(nameArr[0] == "fa-hand-rock" && btnValue.classList[1] == "fa-hand-paper"){
            player += 1;
            showModal(btnValue.classList[1],"Yutingiz");
        }
        else if(nameArr[0] == "fa-hand-rock" && btnValue.classList[1] == "fa-hand-scissors"){
            computer += 1;
            showModal(nameArr[0],"Yutqazdingiz");
            console.log(nameArr[0]);
        }
        else if(nameArr[0] == "fa-hand-rock" && btnValue.classList[1] == "fa-hand-rock"){
            showModal(btnValue.classList[1],"Teng");
            console.log(nameArr[0]);
        }
        else if(nameArr[0] == "fa-hand-paper" && btnValue.classList[1] == "fa-hand-scissors"){
            player += 1;
            showModal(btnValue.classList[1],"Yutingiz");
            console.log(nameArr[0]);
        }
        else if(nameArr[0] == "fa-hand-paper" && btnValue.classList[1] == "fa-hand-rock"){
            computer += 1;
            showModal(nameArr[0],"Yutqazdigiz");
            console.log(nameArr[0]);
        }
        else if(nameArr[0] == "fa-hand-paper" && btnValue.classList[1] == "fa-hand-paper"){
            showModal(btnValue.classList[1],"Teng");
            console.log(nameArr[0]);
        }
        else if(nameArr[0] == "fa-hand-scissors" && btnValue.classList[1] == "fa-hand-rock"){
            player += 1;
            showModal(btnValue.classList[1],"Yutingiz");
            console.log(nameArr[0]);
        }
        else if(nameArr[0] == "fa-hand-scissors" && btnValue.classList[1] == "fa-hand-paper"){
            computer += 1;
            showModal(nameArr[0],"Yutqazdigiz");
            console.log(nameArr[0]);
        }
        else if(nameArr[0] == "fa-hand-scissors" && btnValue.classList[1] == "fa-hand-scissors"){
            showModal(btnValue.classList[1],"Teng");
            console.log(nameArr[0]);
        }
    }

    if(computer != 0){
        document.querySelector(".box__count--computer").innerHTML = `${computer}`;
    }
    if(player != 0){
        document.querySelector(".box__count--pleyer").innerHTML = `${player}`;
    }
}

function showModal(item,result){
    elModal.innerHTML = `<div class="d-flex flex-column align-items-center"><span class="box__modal-result">${result}</span><button class="box__hands-bt"><i class="fas ${item}"></i></button></div>`
    let elIcon = document.querySelector(".box__modal i").classList[1] = item;
    elModal.classList.add("show_modal");
    let elBoxModalBg = document.querySelector(".box__modal--bg");
    elBoxModalBg.classList.add("show_modal-bg");

    elBoxModalBg.addEventListener("click", item =>{
        elModal.classList.remove("show_modal");
        elBoxModalBg.classList.remove("show_modal-bg");
    })
}