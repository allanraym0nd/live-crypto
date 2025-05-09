
var btc =document.getElementById('bitcoin');
var eth =document.getElementById('ethereum');
var doge =document.getElementById('dogecoin');


// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin,ethereum,dogecoin",
//     "method": "GET",
//     "headers": {
//         "accept": "application/json",
        
     
//     }
//   };

//   $.ajax(settings).done(function (response) {
//       btc.innerHTML =response.bitcoin.usd
//       eth.innerHTML =response.ethereum.usd
//       doge.innerHTML =response.dogecoin.usd
//   });



fetch ("https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin,ethereum,dogecoin")
.then(response => response.json())
.then(data => {
     btc.innerHTML= data.bitcoin.usd;
     eth.innerHTML= data.ethereum.usd;
     doge.innerHTML= data.dogecoin.usd;
    

})
.catch(error => {
    console.error("Error fetching crypto prices:", error);
});

