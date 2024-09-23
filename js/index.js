const donateButton = document.getElementById("donate-btn");
donateButton.addEventListener("click", function(){
    const noakhaliDonate = parseFloat(document.getElementById("noakhali-donate").value);
    const mainBalance = parseFloat(document.getElementById("main-balance").innerText);
    const addedBalance = parseFloat(document.getElementById("added-balance").innerText);
    
    const sumBalance = mainBalance - noakhaliDonate;
    const totalBalance = noakhaliDonate + addedBalance;
    
    const show = document.getElementById("added-balance");
    show.innerText = totalBalance;

    const minus = document.getElementById("main-balance");
    minus.innerText = sumBalance;

    if (mainBalance < 0 ){
        alert("you don/t have money");
    }
})