"use strict";

/*
var modal = document.getElementById("id01");

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
*/
function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function (e) {
    var a,
        b,
        i,
        val = this.value;
    closeAllLists();

    if (!val) {
      return false;
    }

    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);

    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("DIV");
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener("click", function (e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");

    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();

      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");

    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}
/*An array containing all the staions names in the world:*/


var stations = ["Ain Helwan", "Al-Sayeda Zeinab", "Al-Shohadaa", "Ain Shams", "Attaba", "Al Shohadaa", "Airport", "Ahmed Galal", "Adly Mansour", "Alf Maskan", "Al-Ahram", "Abbassiya", "Abdou Pasha", "Attaba", "Bab El-Shaaria", "Bulaq El-Dakroor", "Helwan", "Helwan University", "Wadi Hof", "Hadayek Helwan", "El-Maasara", "Tora El-Asmant", "Kozzika", "Tora El-Balad", "Sakanat ElMaadi", "Maadi", "Hadayek El-Maadi", "Dar El-Salam", "El-Zahraa", "Mar Girgis", "El-Malek El-Saleh", "Sadat", "Saad Zaghloul", "Nasser", "Orabi", "Ghamra", "El-Demerdash", "Manshiet El-Sadr", "Kobri El-Qobba", "Hammamat El-Qobba", "Saray ElQobba", "Hadayeq El-Zaitoun", "Helmeyet ElZaitoun", "El-Matareyya", "Ezbet ElNakhl", "ElMarg", "New El-Marg", "El-Mounib", "Sakiat Mekky", "Omm El-Masryeen", "Giza", "Faisal", "Cairo University", "El Bohoth", "Dokki", "Opera", "Mohamed Naguib", "Attaba", "Masarra", "Rod El-Farag", "St. Teresa", "Khalafawy", "Mezallat", "Kolleyyet El-Zeraa", "Shubra El-Kheima", "El Haykestep", "Omar Ibn El-Khattab", "Qobaa", "Hesham Barakat", "El-Nozha", "Nadi El-Shams", "Alf Maskan", "Heliopolis Square", "Haroun", "Koleyet El-Banat", "Stadium", "Fair Zone", "El-Geish", "Bab El-Shaaria", "Maspero", "Zamalek", "Kit Kat", "Sudan St", "Imbaba", "El-Bohy", "Ring Road", "Rod El-Farag Axis", "El-Tawfikeya", "Wadi El-Nil", "حلون", "عين حلوان", "جامعة حلوان", "وادي حوف", "حدائق حلوان", "المعصرة", "طرة الأسمنت", "كوتسيكا", "طرة البلد", "ثكنات المعادي", "المعادي", "حدائق المعادي", "دار السلام", "الزهراء", "مار جرجس", "الملك الصالح", "السيدة زينب", "سعد زغلول", "السادات", "جمال عبدالناصر", "عرابي", "الشهداء", "غمرة", "الدمرداش", "	منشية الصدر", "كوبري القبة", "حمامات القبة", "	ساراي القبة", "حدائق الزيتون", "حلمية الزيتون", "المطرية", "عين شمس", "عزبة النخل", "المرج", "المرج الجديدة", "المنيب", "ساقية مكي", "أم المصريين", "الجيزة", "فيصل", "جامعة القاهرة", "البحوث", "الدقي", "الأوبرا", "	محمد نجيب", "العتبة", "روض الفرج", "مسرة", "	سانتا تريزا", "الخلفاوي", "المظلات", "كلية الزراعة", "شبرا الخيمة", "المطار", "أحمد جلال", "عدلي منصور", "الهايكستب", "عمر بن الخطاب", "قباء", "هشام بركات", "النزهة", "نادي الشمس", "ألف مسكن", "ميدان هليوبوليس", "هارون", "الأهرام", "كلية البنات", "الإستاد", "أرض المعارض", "العباسية", "عبده باشا", "الجيش", "باب الشعرية", "ماسبيرو", "الزمالك", "الكيت كات", "السودان", "إمبابة", "البوهي", "القومية العربية", "الطريق الدائري", "محور روض الفرج", "التوفيقية", "وادي النيل", "جامعة الدول العربية", "	بولاق الدكرور"];
autocomplete(document.getElementById("st1"), stations);
autocomplete(document.getElementById("st2"), stations);

function moo() {
  var staions = ["Ain Helwan", "Al-Sayeda Zeinab", "Al-Shohadaa", "Ain Shams", "Attaba", "Al Shohadaa", "Airport", "Ahmed Galal", "Adly Mansour", "Alf Maskan", "Al-Ahram", "Abbassiya", "Abdou Pasha", "Attaba", "Bab El-Shaaria", "Bulaq El-Dakroor", "Helwan", "Helwan University", "Wadi Hof", "Hadayek Helwan", "El-Maasara", "Tora El-Asmant", "Kozzika", "Tora El-Balad", "Sakanat ElMaadi", "Maadi", "Hadayek El-Maadi", "Dar El-Salam", "El-Zahraa", "Mar Girgis", "El-Malek El-Saleh", "Sadat", "Saad Zaghloul", "Nasser", "Orabi", "Ghamra", "El-Demerdash", "Manshiet El-Sadr", "Kobri El-Qobba", "Hammamat El-Qobba", "Saray ElQobba", "Hadayeq El-Zaitoun", "Helmeyet ElZaitoun", "El-Matareyya", "Ezbet ElNakhl", "ElMarg", "New El-Marg", "El-Mounib", "Sakiat Mekky", "Omm El-Masryeen", "Giza", "Faisal", "Cairo University", "El Bohoth", "Dokki", "Opera", "Mohamed Naguib", "Attaba", "Masarra", "Rod El-Farag", "St. Teresa", "Khalafawy", "Mezallat", "Kolleyyet El-Zeraa", "Shubra El-Kheima", "El Haykestep", "Omar Ibn El-Khattab", "Qobaa", "Hesham Barakat", "El-Nozha", "Nadi El-Shams", "Alf Maskan", "Heliopolis Square", "Haroun", "Koleyet El-Banat", "Stadium", "Fair Zone", "El-Geish", "Bab El-Shaaria", "Maspero", "Zamalek", "Kit Kat", "Sudan St", "Imbaba", "El-Bohy", "Ring Road", "Rod El-Farag Axis", "El-Tawfikeya", "Wadi El-Nil", "حلون", "عين حلوان", "جامعة حلوان", "وادي حوف", "حدائق حلوان", "المعصرة", "طرة الأسمنت", "كوتسيكا", "طرة البلد", "ثكنات المعادي", "المعادي", "حدائق المعادي", "دار السلام", "الزهراء", "مار جرجس", "الملك الصالح", "السيدة زينب", "سعد زغلول", "السادات", "جمال عبدالناصر", "عرابي", "الشهداء", "غمرة", "الدمرداش", "	منشية الصدر", "كوبري القبة", "حمامات القبة", "	ساراي القبة", "حدائق الزيتون", "حلمية الزيتون", "المطرية", "عين شمس", "عزبة النخل", "المرج", "المرج الجديدة", "المنيب", "ساقية مكي", "أم المصريين", "الجيزة", "فيصل", "جامعة القاهرة", "البحوث", "الدقي", "الأوبرا", "	محمد نجيب", "العتبة", "روض الفرج", "مسرة", "	سانتا تريزا", "الخلفاوي", "المظلات", "كلية الزراعة", "شبرا الخيمة", "المطار", "أحمد جلال", "عدلي منصور", "الهايكستب", "عمر بن الخطاب", "قباء", "هشام بركات", "النزهة", "نادي الشمس", "ألف مسكن", "ميدان هليوبوليس", "هارون", "الأهرام", "كلية البنات", "الإستاد", "أرض المعارض", "العباسية", "عبده باشا", "الجيش", "باب الشعرية", "ماسبيرو", "الزمالك", "الكيت كات", "السودان", "إمبابة", "البوهي", "القومية العربية", "الطريق الدائري", "محور روض الفرج", "التوفيقية", "وادي النيل", "جامعة الدول العربية", "	بولاق الدكرور"];
  var station1 = document.getElementById("st1").value;
  var station2 = document.getElementById("st2").value;

  if (station1 == station2) {
    alert("enter different station !");
    return false;
  }
  /*for(var i=0;i<staions.length;i++){
           if(staions[i]!=station){
               alert("enter valid station");
               return false;
           }
       }*/

}

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

today = yyyy + "-" + mm + "-" + dd;
document.getElementById("date").value = today;
document.getElementById("date").setAttribute("min", today);