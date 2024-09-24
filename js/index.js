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
})


const btnFeni = document.getElementById("donate-btn-feni");
btnFeni.addEventListener("click", function(){
    const feniDonate = parseFloat(document.getElementById("feni-donate").value);
    const addedBalanceFeni = parseFloat(document.getElementById("added-balance-feni").innerText);
    const mainBalanceTwo = parseFloat(document.getElementById("main-balance").innerText);

    const minusBalance = mainBalanceTwo - feniDonate;
    const totalBalanceTwo = feniDonate + addedBalanceFeni;
    const showTwo = document.getElementById("added-balance-feni");
    showTwo.innerText = totalBalanceTwo;
    const minusTwo = document.getElementById("main-balance");
    minusTwo.innerText = minusBalance;
})

// 3rd card

const btnQuata = document.getElementById("quota-btn");
btnQuata.addEventListener("click", function(){
    const quotaDonate = parseFloat(document.getElementById("quota-donate").value);
    const addedBalanceQuota = parseFloat(document.getElementById("added-balance-quota").innerText);
    const mainBalanceThree = parseFloat(document.getElementById("main-balance").innerText);
    const minusBalanceTwo = mainBalanceThree - quotaDonate;
    const totalBalanceThree = quotaDonate + addedBalanceQuota;
    const showThree = document.getElementById("added-balance-quota");
    showThree.innerText = totalBalanceThree;
    const minusThree = document.getElementById("main-balance");
    minusThree.innerText = minusBalanceTwo;
})