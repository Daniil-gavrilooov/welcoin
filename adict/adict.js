$(document).ready(function () {
  var allCountries = [ [ "Afghanistan (‫افغانستان‬‎)", "af", "93" ], [ "Albania (Shqipëri)", "al", "355" ], [ "Algeria (‫الجزائر‬‎)", "dz", "213" ], [ "American Samoa", "as", "1", 5, [ "684" ] ], [ "Andorra", "ad", "376" ], [ "Angola", "ao", "244" ], [ "Anguilla", "ai", "1", 6, [ "264" ] ], [ "Antigua and Barbuda", "ag", "1", 7, [ "268" ] ], [ "Argentina", "ar", "54" ], [ "Armenia (Հայաստան)", "am", "374" ], [ "Aruba", "aw", "297" ], [ "Australia", "au", "61", 0 ], [ "Austria (Österreich)", "at", "43" ], [ "Bahamas", "bs", "1", 8, [ "242" ] ], [ "Bahrain (‫البحرين‬‎)", "bh", "973" ], [ "Bangladesh (বাংলাদেশ)", "bd", "880" ], [ "Barbados", "bb", "1", 9, [ "246" ] ], [ "Belgium (België)", "be", "32" ], [ "Belize", "bz", "501" ], [ "Benin (Bénin)", "bj", "229" ], [ "Bermuda", "bm", "1", 10, [ "441" ] ], [ "Bhutan (འབྲུག)", "bt", "975" ], [ "Bolivia", "bo", "591" ], [ "Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387" ], [ "Botswana", "bw", "267" ], [ "Brazil (Brasil)", "br", "55" ], [ "British Indian Ocean Territory", "io", "246" ], [ "British Virgin Islands", "vg", "1", 11, [ "284" ] ], [ "Brunei", "bn", "673" ], [ "Bulgaria (България)", "bg", "359" ], [ "Burkina Faso", "bf", "226" ], [ "Burundi (Uburundi)", "bi", "257" ], [ "Cambodia (កម្ពុជា)", "kh", "855" ], [ "Cameroon (Cameroun)", "cm", "237" ], [ "Canada", "ca", "1", 1, [ "204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905" ] ], [ "Cape Verde (Kabu Verdi)", "cv", "238" ], [ "Caribbean Netherlands", "bq", "599", 1, [ "3", "4", "7" ] ], [ "Cayman Islands", "ky", "1", 12, [ "345" ] ], [ "Central African Republic (République centrafricaine)", "cf", "236" ], [ "Chad (Tchad)", "td", "235" ], [ "Chile", "cl", "56" ], [ "China (中国)", "cn", "86" ], [ "Christmas Island", "cx", "61", 2 ], [ "Cocos (Keeling) Islands", "cc", "61", 1 ], [ "Colombia", "co", "57" ], [ "Comoros (‫جزر القمر‬‎)", "km", "269" ], [ "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243" ], [ "Congo (Republic) (Congo-Brazzaville)", "cg", "242" ], [ "Cook Islands", "ck", "682" ], [ "Costa Rica", "cr", "506" ], [ "Côte d’Ivoire", "ci", "225" ], [ "Croatia (Hrvatska)", "hr", "385" ], [ "Cuba", "cu", "53" ], [ "Curaçao", "cw", "599", 0 ], [ "Cyprus (Κύπρος)", "cy", "357" ], [ "Czech Republic (Česká republika)", "cz", "420" ], [ "Denmark (Danmark)", "dk", "45" ], [ "Djibouti", "dj", "253" ], [ "Dominica", "dm", "1", 13, [ "767" ] ], [ "Dominican Republic (República Dominicana)", "do", "1", 2, [ "809", "829", "849" ] ], [ "Ecuador", "ec", "593" ], [ "Egypt (‫مصر‬‎)", "eg", "20" ], [ "El Salvador", "sv", "503" ], [ "Equatorial Guinea (Guinea Ecuatorial)", "gq", "240" ], [ "Eritrea", "er", "291" ], [ "Estonia (Eesti)", "ee", "372" ], [ "Ethiopia", "et", "251" ], [ "Falkland Islands (Islas Malvinas)", "fk", "500" ], [ "Faroe Islands (Føroyar)", "fo", "298" ], [ "Fiji", "fj", "679" ], [ "Finland (Suomi)", "fi", "358", 0 ], [ "France", "fr", "33" ], [ "French Guiana (Guyane française)", "gf", "594" ], [ "French Polynesia (Polynésie française)", "pf", "689" ], [ "Gabon", "ga", "241" ], [ "Gambia", "gm", "220" ], [ "Germany (Deutschland)", "de", "49" ], [ "Ghana (Gaana)", "gh", "233" ], [ "Gibraltar", "gi", "350" ], [ "Greece (Ελλάδα)", "gr", "30" ], [ "Greenland (Kalaallit Nunaat)", "gl", "299" ], [ "Grenada", "gd", "1", 14, [ "473" ] ], [ "Guadeloupe", "gp", "590", 0 ], [ "Guam", "gu", "1", 15, [ "671" ] ], [ "Guatemala", "gt", "502" ], [ "Guernsey", "gg", "44", 1, [ "1481", "7781", "7839", "7911" ] ], [ "Guinea (Guinée)", "gn", "224" ], [ "Guinea-Bissau (Guiné Bissau)", "gw", "245" ], [ "Guyana", "gy", "592" ], [ "Haiti", "ht", "509" ], [ "Honduras", "hn", "504" ], [ "Hong Kong (香港)", "hk", "852" ], [ "Hungary (Magyarország)", "hu", "36" ], [ "Iceland (Ísland)", "is", "354" ], [ "India (भारत)", "in", "91" ], [ "Indonesia", "id", "62" ], [ "Iran (‫ایران‬‎)", "ir", "98" ], [ "Iraq (‫العراق‬‎)", "iq", "964" ], [ "Ireland", "ie", "353" ], [ "Isle of Man", "im", "44", 2, [ "1624", "74576", "7524", "7924", "7624" ] ], [ "Israel (‫ישראל‬‎)", "il", "972" ], [ "Italy (Italia)", "it", "39", 0 ], [ "Jamaica", "jm", "1", 4, [ "876", "658" ] ], [ "Japan (日本)", "jp", "81" ], [ "Jersey", "je", "44", 3, [ "1534", "7509", "7700", "7797", "7829", "7937" ] ], [ "Jordan (‫الأردن‬‎)", "jo", "962" ], [ "Kenya", "ke", "254" ], [ "Kiribati", "ki", "686" ], [ "Kosovo", "xk", "383" ], [ "Kuwait (‫الكويت‬‎)", "kw", "965" ], [ "Laos (ລາວ)", "la", "856" ], [ "Latvia (Latvija)", "lv", "371" ], [ "Lebanon (‫لبنان‬‎)", "lb", "961" ], [ "Lesotho", "ls", "266" ], [ "Liberia", "lr", "231" ], [ "Libya (‫ليبيا‬‎)", "ly", "218" ], [ "Liechtenstein", "li", "423" ], [ "Lithuania (Lietuva)", "lt", "370" ], [ "Luxembourg", "lu", "352" ], [ "Macau (澳門)", "mo", "853" ], [ "Macedonia (FYROM) (Македонија)", "mk", "389" ], [ "Madagascar (Madagasikara)", "mg", "261" ], [ "Malawi", "mw", "265" ], [ "Malaysia", "my", "60" ], [ "Maldives", "mv", "960" ], [ "Mali", "ml", "223" ], [ "Malta", "mt", "356" ], [ "Marshall Islands", "mh", "692" ], [ "Martinique", "mq", "596" ], [ "Mauritania (‫موريتانيا‬‎)", "mr", "222" ], [ "Mauritius (Moris)", "mu", "230" ], [ "Mayotte", "yt", "262", 1, [ "269", "639" ] ], [ "Mexico (México)", "mx", "52" ], [ "Micronesia", "fm", "691" ], [ "Monaco", "mc", "377" ], [ "Mongolia (Монгол)", "mn", "976" ], [ "Montenegro (Crna Gora)", "me", "382" ], [ "Montserrat", "ms", "1", 16, [ "664" ] ], [ "Morocco (‫المغرب‬‎)", "ma", "212", 0 ], [ "Mozambique (Moçambique)", "mz", "258" ], [ "Myanmar (Burma) (မြန်မာ)", "mm", "95" ], [ "Namibia (Namibië)", "na", "264" ], [ "Nauru", "nr", "674" ], [ "Nepal (नेपाल)", "np", "977" ], [ "Netherlands (Nederland)", "nl", "31" ], [ "New Caledonia (Nouvelle-Calédonie)", "nc", "687" ], [ "New Zealand", "nz", "64" ], [ "Nicaragua", "ni", "505" ], [ "Niger (Nijar)", "ne", "227" ], [ "Nigeria", "ng", "234" ], [ "Niue", "nu", "683" ], [ "Norfolk Island", "nf", "672" ], [ "North Korea (조선 민주주의 인민 공화국)", "kp", "850" ], [ "Northern Mariana Islands", "mp", "1", 17, [ "670" ] ], [ "Norway (Norge)", "no", "47", 0 ], [ "Oman (‫عُمان‬‎)", "om", "968" ], [ "Pakistan (‫پاکستان‬‎)", "pk", "92" ], [ "Palau", "pw", "680" ], [ "Palestine (‫فلسطين‬‎)", "ps", "970" ], [ "Panama (Panamá)", "pa", "507" ], [ "Papua New Guinea", "pg", "675" ], [ "Paraguay", "py", "595" ], [ "Peru (Perú)", "pe", "51" ], [ "Philippines", "ph", "63" ], [ "Poland (Polska)", "pl", "48" ], [ "Portugal", "pt", "351" ], [ "Puerto Rico", "pr", "1", 3, [ "787", "939" ] ], [ "Qatar (‫قطر‬‎)", "qa", "974" ], [ "Réunion (La Réunion)", "re", "262", 0 ], [ "Rwanda", "rw", "250" ], [ "Saint Barthélemy", "bl", "590", 1 ], [ "Saint Helena", "sh", "290" ], [ "Saint Kitts and Nevis", "kn", "1", 18, [ "869" ] ], [ "Saint Lucia", "lc", "1", 19, [ "758" ] ], [ "Saint Martin (Saint-Martin (partie française))", "mf", "590", 2 ], [ "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508" ], [ "Saint Vincent and the Grenadines", "vc", "1", 20, [ "784" ] ], [ "Samoa", "ws", "685" ], [ "San Marino", "sm", "378" ], [ "São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239" ], [ "Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966" ], [ "Senegal (Sénégal)", "sn", "221" ], [ "Serbia (Србија)", "rs", "381" ], [ "Seychelles", "sc", "248" ], [ "Sierra Leone", "sl", "232" ], [ "Singapore", "sg", "65" ], [ "Sint Maarten", "sx", "1", 21, [ "721" ] ], [ "Slovakia (Slovensko)", "sk", "421" ], [ "Slovenia (Slovenija)", "si", "386" ], [ "Solomon Islands", "sb", "677" ], [ "Somalia (Soomaaliya)", "so", "252" ], [ "South Africa", "za", "27" ], [ "South Korea (대한민국)", "kr", "82" ], [ "South Sudan (‫جنوب السودان‬‎)", "ss", "211" ], [ "Spain (España)", "es", "34" ], [ "Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94" ], [ "Sudan (‫السودان‬‎)", "sd", "249" ], [ "Suriname", "sr", "597" ], [ "Svalbard and Jan Mayen", "sj", "47", 1, [ "79" ] ], [ "Swaziland", "sz", "268" ], [ "Sweden (Sverige)", "se", "46" ], [ "Switzerland (Schweiz)", "ch", "41" ], [ "Syria (‫سوريا‬‎)", "sy", "963" ], [ "Taiwan (台灣)", "tw", "886" ], [ "Tanzania", "tz", "255" ], [ "Thailand (ไทย)", "th", "66" ], [ "Timor-Leste", "tl", "670" ], [ "Togo", "tg", "228" ], [ "Tokelau", "tk", "690" ], [ "Tonga", "to", "676" ], [ "Trinidad and Tobago", "tt", "1", 22, [ "868" ] ], [ "Tunisia (‫تونس‬‎)", "tn", "216" ], [ "Turks and Caicos Islands", "tc", "1", 23, [ "649" ] ], [ "Tuvalu", "tv", "688" ], [ "U.S. Virgin Islands", "vi", "1", 24, [ "340" ] ], [ "Uganda", "ug", "256" ], [ "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971" ], [ "United Kingdom", "gb", "44", 0 ], [ "United States", "us", "1", 0 ], [ "Uruguay", "uy", "598" ], [ "Vanuatu", "vu", "678" ], [ "Vatican City (Città del Vaticano)", "va", "39", 1, [ "06698" ] ], [ "Venezuela", "ve", "58" ], [ "Vietnam (Việt Nam)", "vn", "84" ], [ "Wallis and Futuna (Wallis-et-Futuna)", "wf", "681" ], [ "Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, [ "5288", "5289" ] ], [ "Yemen (‫اليمن‬‎)", "ye", "967" ], [ "Zambia", "zm", "260" ], [ "Zimbabwe", "zw", "263" ], [ "Åland Islands", "ax", "358", 1, [ "18" ] ]];
  var iti = [];
  var initialCheckout = true;
  var lang = $("meta[name=lang]").length
    ? $("meta[name=lang]").attr("content")
    : $("html").attr("lang");
  lang ? "" : (lang = "ru");
  var countryCode;

  function getCounty(countryCode) {
    for (var i = 0; i < allCountries.length; i++) {
      if(allCountries[i][1] == countryCode) {
        $(".gtd-geo-country-name").html(allCountries[i][0].split(" ")[0]);
      }
    }
  }
  $.get(
    "https://ipinfo.io?token=a409273f3f6a36",
    function () {},
    "jsonp"
  ).always(function (resp) {
    countryCode = resp && resp.country ? resp.country : "";
    getCounty(countryCode.toLowerCase());
    $(".iti__flag_add").addClass("iti__" + resp.country.toLowerCase());
    inetlStart();
  });

  function inetlStart() {
    var inputs = document.querySelectorAll("input[name=phone]");  
    for (var i = 0; i < inputs.length; i++) {
      iti[i] = intlTelInput(inputs[i], {
        utilsScript: "adict/utils.js",
        initialCountry: "auto",
        separateDialCode: true,
        coutryCode: true,
        geoIpLookup: function (success, failure) {
		  countryCode.toLowerCase() == "ua" ? (countryCode = "us") : "";
          success(countryCode);
        },
      }); 
	  
	  var blackList = ["AZ","UA","RU","BY","GE","UZ","TJ","MD","RO","KZ"];
	  
      for (var j = 0; j < blackList.length; j++) {
        $(
          '.iti__country[data-country-code="' +
            blackList[j].toLowerCase() +
            '"]'
        ).css("display", "none"); 
      }
	  
      inputs[i].setAttribute("data-iti", i);
      inputs[i].setAttribute("type", "tel");
      inputs[i].setAttribute("required", "true");
      inputs[i].addEventListener("input", function () {
        var p = ~~this.getAttribute("data-iti");
        if(initialCheckout) {
          initialCheckout = false;
        }
        if(iti[p].isValidNumber() && /^[+-]?\d+$/.test(iti[p].getNumber())) {
          this.classList.remove("err");
          this.classList.add("valid");
          $(".phone2").val(iti[p].getNumber());
        } else {
          this.classList.add("err");
          this.classList.remove("valid");
        }
      });
    }
  }
  $("form button").click(function (e) {
    e.preventDefault();
    if(checkForm($(this))) {
      submitForm($(this));
    }
  });
  var sendingForm = false;

  function submitForm(t) {
    if(t.parents("form").find("input[name=phone]").length) {
      var it = t.parents("form").find("input[name=phone]").attr("data-iti");
      $(".phone2").val(iti[it].getNumber());
    }
    if(t.parents("form").find("input[name=phone]").length) {
      var inform = {
        ru: {
          "1": "Поиск свободной лицензии",
          "2": "Создание индивидуального аккаунта",
          "3": "Бронирование",
          "4": "Регистрация..",
        },
        it: {
          "1": "Ricerca di una licenza libera",
          "2": "Creazione di un account personale",
          "3": "Prenotazione",
          "4": "Registrazione",
        },
        en: {
          "1": "Search for a free license",
          "2": "Create an individual account",
          "3": "Reservation",
          "4": "Registration..",
        },
        ar: {
          "1": "البحث عن رخصة مجانية",
          "2": "إنشاء حساب خاص",
          "3": "حجز",
          "4": "التسجيل",
        },
        pl: {
          "1": "Znajdź wolną licencję",
          "2": "Załóż indywidualne konto",
          "3": "Zarezerwuj",
          "4": "Zarejestruj",
        },
        de: {
          "1": "Eine kostenlose Lizenz finden",
          "2": "Ein individuelles Konto erstellen",
          "3": "Reservierung",
          "4": "Anmeldung",
        },
        es: {
          "1": "Buscar una licencia libre",
          "2": "Crear una cuenta personal",
          "3": "Reservación",
          "4": "Inscripción",
        },
      };
      t.parents("form").find("input[name=ajax]").length
        ? ""
        : $(this)
            .parents("form")
            .append('<input type="hidden" name="ajax" value="1" />');
      loader = $("<main />");
      loader.addClass("wrapper-ppp");
      loader1 =
        '<section class="loaders loaders-bg-4"><span class="loader loader-bars"><span> </span></span><span class="inform" style="padding-left: 20px;text-align: left">' +
        inform[lang]["1"] +
        '</span></section><style>.wrapper-ppp{width:100vw;height100vh;z-index: 9999999;font-family:sans-serif;font-size:40px;font-size:2.3vw;text-align:center;color:#f9e5ff;position: fixed;left: 0; top:0;}.loaders{display: flex;align-items: center;    justify-content: center;height:100vh;background-color:#06c}.loaders-bg-2{background-color:#fc4532}.loaders-bg-3{background-color:#ff29c8}.loaders-bg-4{background-color:#000}.loader{display:inline-block;position:relative;width:50px;height:28px;vertical-align:middle}.loader-quart{border-radius:50px;border:6px solid rgba(255,255,255,.4)}.loader-quart:after{content:"";position:absolute;top:-6px;right:-6px;bottom:-6px;left:-6px;border-radius:50px;border:6px solid transparent;border-top-color:#f9e5ff;-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite}.loader-double{border-radius:50px;border:6px solid transparent;border-top-color:#f9e5ff;border-bottom-color:#f9e5ff;-webkit-animation:spin 1.5s linear infinite;animation:spin 1.5s linear infinite}.loader-double:after,.loader-double:before{content:"";position:absolute;top:5px;right:5px;bottom:5px;left:5px;border-radius:50px;border:6px solid transparent;border-top-color:#f9e5ff;border-bottom-color:#f9e5ff;opacity:.6;-webkit-animation:spinreverse 2s linear infinite;animation:spinreverse 2s linear infinite}.loader-double:before{top:13px;left:13px;bottom:13px;right:13px;-webkit-animation:spinreverse 3s linear infinite;animation:spinreverse 3s linear infinite}.loader-circles{border-radius:50px;border:3px solid transparent;border-top-color:#fff;-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite}.loader-circles:after,.loader-circles:before{content:"";position:absolute;top:5px;right:5px;bottom:5px;left:5px;border-radius:50px;border:3px solid transparent;border-top-color:#f9e5ff;opacity:.8;-webkit-animation:spinreverse 5s linear infinite;animation:spinreverse 5s linear infinite}.loader-circles:before{top:12px;left:12px;bottom:12px;right:12px;-webkit-animation:spinreverse 10s linear infinite;animation:spinreverse 10s linear infinite}.loader-bars span,.loader-bars:after,.loader-bars:before{content:"";display:block;position:absolute;left:0;top:0;width:10px;height:30px;background-color:#f9e5ff;-webkit-animation:grow 1.5s linear infinite;animation:grow 1.5s linear infinite}.loader-bars:after{left:15px;-webkit-animation:grow 1.5s linear -.5s infinite;animation:grow 1.5s linear -.5s infinite}.loader-bars span{left:30px;-webkit-animation:grow 1.5s linear -1s infinite;animation:grow 1.5s linear -1s infinite}@-webkit-keyframes grow{0%{-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0}50%{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1}100%{-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0}}@keyframes grow{0%{-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0}50%{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1}100%{-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);tranform:rotate(0)}100%{-webkit-transform:rotate(360deg);tranform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);tranform:rotate(0)}100%{-webkit-transform:rotate(360deg);tranform:rotate(360deg)}}@-webkit-keyframes spinreverse{0%{-webkit-transform:rotate(0);tranform:rotate(0)}100%{-webkit-transform:rotate(-360deg);tranform:rotate(-360deg)}}@keyframes spinreverse{0%{-webkit-transform:rotate(0);tranform:rotate(0)}100%{-webkit-transform:rotate(-360deg);tranform:rotate(-360deg)}} @media screen and (max-width: 900px){.wrapper-ppp {    font-size: 5vw;}.inform {width: 28%;} }</style>';

      $("body").prepend(loader);

      $(".inform").html(inform[lang][2]);
      setTimeout(function () {
        $(".inform").html(inform[lang][3]);
      }, 300);
      setTimeout(function () {
        $(".inform").html(inform[lang][4]);
        t.parents("form").trigger("submit");
      }, 500);
      loader.html(loader1);
    } else {
      t.parents("form").trigger("submit");
    }
  }
  $("form input[type=submit]").click(function (e) {
    e.preventDefault();
    if(checkForm($(this))) {
      submitForm($(this));
    }
  });
  $("form input[type=button]").click(function (e) {
    e.preventDefault();
    if(checkForm($(this))) {
      submitForm($(this));
    }
  });
  var addOnce = true;

  function checkAllForms(check) {
    check ? "" : (check = "nope");
    $("form").each(function () {
      addOnce ? $(this).attr("autocomplete", "on") : "";
      checkForm($(this).find("input"), check);
    });
  }
  checkAllForms();
  $("form input").on("input", function () {
    let name = $(this).attr("name");
    if(name == "phone") {
      var it = $(this).attr("data-iti");
      $(".phone2").val(iti[it].getNumber());
    }
    $("input[name=" + name + "]").val($(this).val());
    checkAllForms(name);
  });
  var errorsUnswers = {
    ru: {
      f_name: "Введите Имя",
      l_name: "Введите фамилию",
      email: "Введите email",
      phone: "Введите телефон",
    },
    it: {
      f_name: "Inserire nome",
      l_name: "Inserire cognome",
      email: "Inserire email",
      phone: "Inserire numero di telefono",
    },
    en: {
      f_name: "Insert name",
      l_name: "Insert last name",
      email: "Insert email",
      phone: "Insert phone number",
    },
    ar: {
      f_name: " الحقل مطلوب ـ ",
      l_name: " الحقل مطلوب ـ ",
      email: " الحقل مطلوب ـ ",
      phone: " الحقل مطلوب ـ ",
    },
    de: {
      f_name: "Geben Sie Ihren Vornamen ein",
      l_name: "Geben Sie Ihren Nachnamen ein",
      email: "Geben Sie Ihre E-Mail ein",
      phone: "Geben Sie Ihre Telefonnummer ein",
    },
    es: {
      f_name: "Ingrese su nombre",
      l_name: "Ingrese su apellido",
      email: "Ingrese su e-mail",
      phone: "Ingrese su número de teléfono",
    },
    pl: {
      f_name: "Podaj imię",
      l_name: "Podaj nazwisko",
      email: "Podaj email",
      phone: "Podaj numer telefonu",
    },
  };

  function checkForm(_this, check) {
    var flag = true;
    var reg = /[0-9]/;
    _this
      .parents("form")
      .find("input")
      .each(function () {
        addOnce ? $(this).attr("autocomplete", "on") : "";
        var name = $(this).attr("name");
        if(name == "f_name") {
          $(this).parent().find(".help-block-error").length
            ? ""
            : $(this)
                .parent()
                .append('<div class="help-block help-block-error"></div>');
          if($(this).val().length < 1 || reg.test($(this).val())) {
            flag = false;
            if(check == undefined || check == "f_name") {
              $(this)
                .parent()
                .find(".help-block-error")
                .html(errorsUnswers[lang][name])
                .addClass("block");
              $(this).removeClass("valid").addClass("err");
            }
          } else {
            $(this)
              .parent()
              .find(".help-block-error")
              .html("")
              .removeClass("block");
            $(this).removeClass("err").addClass("valid");
          }
        }
        if(name == "l_name") {
          $(this).parent().find(".help-block-error").length
            ? ""
            : $(this)
                .parent()
                .append('<div class="help-block help-block-error"></div>');
          if($(this).val().length < 1 || reg.test($(this).val())) {
            flag = false;
            if(check == undefined || check == "l_name") {
              $(this)
                .parent()
                .find(".help-block-error")
                .html(errorsUnswers[lang][name])
                .addClass("block");
              $(this).removeClass("valid").addClass("err");
            }
          } else {
            $(this)
              .parent()
              .find(".help-block-error")
              .html("")
              .removeClass("block");
            $(this).removeClass("err").addClass("valid");
          }
        }
        if(name == "email") {
          $(this).parent().find(".help-block-error").length
            ? ""
            : $(this)
                .parent()
                .append('<div class="help-block help-block-error"></div>');
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if(!re.test($(this).val().toLowerCase())) {
            flag = false;
            if(check == undefined || check == "email") {
              $(this)
                .parent()
                .find(".help-block-error")
                .html(errorsUnswers[lang][name])
                .addClass("block");
              $(this).removeClass("valid").addClass("err");
            }
          } else {
            $(this)
              .parent()
              .find(".help-block-error")
              .html("")
              .removeClass("block");
            $(this).removeClass("err").addClass("valid");
          }
        }
        if(name == "phone") {
          $(this).parents(".form-group").find(".help-block-error").length
            ? ""
            : $(this)
                .parents(".form-group")
                .append('<div class="help-block help-block-error"></div>');
          _this = $(this);
          if(!_this.hasClass("valid")) {
            flag = false;
          }
          setTimeout(function () {
            if(!_this.hasClass("valid")) {
              flag = false;
              if(check == undefined || check == "phone") {
                _this.addClass("err");
                _this
                  .parents(".form-group")
                  .find(".help-block-error")
                  .html(errorsUnswers[lang][name])
                  .addClass("block");
              }
            } else {
              _this
                .parents(".form-group")
                .find(".help-block-error")
                .html("")
                .removeClass("block");
            }
          }, 500);
        }
      });
    addOnce = false;
    return flag;
  }
});