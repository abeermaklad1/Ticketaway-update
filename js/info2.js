var infoBtn = document.getElementById("infoBtn");
var formInfo = document.getElementById("formInfo");



var userNameInput = document.getElementById("name");
var idInput = document.getElementById("id");
var fromTicketInput = document.getElementById("st1");
var toTicketInput = document.getElementById("st2");
var fromDateInput = document.getElementById("date");
var phoneInput = document.getElementById("phone");
var ticketsInput = document.getElementById("tickets");
var payInput = document.getElementById("pay");
var infoDiv = document.getElementById("ticketInformation");



var nameInput = document.getElementById("name");
var cardNum = document.getElementById("cardnum");
var expiryDate = document.getElementById("expiryDate");
var cvcInput = document.getElementById("cvc");
var payDiv = document.getElementById("paymentInformation");


var payF = document.getElementById("paymentForm");
function hidePayment(){
    if(nameInput.value !="" || cardNum.value !=""|| expiryDate.value !=""|| cvcInput.value=="")
    {
    
        payF.classList.add("d-none");
     
        
    }
}

function displayBtn() {

    if(userNameInput.value !="" & fromTicketInput.value !="" & toTicketInput.value !="" & fromDateInput.value !="" & phoneInput.value !=""){
        infoBtn.classList.remove("d-none");
        infoBtn.classList.add("d-block");
    }

       
        

}


infoUser = JSON.parse(localStorage.getItem("Tickets"));

function displayTicketInfo() {
{

    var inffo = {
        name: userNameInput.value,
        fromTick: fromTicketInput.value,
        toTick: toTicketInput.value,
        fDate: fromDateInput.value,
        phone: phoneInput.value,
        tick: ticketsInput.value,
        // pay: payInput.value,
        id: idInput.value,
        nameP: nameInput.value,
        card: cardNum.value,
        dateP: expiryDate.value,
        cvc: cvcInput.value,
    };

    location.href= 'ticketInfo.html';
    
    infoUser.push(inffo);
    localStorage.setItem("Tickets", JSON.stringify(infoUser));
    add();

    console.log("HHHHHHHHHHHHHHHH")

}
    
}


function add() {
    var cartoona1 = ""
    var cartoona2 = ""
    // for (var i = 0; i < userInformationss.length; i++) {
        // cartoona1 += `
        // <div>
        //       <h4 class="text-info mb-4"><img class="img-fluid ticketImg" src="images/ttt.png" alt="ticket">passenger Details</h4>
        //             <div class="info contain ml-5">
        //                 <div class="info">
        //                 <p>`+inffo.name+`</p>
        //                 <p>ID: `+inffo.id+`</p>
        //                 <p>Phone: `+inffo.phone+`</p>
        //                 </div>
        //                 <br>
        //                 <br>
        //                 <div class="tick">
        //                 <p class="font-weight-bold text-secondary pb-2">`+inffo.fDate+`</p>
        //                 <div class="row px-3">
        //                     <p class="mr-5">From: `+inffo.fromTick+`</p>
        //                     <p>To: `+inffo.toTick+`</p>
        //                 </div>
        //                 <p><i class="fa fa-user" aria-hidden="true"></i> `+inffo.tick+` passengers</p>
        //                 </div>
        //                 <br>
        //                 <p class="text-success">This Trip Is Operated By: Ticketaway</p>
        //             </div>
              
        //     </div>
        // `;

        cartoona1=userNameInput.value;


        // cartoona2 += `
        // <div>
        //       <h4 class="text-info"><img class="img-fluid ticketImg" src="images/pa2.jpg" alt="ticket">Card Details</h4>
        //             <div class="contain ml-5">
                        
        //             <p>`+inffo.nameP+`</p>
        //             <br>
        //             <div class="cardInfo">
        //             <p>Card Number: `+inffo.card+`</p>
        //             <p>MM/YY: `+inffo.dateP+`</p>
        //             <p>CVC: `+inffo.cvc+`</p>
        //             </div>
        //             <p class="text-success">This Trip Is Operated By: Ticketaway</p>
        //             <br>
        //             <br>

        //             <!--<button type="button" class="btn btn-outline-primary" id="payBtn" onclick="addQr()">Get Your QR</button>-->
        //             </div>
              
        //     </div>
        // `;
        

        cartoona2="gggggg"

  
    // }
        infoDiv.innerHTML=cartoona1;
        payDiv.innerHTML=cartoona2;
}
