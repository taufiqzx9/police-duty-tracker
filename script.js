document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("stationTableBody");
  const modal = document.getElementById("popupModal");
  const closeBtn = document.querySelector(".closeBtn");

  const stations = [
  {
    "name": "शिरूर",
    "officer": "रविंद्र काळे",
    "mobile": "9960666441",
    "username": "shirurps",
    "landline": "02138–222139"
  },
  {
    "name": "शिक्रापूर",
    "officer": "अमोल दांडगे",
    "mobile": "9552512690",
    "username": "shikrapurps",
    "landline": "02137–286333"
  },
  {
    "name": "रांजणगाव",
    "officer": "औटी",
    "mobile": "9922745151",
    "username": "ranjngavps",
    "landline": "02138–232139"
  },
  {
    "name": "लोणावळा शहर",
    "officer": "स्वप्नील पाटील",
    "mobile": "9011686907",
    "username": "lonacityps",
    "landline": "02114–273033"
  },
  {
    "name": "लोणावळा ग्रामीण",
    "officer": "विजय मुंढे",
    "mobile": "9403217270",
    "username": "lonatalps",
    "landline": "02114–273036"
  },
  {
    "name": "कामशेत",
    "officer": "नितीन कलसैत",
    "mobile": "9850259911",
    "username": "kamshetps",
    "landline": "02114–262440"
  },
  {
    "name": "वडगाव मावळ",
    "officer": "चेतन कुंभार",
    "mobile": "9881811589",
    "username": "vadgmavalps",
    "landline": "02114–235333"
  },
  {
    "name": "मंचर",
    "officer": "विशाल दळवी",
    "mobile": "9561166625",
    "username": "macharps",
    "landline": "02133–223159"
  },
  {
    "name": "खेड",
    "officer": "संतोष घोलप",
    "mobile": "9823577333",
    "username": "khedps",
    "landline": "02135–222033"
  },
  {
    "name": "पारगाव",
    "officer": "गजानन ढाके",
    "mobile": "9545696670",
    "username": "pargavps",
    "landline": ""
  },
  {
    "name": "घोडगाव",
    "officer": "नलावडे",
    "mobile": "8888050982",
    "username": "ghodegavps",
    "landline": "02133–244133"
  },
  {
    "name": "जुन्नर",
    "officer": "दादा पवाडे",
    "mobile": "9404805304",
    "username": "junnarps",
    "landline": "02132–222033"
  },
  {
    "name": "ओतुर",
    "officer": "जोतीराम पवार",
    "mobile": "8308345782",
    "username": "oturps",
    "landline": "02132–264250"
  },
  {
    "name": "आळेफाटा",
    "officer": "पोपट कोकाटे",
    "mobile": "8975636567",
    "username": "alephataps",
    "landline": "02132–263033"
  },
  {
    "name": "नारायणगाव",
    "officer": "गोरक्ष हसे",
    "mobile": "9604695677",
    "username": "narayanps",
    "landline": "02132–242033"
  },
  {
    "name": "इंदापुर",
    "officer": "अकबर शेख",
    "mobile": "9922145218",
    "username": "indapurps",
    "landline": "02118–223333"
  },
  {
    "name": "भिगवण",
    "officer": "रणजीत मुळीक",
    "mobile": "9970460459",
    "username": "bhingvanps",
    "landline": "02118–246233"
  },
  {
    "name": "बारामती शहर",
    "officer": "भगवान दुधे",
    "mobile": "9921204135",
    "username": "baramatict",
    "landline": "02112–224333"
  },
  {
    "name": "बारामती तालुका",
    "officer": "ओंकार पवार",
    "mobile": "7083169390",
    "username": "baramatital",
    "landline": "02112–243433"
  },
  {
    "name": "बारामती वाहतुक",
    "officer": "अजिंक्य कदम",
    "mobile": "9667900100",
    "username": "",
    "landline": ""
  },
  {
    "name": "माळेगाव",
    "officer": "नितीन कांबळे",
    "mobile": "9960252878",
    "username": "malegav",
    "landline": "02112–254318"
  },
  {
    "name": "वडगाव निंबाळकर",
    "officer": "पोपट नाळे",
    "mobile": "9689898702",
    "username": "vadgaonnim",
    "landline": "02112–272133"
  },
  {
    "name": "वालचंदनगर",
    "officer": "अमोल चिटकोटे",
    "mobile": "7447420303",
    "username": "valchandps",
    "landline": "02118–272350"
  },
  {
    "name": "सुपा",
    "officer": "सचिन कोकणे",
    "mobile": "9830414370",
    "username": "supaps",
    "landline": "02112–202033"
  },
  {
    "name": "दौंड",
    "officer": "आमिर शेख",
    "mobile": "8888899708",
    "username": "daundps",
    "landline": "02117–262333"
  },
  {
    "name": "यवत",
    "officer": "शिवम मुळे",
    "mobile": "9860637325",
    "username": "yavatps",
    "landline": "02119–274233"
  },
  {
    "name": "उरुळी कांचन",
    "officer": "सुवर्णा गायकवाड",
    "mobile": "9922643867",
    "username": "uralips",
    "landline": "020–26926287"
  },
  {
    "name": "भोर",
    "officer": "धर्मवीर खांडे",
    "mobile": "9011082328",
    "username": "bhorps",
    "landline": "02113–222533"
  },
  {
    "name": "सासवड",
    "officer": "विकास ओमासे",
    "mobile": "9822581380",
    "username": "saswadps",
    "landline": "02115–222333"
  },
  {
    "name": "जेजुरी",
    "officer": "शिवाजी काटे",
    "mobile": "8329432267",
    "username": "jejurips",
    "landline": "02115–253129"
  },
  {
    "name": "राजगड",
    "officer": "राजेश घायाळ",
    "mobile": "9860533869",
    "username": "rajgadps",
    "landline": "02113–272233"
  },
  {
    "name": "हवेली",
    "officer": "सोनाली जाधव",
    "mobile": "7038086654",
    "username": "havelips",
    "landline": "020–24392733"
  },
  {
    "name": "वेल्हा",
    "officer": "असुंधे",
    "mobile": "8668674047",
    "username": "velhaps",
    "landline": "02130–221233"
  },
  {
    "name": "पौड",
    "officer": "गणेश पवार",
    "mobile": "8888212831",
    "username": "paudps",
    "landline": "020–22943233"
  },
  {
    "name": "अप्पर पोलीस अधी. वाचक",
    "officer": "गणेश ठोसर",
    "mobile": "9764355657",
    "username": "addread",
    "landline": ""
  },
  {
    "name": "सायबर",
    "officer": "संतोष देवाडे",
    "mobile": "9823153323",
    "username": "cyberbr",
    "landline": ""
  },
  {
    "name": "कल्याण शाखा",
    "officer": "प्रवीण मुंढे",
    "mobile": "9923294794",
    "username": "kalbr",
    "landline": ""
  },
  {
    "name": "टी.एम.सी",
    "officer": "विकास सोनवणे",
    "mobile": "9822747966",
    "username": "tmcbr",
    "landline": ""
  },
  {
    "name": "बी.डी.डी.एस",
    "officer": "सतीश गेंगझे",
    "mobile": "7776924209",
    "username": "bddsbr",
    "landline": ""
  },
  {
    "name": "नियंत्रण कक्ष",
    "officer": "साधना वाघुले",
    "mobile": "7517744643",
    "username": "controlbr",
    "landline": ""
  },
  {
    "name": "अर्ज शाखा",
    "officer": "एस.एस. शेवाळे",
    "mobile": "9561372528",
    "username": "arjbr",
    "landline": ""
  },
  {
    "name": "मोटार परिवहन",
    "officer": "मनोज शेडगे",
    "mobile": "9112119889",
    "username": "mtvbr",
    "landline": ""
  },
  {
    "name": "सी.सी.टी.एन.एस",
    "officer": "मनीषा डमरे",
    "mobile": "8888447525",
    "username": "cctnsbr",
    "landline": ""
  },
  {
    "name": "वाहतूक विभाग",
    "officer": "स्वप्नाली पवार",
    "mobile": "9011081035",
    "username": "vahtbr",
    "landline": ""
  },
  {
    "name": "दहशत विरोधी",
    "officer": "विशाल गोरडे",
    "mobile": "8308831928",
    "username": "atsbr",
    "landline": ""
  },
  {
    "name": "मुख्यालय",
    "officer": "राजू दरगुले",
    "mobile": "7758908290",
    "username": "hqpune",
    "landline": ""
  },
  {
    "name": "एस.डी.पी.ओ खेड",
    "officer": "दिनेश टेमकर",
    "mobile": "7020894611",
    "username": "dykheddo",
    "landline": ""
  },
  {
    "name": "एस.डी.पी.ओ लोणावळा",
    "officer": "कवळे",
    "mobile": "9923340034",
    "username": "dylonavlado",
    "landline": ""
  },
  {
    "name": "एस.डी.पी.ओ शिरूर",
    "officer": "प्रकाश झेंडे",
    "mobile": "7755997386",
    "username": "dyshirurdo",
    "landline": ""
  },
  {
    "name": "एस.डी.पी.ओ जुन्नर",
    "officer": "वैशाली कोंकिरी",
    "mobile": "7276296360",
    "username": "dyjunnardo",
    "landline": ""
  },
  {
    "name": "कोरेगाव भीमा",
    "officer": "आण्णा चिंचकर",
    "mobile": "9823224802",
    "username": "korvish",
    "landline": ""
  },
  {
    "name": "अप्पर पोलीस अधिक्षक बारामती",
    "officer": "तांडुलकर",
    "mobile": "9823545599",
    "username": "addlbar",
    "landline": ""
  },
  {
    "name": "जिल्हा विषेष शाखा",
    "officer": "पल्लवी गायकवाड",
    "mobile": "9881027733",
    "username": "distdsb",
    "landline": ""
  },
  {
    "name": "सुरक्षा शाखा",
    "officer": "सुनीता मोरे",
    "mobile": "9503091298",
    "username": "surksha",
    "landline": ""
  },
  {
    "name": "एफ.आर.ओ",
    "officer": "शिल्पा शिंदे",
    "mobile": "7775098222",
    "username": "frobr",
    "landline": ""
  },
  {
    "name": "पोलीस अधिक्षक वाचक",
    "officer": "असीम बेग",
    "mobile": "8087011618",
    "username": "readerbr",
    "landline": ""
  },
  {
    "name": "स्थानिक गुन्हे शाखा",
    "officer": "पासलकर",
    "mobile": "9923203187",
    "username": "Icbbr",
    "landline": ""
  },
  {
    "name": "महीला कक्ष",
    "officer": "सीमा जगताप",
    "mobile": "8208002037",
    "username": "womencell",
    "landline": ""
  },
  {
    "name": "AHTU अनैतिक मानवी वाहतुक प्रतिबंध कक्ष",
    "officer": "ज्योती भांबळे",
    "mobile": "7447430784",
    "username": "ahtubr",
    "landline": ""
  },
  {
    "name": "आर्थिक गुन्हे शाखा",
    "officer": "वर्षा धुमाळ",
    "mobile": "9923421599",
    "username": "eowbr",
    "landline": ""
  },
  {
    "name": "SDPO हवेली कार्यालय",
    "officer": "चौबे",
    "mobile": "8329578282",
    "username": "dyhavelido",
    "landline": ""
  },
  {
    "name": "SDPO भोर कार्यालय",
    "officer": "दत्तात्रय खेंगरे",
    "mobile": "9527901668",
    "username": "dybhordo",
    "landline": ""
  },
  {
    "name": "SDPO दौंड कार्यालय",
    "officer": "सुभाष डोईफोडे",
    "mobile": "8381024079",
    "username": "dydaunddo",
    "landline": ""
  },
  {
    "name": "SDPO बारामती कार्यालय",
    "officer": "अतुल जाधव",
    "mobile": "8668510084",
    "username": "dybaramatido",
    "landline": ""
  }


  ];
  

 stations.forEach((station, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td class="station-name clickable">${station.name}</td>
      <td>${station.landline}</td>
    `;

    row.querySelector(".station-name").addEventListener("click", () => {
      document.getElementById("modalStation").textContent = station.name;
      document.getElementById("modalOfficer").textContent = station.officer;
      document.getElementById("modalMobile").textContent = station.mobile;
      document.getElementById("modalSecretOfficer").textContent = station.secret;
      document.getElementById("modalSecretContact").textContent = station.secretMobile;
      modal.style.display = "block";
    });

    tableBody.appendChild(row);
  });

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = event => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Creator Credit
  const creatorDiv = document.getElementById("creator");
  creatorDiv.innerHTML = "Created by <strong>तौफिक निसारुद्दीन शेख, 2986</strong>";
});