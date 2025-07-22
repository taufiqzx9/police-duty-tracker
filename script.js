const policeStations = [
  ["शिरूर", "रविंद्र काळे", "9960666441", "shirurps", "shirurps@123"],
  ["शिक्रापूर", "अमोल दांडगे", "9552512690", "shikrapurps", "shikrapurps@123"],
  ["रांजणगाव", "औटी", "9922745151", "ranjngavps", "ranjngavps@123"],
  ["लोणावळा शहर", "स्वप्नील पाटील", "9011686907", "lonacityps", "Ionacityps@123"],
  ["लोणावळा ग्रामीण", "विजय मुंढे", "9403217270", "lonatalps", "IonataIps@123"],
  ["कामशेत", "नितीन कलसैत", "9850259911", "kamshetps", "kamshetps@123"],
  ["वडगाव मावळ", "चेतन कुंभार", "9881811589", "vadgmavalps", "vadgmavalps@123"],
  ["मंचर", "विशाल दळवी", "9561166625", "macharps", "macharps@123"],
  ["खेड", "संतोष घोलप", "9823577333", "khedps", "khedps@123"],
  ["पारगाव", "गजानन ढाके", "9545696670", "pargavps", "pargavps@123"],
  ["घोडगाव", "नलावडे", "8888050982", "ghodegavps", "ghodegavps@123"],
  ["जुन्नर", "दादा पवाडे", "9404805304", "junnarps", "junnarps@123"],
  ["ओतुर", "जोतीराम पवार", "8308345782", "oturps", "oturps@123"],
  ["आळेफाटा", "पोपट कोकाटे", "8975636567", "alephataps", "alephataps@123"],
  ["नारायणगाव", "गोरक्ष हसे", "9604695677", "narayanps", "narayanps@123"],
  ["अप्पर पोलीस अधि. वाचक", "गणेश ठोसर", "9764355657", "addread", "addread@123"],
  ["सायबर", "संतोष देवाडे", "9823153323", "cyberbr", "cyberbr@123"],
  ["कल्याण शाखा", "प्रवीण मुंढे", "9923294794", "kalbr", "kalbr@123"],
  ["टी.एम.सी", "विकास सोनवणे", "9822747966", "tmcbr", "tmcbr@123"],
  ["बी.डी.डी.एस", "सतीश गेंगझे", "7776924209", "bddsbr", "bddsbr@123"],
  ["नियंत्रण कक्ष", "साधना वाघुले", "7517744643", "controlbr", "controlbr@123"],
  ["अर्ज शाखा", "एस.एस. शेवाळे", "9561372528", "arjbr", "arjbr@123"],
  ["मोटार परिवहन", "मनोज शेडगे", "9112119889", "mtvbr", "mtvbr@123"],
  ["सी.सी.टी.एन.एस", "मनीषा डमरे", "8888447525", "cctnsbr", "cctnsbr@123"],
  ["वाहतूक विभाग", "स्वप्नाली पवार", "9011081035", "vahtbr", "vahtbr@123"],
  ["दहशत विरोधी", "विशाल गोरडे", "8308831928", "atsbr", "atsbr@123"],
  ["मुख्यालय", "राजू दरगुले", "7758908290", "hqpune", "hqpune@123"],
  ["एस.डी.पी.ओ खेड", "दिनेश टेमकर", "7020894611", "dykheddo", "dykhed@123"],
  ["एस.डी.पी.ओ लोणावळा", "", "", "dylonavlado", "dylonavla@123"],
  ["एस.डी.पी.ओ शिरूर", "प्रकाश झेंडे", "7755997386", "dyshirurdo", "dyshirur@123"],
  ["एस.डी.पी.ओ जुन्नर", "वैशाली कोंकिरी", "7276296360", "dyjunnardo", "dyjunnar@123"],
  ["कोरेगाव भीमा", "आण्णा चिंचकर", "9823224802", "korvish", "korvish@123"],
  ["एमबीस", "संतोष बगाड", "9923388118", "ambis", "ambis@123"]
];

const tableBody = document.getElementById("stationTableBody");

policeStations.forEach((entry, index) => {
  const tr = document.createElement("tr");

  const [station, officer, mobile, login, password] = entry;

  tr.innerHTML = `
    <td>${index + 1}</td>
    <td>${station}</td>
    <td>${officer || "-"}</td>
    <td>${mobile || "-"}</td>
    <td>${mobile ? `<a href="tel:${mobile}" title="Call">📞</a>` : "-"}</td>
   <td>${
  mobile
    ? `<a href="https://wa.me/91${mobile}" target="_blank" title="WhatsApp">
         <img src="watsappicon.png" alt="WhatsApp" style="width:28px; height:28px;">
       </a>`
    : "-"
}</td>
    <td>${login}</td>
    <td>${password}</td>
  `;

  tableBody.appendChild(tr);
const creatorDiv = document.getElementById("creator");
creatorDiv.innerText = "Created By: पो.कॉ.तौफिक.एन.शेख ";
creatorDiv.style.color = "#003366";
creatorDiv.style.fontSize = "25px";

});
