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


var AlertName = document.getElementById("nameA");
var AlertId = document.getElementById("idA");
var AlertPhone = document.getElementById("phoneA");

var AlertFrom = document.getElementById("fromA");
var AlertTo = document.getElementById("toA");
var AlertDate = document.getElementById("dateA");

var AlertTickets = document.getElementById("ticketsA");
var Alertpay = document.getElementById("payA");


//ticketpassenger Details

var userInformationss;
if (localStorage.getItem("myBookingTickets") == null) {
    ticketsContainer = [];
}
else {
    userInformationss = JSON.parse(localStorage.getItem("myBookingTickets"));
    displayTicketInfo();
}


function displayTicketInfo() {
    if(validateInputs() == true & validatePhone()== true & validateName()== true & validateFromTicket()== true & validateToTicket()== true & validateDate()== true & validateTickets()== true & validatePay()== true & validateSameTicket()== true) 
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

    if(nameInput.value=="" || cardNum.value==""|| expiryDate.value==""|| cvcInput.value=="")
    {
    
        alert("Can't be empty");        
        
    }
    else
    {
        location.href= 'ticketInfo.html';
        deleteInfo();
        userInformationss.push(inffo);
        localStorage.setItem("myBookingTickets", JSON.stringify(userInformationss));
        add();
        console.log(userInformationss.length);

       
    }

}
}

function add() {
    var cartoona1 = ""
    var cartoona2 = ""
    for (var i = 0; i < userInformationss.length; i++) {
        cartoona1 += `
        <div>
              <h4 class="text-info mb-4"><img class="img-fluid ticketImg" src="images/ttt.png" alt="ticket">passenger Details</h4>
                    <div class="info contain ml-5">
                        <div class="info">
                        <p>`+userInformationss[i].name+`</p>
                        <p>ID: `+userInformationss[i].id+`</p>
                        <p>Phone: `+userInformationss[i].phone+`</p>
                        </div>
                        <br>
                        <br>
                        <div class="tick">
                        <p class="font-weight-bold text-secondary pb-2">`+userInformationss[i].fDate+`</p>
                        <div class="row px-3">
                            <p class="mr-5">From: `+userInformationss[i].fromTick+`</p>
                            <p>To: `+userInformationss[i].toTick+`</p>
                        </div>
                        <p><i class="fa fa-user" aria-hidden="true"></i> `+userInformationss[i].tick+` passengers</p>
                        </div>
                        <br>
                        <p class="text-success">This Trip Is Operated By: Ticketaway</p>
                    </div>
              
            </div>
        `;


        cartoona2 += `
        <div>
              <h4 class="text-info"><img class="img-fluid ticketImg" src="images/pa2.jpg" alt="ticket">Card Details</h4>
                    <div class="contain ml-5">
                        
                    <p>`+userInformationss[i].nameP+`</p>
                    <br>
                    <div class="cardInfo">
                    <p>Card Number: `+userInformationss[i].card+`</p>
                    <p>MM/YY: `+userInformationss[i].dateP+`</p>
                    <p>CVC: `+userInformationss[i].cvc+`</p>
                    </div>
                    <p class="text-success">This Trip Is Operated By: Ticketaway</p>
                    <br>
                    <br>

                    <!--<button type="button" class="btn btn-outline-primary" id="payBtn" onclick="addQr()">Get Your QR</button>-->
                    </div>
              
            </div>
        `;
        


  
    }
        infoDiv.innerHTML=cartoona1;
        payDiv.innerHTML=cartoona2;
}

function deleteInfo(Index) {

    userInformationss.splice(0,4);
    userInformationss.pop();
    localStorage.setItem("myBookingTickets", JSON.stringify(userInformationss));
    // add();  
}



//Validation
var stations = [
    "Ain Helwan",
    "Al-Sayeda Zeinab",
    "Al-Shohadaa",
    "Ain Shams",
    "Attaba",
    "Al Shohadaa",
    "Airport",
    "Ahmed Galal",
    "Adly Mansour",
    "Alf Maskan",
    "Al-Ahram",
    "Abbassiya",
    "Abdou Pasha",
    "Attaba",
    "Bab El-Shaaria",
    "Bulaq El-Dakroor",
    "Helwan",
    "Helwan University",
    "Wadi Hof",
    "Hadayek Helwan",
    "El-Maasara",
    "Tora El-Asmant",
    "Kozzika",
    "Tora El-Balad",
    "Sakanat ElMaadi",
    "Maadi",
    "Hadayek El-Maadi",
    "Dar El-Salam",
    "El-Zahraa",
    "Mar Girgis",
    "El-Malek El-Saleh",
    "Sadat",
    "Saad Zaghloul",
    "Nasser",
    "Orabi",
    "Ghamra",
    "El-Demerdash",
    "Manshiet El-Sadr",
    "Kobri El-Qobba",
    "Hammamat El-Qobba",
    "Saray ElQobba",
    "Hadayeq El-Zaitoun",
    "Helmeyet ElZaitoun",
    "El-Matareyya",
    "Ezbet ElNakhl",
    "ElMarg",
    "New El-Marg",
    "El-Mounib",
    "Sakiat Mekky",
    "Omm El-Masryeen",
    "Giza",
    "Faisal",
    "Cairo University",
    "El Bohoth",
    "Dokki",
    "Opera",
    "Mohamed Naguib",
    "Attaba",
    "Masarra",
    "Rod El-Farag",
    "St. Teresa",
    "Khalafawy",
    "Mezallat",
    "Kolleyyet El-Zeraa",
    "Shubra El-Kheima",
    "El Haykestep",
    "Omar Ibn El-Khattab",
    "Qobaa",
    "Hesham Barakat",
    "El-Nozha",
    "Nadi El-Shams",
    "Alf Maskan",
    "Heliopolis Square",
    "Haroun",
    "Koleyet El-Banat",
    "Stadium",
    "Fair Zone",
    "El-Geish",
    "Bab El-Shaaria",
    "Maspero",
    "Zamalek",
    "Kit Kat",
    "Sudan St",
    "Imbaba",
    "El-Bohy",
    "Ring Road",
    "Rod El-Farag Axis",
    "El-Tawfikeya",
    "Wadi El-Nil",
    "حلون",
    "عين حلوان",
    "جامعة حلوان",
    "وادي حوف",
    "حدائق حلوان",
    "المعصرة",
    "طرة الأسمنت",
    "كوتسيكا",
    "طرة البلد",
    "ثكنات المعادي",
    "المعادي",
    "حدائق المعادي",
    "دار السلام",
    "الزهراء",
    "مار جرجس",
    "الملك الصالح",
    "السيدة زينب",
    "سعد زغلول",
    "السادات",
    "جمال عبدالناصر",
    "عرابي",
    "الشهداء",
    "غمرة",
    "الدمرداش",
    "	منشية الصدر",
    "كوبري القبة",
    "حمامات القبة",
    "	ساراي القبة",
    "حدائق الزيتون",
    "حلمية الزيتون",
    "المطرية",
    "عين شمس",
    "عزبة النخل",
    "المرج",
    "المرج الجديدة",
    "المنيب",
    "ساقية مكي",
    "أم المصريين",
    "الجيزة",
    "فيصل",
    "جامعة القاهرة",
    "البحوث",
    "الدقي",
    "الأوبرا",
    "	محمد نجيب",
    "العتبة",
    "روض الفرج",
    "مسرة",
    "	سانتا تريزا",
    "الخلفاوي",
    "المظلات",
    "كلية الزراعة",
    "شبرا الخيمة",
    "المطار",
    "أحمد جلال",
    "عدلي منصور",
    "الهايكستب",
    "عمر بن الخطاب",
    "قباء",
    "هشام بركات",
    "النزهة",
    "نادي الشمس",
    "ألف مسكن",
    "ميدان هليوبوليس",
    "هارون",
    "الأهرام",
    "كلية البنات",
    "الإستاد",
    "أرض المعارض",
    "العباسية",
    "عبده باشا",
    "الجيش",
    "باب الشعرية",
    "ماسبيرو",
    "الزمالك",
    "الكيت كات",
    "السودان",
    "إمبابة",
    "البوهي",
    "القومية العربية",
    "الطريق الدائري",
    "محور روض الفرج",
    "التوفيقية",
    "وادي النيل",
    "جامعة الدول العربية",
    "	بولاق الدكرور",
  ];

function validateName(){
    if(nameInput.value != "")
    {
        AlertName.classList.add("invisible");
        AlertName.classList.remove("visible");
        return true;
    }
    else
    {
        AlertName.classList.add("visible");
        AlertName.classList.remove("invisible");
        return false;
    }
}
AlertName.classList.add("invisible");
nameInput.addEventListener("keyup", validateName);


function validateInputs(){
    var regexId = /^[0-9]{14}$/;
    // AlertId.classList.remove("d-block", "d-none");
    if(regexId.test(idInput.value) == true)
    {
        AlertId.classList.add("invisible");
        AlertId.classList.remove("visible");
        // AlertId.classList.remove("d-block", "d-none");
        return true;
    }
    else
    {
        AlertId.classList.add("visible");
        AlertId.classList.remove("invisible");
        return false;
    }
}
AlertId.classList.add("invisible");
idInput.addEventListener("keyup", validateInputs);


function validatePhone(){
    var regexPhone = /^(\+2|002)?01[0125][0-9]{8}$/;
    if(regexPhone.test(phoneInput.value) == true)
    {
        AlertPhone.classList.add("invisible");
        AlertPhone.classList.remove("visible");
        // AlertId.classList.remove("d-block", "d-none");
        return true;
    }
    else
    {
        AlertPhone.classList.add("visible");
        AlertPhone.classList.remove("invisible");
        return false;
    }
 } 
AlertPhone.classList.add("invisible");
phoneInput.addEventListener("keyup", validatePhone);

function validateFromTicket(){
    if(fromTicketInput.value != "")
    {
        AlertFrom.classList.add("invisible");
        AlertFrom.classList.remove("visible");
        return true;
    }
    else
    {
        AlertFrom.classList.add("visible");
        AlertFrom.classList.remove("invisible");
        return false;
    }
}
AlertFrom.classList.add("invisible");
fromTicketInput.addEventListener("keyup", validateFromTicket);

function validateToTicket(){
    if(toTicketInput.value != "")
    {
        AlertTo.classList.add("invisible");
        AlertTo.classList.remove("visible");
        return true;
    }
    else
    {
        AlertTo.classList.add("visible");
        AlertTo.classList.remove("invisible");
        return false;
    }
}
AlertTo.classList.add("invisible");
toTicketInput.addEventListener("keyup", validateToTicket);


function validateSameTicket(){
    if(toTicketInput.value == fromTicketInput.value & toTicketInput.value != "")
    {
        AlertTo.innerHTML= "Please enter different stations";
        AlertTo.classList.add("visible");
        AlertTo.classList.remove("invisible");
        return false;
    }
    else
    {
        AlertTo.classList.add("invisible");
        AlertTo.classList.remove("visible");
        return true;
    }
}
AlertTo.classList.add("invisible");
toTicketInput.addEventListener("keyup", validateSameTicket);



function validateDate(){
    if(fromDateInput.value != "")
    {
        AlertDate.classList.add("invisible");
        AlertDate.classList.remove("visible");
        return true;
    }
    else
    {
        AlertDate.classList.add("visible");
        AlertDate.classList.remove("invisible");
        return false;
    }
}
AlertDate.classList.add("invisible");
fromDateInput.addEventListener("keyup", validateDate);


function validateTickets(){
    if(ticketsInput.value <6 & ticketsInput.value >0)
    {
        AlertTickets.classList.add("invisible");
        AlertTickets.classList.remove("visible");
        return true;
    }
    else if(ticketsInput.value <0)
    {
        AlertTickets.innerHTML= "Please enter correct number";
        AlertTickets.classList.add("visible");
        AlertTickets.classList.remove("invisible");
        return false;
    }
    else
    {
        AlertTickets.classList.add("visible");
        AlertTickets.classList.remove("invisible");
        return false;
    }
}
AlertTickets.classList.add("invisible");
ticketsInput.addEventListener("keyup", validateTickets);


function validatePay(){
    if(payInput.value != "")
    {
        Alertpay.classList.add("invisible");
        Alertpay.classList.remove("visible");
        return true;
    }
    else
    {
        Alertpay.classList.add("visible");
        Alertpay.classList.remove("invisible");
        return false;
    }
}
Alertpay.classList.add("invisible");
payInput.addEventListener("keyup", validatePay);
