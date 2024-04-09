// tihs tow videos js
document.title = "this new tow js";
// ================================================
// Bom [broser object model]
// 1- alert (massege) مش هتحتاجها ليها بدايل علشان بتوقف الصفحه
// البدايل ممكن تعملها بي لغه
// css وتظبتها بالجافا اسكربت
// alert("wow");
// this.alert("pop");
// window.alert("alol");

// 2- confirm (هنا بتكتب رساله ) وبتكون فيها اوك وكانسل
// اي حاجه من ال جايه دي نعملها بي السي اس اس
// والتحكم فيها يبقي بالجافا اسكربت
// confirm("Are you sure you want to");
// بنستحدم فيها true false
// عن طريق نحطها في متغير

// function alol(nem, pop) {
//   let con = confirm("Are you sure you want to");
//   if (con === true) {
//     return `hello alaa ${nem * 20}`;
//   } else {
//     return `not hello alaa ${pop * 20}`;
//   }
// }
// console.log(alol(10, 20));
// console.log(alol(23, 60));

// 3- prompt {مطلوب منك تكتب حاجه في المربع }

// let con = prompt("please write here string");
// function sss() {
//   if (con === "alaa") {
//     function pos(nem) {
//       console.log(`hello alaa ${nem * 20}`);
//     }
//     setTimeout(pos, 2000, 20);
//   } else {
//     // console.log(`not hello alaa ${pop * 20}`);
//     function ssd(pop) {
//       console.log(`hello alaa ${pop * 20}`);
//     }
//     setTimeout(ssd, 2000, 20);
//   }
// }
// sss();

// =========================================
// Bom [broser object model]
// 1- setTimeout(function , timeout ,Additional params)
// معنها انها تقدر تنادي فانكشن بعد وقت معين انت ال بتحددو
// بتقبل اول حاجه الفانكشن
// تاني حاجه التايم اوت  بيتكتب بالميل سكند
//

// setTimeout(function () {
//   console.log("alaa");
// }, 2000);
// ==
// function alas() {
//   console.log("alaa");
// }
// setTimeout(alas, 2000);

// 2- cleartimeout بيطلب مني الهاندلر
// الهاندلر ده عباره عن رقم
// فا بنحط الست تيم اوت في متغير
// console.log(typeof y = number)
// اختصار لو عاوز تعمل كلير لي سيت لازم تدي للست متغير
// الست قيمته بتبقي واحد يعني لو كتبت 1 بي ايدك هيوقف الست بردو
// clearTimeout(1); زي كدا
// let y = setTimeout(function () {
//   console.log("alaa");
// }, 2000);
// ممكن نعملها في زرار
// clearTimeout(y);
// clearTimeout(1);

// example

// setTimeout(function () {
//   let v = document.querySelector("#call");
//   // v.remove();
//   v.style.cssText = " display:flex;";
//   //   transition: all 1s
// }, 2000);
// clearTimeout(1);
// ===============================================
// Bom [broser object model]
//1- setInterval بتقبل نفس الخواص ال بتقبلها set timeout
// بتنادي هلي الفانكش مرارا وتكرارا  setInterval لكن الفرق بينهم ان
// بنستني ميل سكند بين الكول والكول ال بعديها
// setInterval(function(){
// console.log(`hello there`)
// },2000)

// function hellows() {
//   console.log(`hello there`);
// }
// setInterval(hellows, 2000);

// function hellows(alaa, pop) {
//   console.log(`hello there ${alaa} and this age ${pop}`);
// }
// setInterval(hellows, 2000, "alaa mohsen", 20 * 5);

// function conwn() {
//   let div = document.querySelector(".vs");
//   div.innerHTML -= 1;
//   if (div.innerHTML === "0") {
//     clearInterval(counter);
//   }
// }
// let counter = setInterval(conwn, 1000);

// =============================================
// Bom [broser object model]
// 1- location Object نقدر نتعامل مع url بتاعت الموقع
// 2- href get / set [url || hash || file || mail]
// بنجيب الينك ونعدل فيه الحاجات ال في رقم اثنين ده
// location.href للهستوري delet مش بيعمل
// console.log(location); // بيجبلك اللنك بتاع الموقع بتاعك
// console.log(this.location.href); // this get تجيب اللينك
// location.href = "https://www.google.com/"; // this set تغير اللينك
// console.log(location.hash); //  الهاش ده بيجبلك  هاش عندك في الموقع ساعات بتحتاج تفصل الهاش ده علشان تشيك علي حاجه
// location.href = "/#owsd"; // نروح  علي سكشن في الموقع او موقع تاني
// http://127.0.0.1:5500/tow.html
// console.log(location.host); // ده بيجيب اسم الموقع مع البورت ال انت داخل منه
// console.log(location.hostname); // بيجبلك اسم الموقع من غير البورت وتقدر تعدل بردو اسم الموقع لي ام تاني
// وتسيب باقي اللنك زي ماهو
// console.log(location.protocol); // هو البرتوكل https ده السكيور : or http
// وتقدر تغيرو
// console.log(location.reload())// بتعل reload لصصفحه ممكن تعملها في زرار

// location.replace("https://www.google.com/")// بتغير اللينك لي لنك تاني بس الفرق بينه وبين href
// انها بتمسح الهيستوري
// location.assign("https://www.google.com/"); // عكس repace
// بتغير اللنك لكن بتحفظ الهستوري في مكانه
// console.log(location.pathname); // دي بتجيب الجزء التاني من اللينك وتقدر تغيرو وتسيب اسم الموقع زي ماهو
// console.log(location.toString()); بتجيب اللينك بردو
// =============================================
// Bom [broser object model]
// window open and close
//1- window.close() بتقفل الصفحه بس ال مفتوحه عن طريق الجافا اسكربت عن طريق open
//2- window.open() بتقبل مني 4 حاجات
// 1= link اي لنك صفحه انت عاوزها ممكن يكون صفحه بي دي اف بردو
// 2= نيم اندينت فاير ملوش علاقه بي التايتل بتاع الصفحه ال انت فيها
// وتقدر تكتب فيها التارجت [blank - self]
// 3= المميزات ال فيها العرض الطول الصفحه تفتح فين حاجات كتير
// search open window features ابحث
// 4= replace hostry لو عاوز تفتح ويندو مكان التانيه هل هتسيب التانيه في الهوستري ةلا لا
// وبيطلب منك true false

// setTimeout(function () {
//   window.open(
//     "https://google.com",
//     "_blank",
//     "width=400,height=400,top=100,left=400",
//     ""
//   );
// }, 2000);
// ===================================================
// Bom [broser object model]
// window history object
// 1- history.length بتجيب عدد العناصر ال جو الهستوري بما فيهم الانتري ال انت فيها دلوقتي
// 2- history.back(); بترجعك صفحه لي الخلف
// 3- history.forward() بيطلعك صفحه قدام
// 4- history.go(); بيطلب منك رقم البوزيشن ال في الهستوري علشان يجبهولك
// لو دوست صفر يعمل ريلود ولو دوست 1 يطلعك حطوه قدام ولو عملت -1 يرجعك حطوه ورا

// console.log(history);
// console.log(history.length);
// console.log(history.back());
// console.log(history.forward());
// console.log(history.go());
// ابحث عن
// history.pushState();
// history.replaceState();
// history.scrollRestoration();
// history.state
// ===================================================
//  Bom [broser object model]
//1- stop() بتعمل استوب للتحميل
//2- print() بتطبع الصفحه وممكن تعملها في زرار
//3- focus() بتعمل فوكس بتركز علي الحاجه ال انت فاتحها
// let wows = window.open(
//   "https://google.com",
//   "_blank",
//   "width=600,height=600,top=0,left=500"
// );
// wows.close(
// ------------
//4- scrollTo(x , y|| options)دي مدعومه في سفاري
// scrollTo({ options}) دي لو عاوز تعمل اكتر من اوبشن
// scrollTo(200,600) 200 الطول 600 العرض
// بتوديك علي احدثيات معينه مش بتتغير في الصفحه
// options بتكون كدا
// scrollTo({left:100,top:600})
// دي الاوبشن
// setInterval(function () {
//   window.scrollBy({
//     let: 10,
//     top: 800,
//     behavior: "smooth",
//   });
// }, 2000);
// -------------
//5- scroll(x , y|| options) دي مش مدعومه في سفاري
// scrollTo({ options}) دي لو عاوز تعمل اكتر من اوبشن
// scrollTo(200,600) 200 الطول 600 العرض
// بتوديك علي احدثيات معينه مش بتتغير في الصفحه
//
// دي الاوبشن
// setInterval(function () {
//   window.scrollBy({
//     let: 10,
//     top: 800,
//     behavior: "smooth",
//   });
// }, 2000);
// -----------------------

//6- scrollBy(x , y|| options)
// كل مره بتنادي عليها بتغير الاحدثيات
// scrollBy(100,900)
//
// دي الاوبشن
// setInterval(function () {
//   window.scrollTo({
//     let: 10,
//     top: 800,
//     behavior: "smooth",
//   });
// }, 2000);
// ====================================================
//  Bom [broser object model]
// practice => scroll to top
// scrollx [Alias = > PageXoffset]
// scrollx ليها بديل  PageXoffset
// -------
// scrollY [Alias = > PageYoffset]
// scrollY ليها بديل  PageYoffset
// -------
// console.log(window.scrollX === pageXOffset)
// console.log(window.scrollY === pageYOffset)
// example

// let btn = document.querySelector("button");
// window.onscroll = function () {
//   if (window.scrollY >= 2000) {
//     btn.style = "display :flex";
//     btn.style.justifyContent = "center";
//     btn.style.alignItems = "center";
//   } else {
//     btn.style = "display :none";
//   }
// };
// btn.onclick = function () {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };
// ===========================================
// Bom [broser object model]
//1- local storage بيحتفظ بالبايانات علي طول حتي لو قفلت الصفحه وقفلتها
// setitiem بتحط الايتم وبتتكون من كي وفاليو
// getitiem بتجيب الايتم
// removeitiem بتشيل ايتم واحد بيحتاج منك الكي
// clear  بتمسح كل ال في اللوكل استورتج
// key بيجبلك الانديكس بتاع الكي  في الاوبجيكت

//2- info
// no expiration time مفيش بعد وقت معين ال بيانات دي تروح
// http and https الاستورتج هنا غير هنا
// private tab لو انت بتستعمل  بيانات اللوكل استورج بتروح

//local storage طريقه كتابه
// بيطلب منك كي وفاليو
// set
// window.localStorage.setItem("color", "red");
// window.localStorage["zindex"] = "9999";
// window.localStorage.fontSize = "20px";
// ----
// get
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage["color"]);
// -----
// remove بتشيل ايتم واحد بيحتاج منك الكي
// بتعمل ريموف للايتم
// window.localStorage.removeItem("color");
// -----
// clear بتمسح كل الايتم
// window.localStorage.clear()
// -----
// get key
// console.log(window.localStorage.key(1)) // دي علشان لو عاوز تعرف الكي ده جواه اي

// document.body.style.backgroundColor = window.localStorage.getItem("color");

// console.log(localStorage)

// let ge = document.querySelectorAll("ul li");
// let y = document.querySelector(".mine-colors");
// if (window.localStorage.getItem("color")) {
//   y.style.backgroundColor = window.localStorage.getItem("color");
//   ge.forEach((esl) => {
//     esl.classList.remove("active");
//   });

//   document
//     .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
//     .classList.add("active");
// }

// ge.forEach((es) => {
//   // ------
//   es.addEventListener("click", (e) => {
//     // ====
//     ge.forEach((esl) => {
//       esl.classList.remove("active");
//     });
//     e.currentTarget.classList.add("active");
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     y.style.backgroundColor = e.currentTarget.dataset.color;
//   });
// });
// -=======================================================================
// Bom [broser object model]
//1- sessionStorage storage بيحتفظ بالبيانات في الجلسه ال انت فيها بس
// setitiem بتحط الايتم وبتتكون من كي وفاليو
// getitiem بتجيب الايتم
// removeitiem بتشيل ايتم واحد بيحتاج منك الكي
// clear sessionStorage بتمسح كل ال
// key بيجبلك الانديكس بتاع الكي  في الاوبجيكت

//2- info
// new tap = new session اما بتفتح تاب جديده بتعمل نيو سيشن
// duplicate tap = copy session بتاخد نسخه السيشن
// new tap with same url = new session حتي لو بتنسخ اللنك

// المقارانات بين الاثنين

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

// let as = document.querySelector(".name");
// if (window.sessionStorage.getItem("text")) {
//   as.value = window.sessionStorage.getItem("text");
// }
// this.onkeyup = function () {
//   window.sessionStorage.setItem("text", as.value);
// };
// console.log(typeof as)
// ========================================
// ده تحدي لسه مخلصش
// let inp = document.querySelector(`[type="text"]`);
// let add = document.querySelector(`[type="submit"]`);

// document.forms[0].onclick = function (alaa) {
//   let a = false;
//   if (inp.value !== "") {
//     a = true;
//   } else {
//     alaa.preventDefault();
//   }
// };
// document.createElementNS;
// ==========================================
//  ده مثال من الاوبجيكت
// new Object
let v = new Object();

v.age = 30;

console.log(v.age + 20);
// ===============================
// وده النموذج ال انت ختو كا مثال وتقدر تعدل فيه براحنك
let user = {
  age: 20,
  pop: "hello",
  adreess: {
    cairo: 500,
    alxi: 200,
  },
  sayhello: function () {
    return `hello ${(this.age * this.adreess.alxi) / this.adreess.cairo}`;
  },
};
console.log(user.sayhello());
// نموذج من اوبجيت تاني
let y = Object.create(user);
y.age = 100;
console.log(y);
console.log(y.sayhello());
// =================================
// Destructuring for arrays
// تقدر تاخد البايانات من الاريه والاوبجيكت والماب وضيفهم في متغيرات جديده
//
// let f = 1;
// let h = 1;
// let c = 1;
// let z = 10;

// let myFriend = ["ahmed", "alaa", "mohamed", "kareem"];

// [f, h, c, z, e = "alol"] = myFriend;
// لو في قيمه ناقصه هنا  بياخدها من الفوق
// ولو ده اول دكلير ليه ومحطتلوش بينات undefined
// console.log(f);
// console.log(h);
// console.log(c);
// console.log(z);
// console.log(e);
// console.log(myFriend[4])
//  لو عاوز تفوت عنصر بتعمل مكانها قيمه فاضيه
// let [, m, , n] = myFriend;
// console.log(x);
// console.log(m);
// console.log(n);
// =====================================

// let myFriend = ["ahmed", "alaa", "mohamed", ["nada", "sara", ["aya", "fatma"]]];

// console.log(myFriend[3][2][1]);
// [, w, [, [, d]]] = myFriend;
// let [, , w, [, s, [, b]]] = myFriend;

// console.log(w);
// console.log(s);
// console.log(b);
// // =====================================
// // swap varubals
// // دي طريقه قديمخ
// let book = "video";
// let video = "book";

// let tial = book; // video

// book = video;
// video = tial;

// =====
// دي الطريقه الجديده بالدستركشن
// [book, video] = [video, book];
// // -----------

// console.log(book);
// console.log(video);
// ===============================================
// Destructuring for object
// في الاوبجيكت بتعمل دستركشن
// بتعمل فاريبول بنفس اسم القيم وبنقدر نغيره لو عاوزين الطريقه تحت
// اما بتكون عاوز تفوت قيمه مش بتكتبها عكس الاريه

// الحاله ال احنا فيها دي هنعمل لسه دكلير للفاريبول
// const obj = {
//   theName: "alaa",
//   thAge: 36,
//   theTitle: "developer",
//   thcontry: "egypt",
// };

// const { theName, theTitle, thcontry } = obj;

// console.log(theName);
// console.log(thAge);
// console.log(theTitle);
// console.log(thcontry);
// ------------
// الحاله التانيه دي دي عندك فاريبول اصلا معموله دكلير

//وبعد كدا let معلومه مهمه لو عندك فاريبول قبل كدا وهتعملو دستركشن بتشيل
// = بيعملك حطاء علي علامه
//() فا لازم نحط السطر كله في برن سيس  ال هو
// زي كدا
// ({ theName, thcontry, theTitle, thAge } = obj);

// console.log(obj.thAge);
// console.log(obj.thcontry);
// console.log(obj.theName);
// console.log(obj.theTitle);

// let theName = obj.theName;
// let thcontry = obj.thcontry;
// let theTitle = obj.theTitle;
// let thAge = obj.thAge;

// console.log(theName);
// console.log(thcontry);
// console.log(thAge);
// console.log(theTitle);

// ({ theName, thcontry, theTitle, thAge } = obj);
// console.log(theName);
// console.log(thcontry);
// console.log(thAge);
// console.log(theTitle);
// ====================================

// نقدر نغير اسم  المتغير عن طريق الخاصيه : دي ونحط بعديها الاسسم ال احنا عاوزينو
// thColor = "red" دي لو عاوز تعمل ديفولت فاليو بس اول ما تضيف
// قيمه في الدستكرشن  بياخد القيمه دي
// لو عاوز تخش علي  نستيد اوبجيت علشان تعملو دستركشن
// بتكتب اسم العنصر ال فيه النستتد وبعد كدا : العلامه دي
// وبعد كدا {}
// مثال skils: { html:h, css:s }
// ==================
// ({ html: alaa, css: amr } = users.skils); دي لو عاوز تعمل علي طول دستركشرنج للنستتد اوبجيكت
/*
let users = {
  theName: "ahmed",
  theAge: 20,
  theTitle: "devoloprs",
  theContry: "Egypt",
  theColor: "green",
  skils: {
    html: 20,
    css: 80,
  },
};

({
  theName: n,
  theAge: a,
  theTitle: t,
  theContry: c,
  theColor: cc = "red",
  skils: { html: h, css: s },
} = users);

let { html: alaa, css: amr } = users.skils;
console.log(n);
console.log(a);
console.log(t);
console.log(c);
console.log(cc);
console.log(`this skils for html:${h}`);
console.log(`this skils for css:${s}`);
console.log(`this skils for html:${alaa}`);
console.log(`this skils for css:${amr}`);
*/
// =============================================
// Destructuring for functions parmeters
// const users = {
//   theName: "alaa",
//   thAge: 26,
//   skils: {
//     html: 70,
//     css: 80,
//   },
// };
// showDetils(users);
// function showDetils(obj) {
//   console.log(`this user ${obj.theName}`);
//   console.log(`this age ${obj.thAge}`);
//   console.log(`this skils html:${obj.skils.html}`);
//   console.log(`this skils css:${obj.skils.css}`);
// console.log(`this user ${obj.theName}`);
// console.log(`this age ${obj.thAge}`);
// console.log(`this skils html:${obj.skils.html}`);
// console.log(`this skils css:${obj.skils.css}`);
// }
// function showDetils({
//   theName: a,
//   thAge: g,
//   skils: { html: h, css: cc },
// } = users) {
//   console.log(`this user ${a}`);
//   console.log(`this age ${g}`);
//   console.log(`this skils html:${h}`);
//   console.log(`this skils css:${cc}`);
// }

// =========================

// const all = {
//   theNameS: "ALAA",
//   theAges: 25,
//   skils: ["html", "css", "js"],
//   address: {
//     cairo: "egypt",
//     readh: "ksa",
//   },
// };

// const {
//   theNameS: alol,
//   theAges: g,
//   skils: [a, d, e],
//   address: { cairo: car, readh: rd },
// } = all;

// console.log(`this is names: ${alol}`);
// console.log(`this is age: ${g}`);
// console.log(`this is html: ${a} , ${d} , ${e}`);
// console.log(`this is css: ${d}`);
// console.log(`this is js: ${e}`);
// console.log(`this is adress one: ${car}`);
// console.log(`this is adress tow: ${rd}`);
// =======================================

// Destructuring for challnge
let chosen = 2;
let myFriends = [
  { title: "alaa", age: 26, available: true, skils: ["html", "css"] },
  { title: "amr", age: 30, available: false, skils: ["python", "js"] },
  { title: "sayed", age: 40, available: true, skils: ["php", "larvel"] },
];
let [
  {
    title: a,
    age: b,
    available: c,
    skils: [, e],
  },
  {
    title: d,
    age: f,
    available: g,
    skils: [l],
  },
  {
    title: k,
    age: m,
    available: n,
    skils: [, p],
  },
] = myFriends;

if (chosen === 1) {
  if (c === true) {
    c = "avlibal";
  } else {
    c = "notavlib";
  }
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(e);
} else if (chosen === 2) {
  if (g === true) {
    g = "avlibal";
  } else {
    g = "notavlib";
  }
  console.log(d);
  console.log(f);
  console.log(g);
  console.log(l);
} else if (chosen === 3) {
  if (n === true) {
    n = "avlibal";
  } else {
    n = "notavlib";
  }
  console.log(k);
  console.log(m);
  console.log(n);
  console.log(p);
} else {
  console.log(`كل فشار`);
}
// ======================================
/*
- set data type and the method
- syntax new Set()
- Set عباره عن بتاخد الاتربول بتاعك  ال هي الباينات المقرره تشيلها 
وتجيب منها قيمه واحده بس لو القيمه دي متقرره اكتر من مره 
let dat = new Set([1, 1, 1, 2, 3, 4]); زي كدا 
وممكن تحط المتغير بدل الاتربول ده زي كدا 
let dat = new Set(myfr);

properties : 
- size عباره عن عدد العناصر 
- منقدرش نخش علي الست  لعنصر من عن طريق الانديكس زي كدا 
console.log(dat[0]) undefined هيجبلك 
--------------------------------
method :
- add
// let dat = new Set().add(1).add(1).add(1).add(2).add(3).add(4);
// let dat = new Set();
// dat.add(1).add(1).add(1);
// dat.add(2);
// dat.add(3);
// dat.add(4);
-------------------------------------------------------
- delete
dat.delete(1);
dat.delete(2);
console.log(dat);
console.log(dat.size);
console.log(dat.delete(1)); هنا بيحبلك لو العنصر اتمسح بيجبلك ترو ولو لا بيجبلك فولس
-------------------------------------------------------
- clear
dat.clear(); بتشيل كل الداتا 
-------------------------------------------------------
- has
dat.has("A")
*/
let myfr = [1, 1, 1, 2, 3, 4, "A"];
// let dat = new Set([1, 1, 1, 2, 3, 4]);
let dat = new Set(myfr);
console.log(myfr);
console.log(dat);
console.log(dat.size);
console.log(myfr[0]);
console.log(dat[0]);
console.log(`SI SET HAS => ${dat.has("a".toUpperCase())}`);
// dat.add("A");
// dat.delete(1);
// dat.delete(2);
console.log(dat.delete(1));
dat.clear();
console.log(dat.size);
// ----------------------------------------------------
/* Set vs weak Set Garbage Collector
في الست 
* type data
- set
- set دي بتستور اي قيمه 
- size فيها 
- keys , values ,Entries تقدر تضيف فيها 
* forEach
- في الست  ينفع تعمل فور ايتش 
- myset.forEach((el) => {
  console.log(el);
});
* values + keys alias 
ده مثال علي الكي والفاليو 
ميثود next
دي بتجبلك كل عنصر من عناصر الاريه
والفاليو دي علشان تجبلك القيه 
done false لو حاله الاتريشن 
يبقي لسه في عناصر في الاتريشن 
let ietr = myset.keys();
console.log(ietr);
console.log(ietr.next().value);
console.log(ietr.next().value);
console.log(ietr.next().value);
console.log(ietr.next().value);
console.log(ietr.next());
----------------------------------------------------------------
في الويك ست 
- weak Set  دي بتستور الاوبجيكت بس 
- لو البيانات ال في الاوبجيكت دي ملهاش ريفرنس بتعمل حاجه اسمها
Garbage Collector
- weak Set size  مفهاش 
- مينفعش نستخدم forEach
let mysets = new WeakSet([{ a: 1, b: 1, c: 1, d: 2, e: 3, r: 4 }]) ده شكل الويك ست 

add: add()
constructor:  WeakSet()
delete: delete()
has: has()
*/
// تجارب set
let myset = new Set([1, 1, 1, 2, 3, 4]);

console.log(myset);

let ietr = myset.keys();
console.log(ietr);
console.log(ietr.next().value);
console.log(ietr.next().value);
console.log(ietr.next().value);
console.log(ietr.next().value);
console.log(ietr.next());

myset.forEach((el) => {
  console.log(el);
});

console.log("#".repeat(20));

// تجارب weak set

let mysets = new WeakSet([{ a: 1, b: 1, c: 1, d: 2, e: 3, r: 4 }]); // اول حاجه قالك الفاليو غلط
// هو مستني منك اوبجيكت  مش array

console.log(mysets);

// let ietrs = mysets.keys();
// console.log(ietrs);
// ==========================================================
/*  map vs object
map بتقبل مني 
- key and value
- map لا تحتوي علي ديفولت كي 
- object ليه ديفولت كي ممكن تتعارض مع الكي بتاعتك 
نقدر نعمل اوبجيت من غير ديفولت كي 
زي كدا 
let myEmtyobject = Object.create(null);
بتنشاء اوبجيكت بي nall prototype 
----------
- object  streng or symbol بيقبل الكي بتاعك عن طريق 
let news = {
  10: "number",
  10: "string",
};د
في الاوبيكت ده لو عندك 2 قيمه متشابها هيجبلك اخر قيمه علشان هيعمل اوفر 
رايت عليها 
وده الفرق بين map and object 
---     
- map [function or object or any primitive data type ] الكي ممكن يكون اي حاجه زي 
بتحط الكي والفاليو  
وبتنادي عليهم من طريق get 
وبين الاقواس بتحط الكي  ال انت عاوز الفاليو بتاعتها 
let newss = new Map();
newss.set(10, "number");
newss.set("10", "string");
newss.set(true, "bolean");
newss.set({ as: "alaa" }, "object");
newss.set(function dos() {}, "function");
console.log(newss.get(10));
console.log(newss.get("10"));

- map order by insertion هنا بترتبلك البيانات علي حسب الادخال ال انت بتعملو 
- object هنا الموضوع مش مظبوط 100 في الميه لحد الفديو ال بتفرج عليه 

- map git itnme by size  بتعرف عدد العناصر عن طريق السايز 
- object nedeed to do by manually في الاوبجيكت بتعرف عدد العناصر بطريقه القديمه 
الطريقه العاديه اهي 
let ne = Object.keys(news).length;
console.log(ne); دي طريقه اسهل 
ودي طريقه تانيه بردو 
let ne = Object.getOwnPropertyNames(news);
console.log(ne.length);
ودي طريقه Symbol 
  [Symbol('name')]: 'John Doe',
  [Symbol('age')]: 33,
let ne = Object.getOwnPropertySymbols(news);
console.log(ne.length);

- map تقدر تلوب عليها ديركتلي 
- object الاوبجيت مينفعش تلوب عليها ديركتلي لازم تعمل شويه خطوات 
تمسك الكي علشان تلوب عليها  object.keys()

- map افضل في الاداء عن الاوبجيكت اسرع في اضافه ومسح البايانات 
- object طبعا الاوبجيكت العكس 
---------------------------------------------------------------------
method map 
- set
let newsd = new Map([
  [10, "alaa"],
  [11, "string"],
  [false, "boolean"],
]);
هنا بضيف قوسين الاتربول بتاع الاريه 
كل كي وفاليو  بتحطهم جوه قوسين اريه 
زي كدا 
or 
newsd.set(10, "alaa")
newsd.set(11, "string")
newsd.set(false, "boolean")

- get
console.log(newsd.get(10));
console.log(newsd.get(11));
console.log(newsd.get(false));
ده get 

- delete 
console.log(newsd.delete(10)) هيجبلك ترو ان هو مسح فعلا  
علشان هو مش مسحها  false لو اديتو اي كي مش موجوده هيجبلك 
- clear
الكلير مبتقبلش فاليو 
newsd.clear();
- has
chek بتشوف هل الكي دي موجوده ولا لا 
console.log(newsd.has(false))
----------------
properties 
- size 

===========================
دي كلها امثله علي ال map , object
let newsd = new Map([
  [10, "alaa"],
  [11, "string"],
  [false, "boolean"],
]);

console.log(newsd.size);

console.log(newsd.delete(10));

console.log(newsd.has(false));

console.log(newsd.size);

newsd.clear();

console.log(newsd.size);

 newsd.set(10, "alaa");
 newsd.set(11, "string");
 newsd.set(false, "boolean");
 newsd.set(10, "alaa");
 newsd.set(11, "string");
- console.log(newsd);
- console.log(newsd.get(10));
- console.log(newsd.get(11));

- console.log(newsd.get(10));
- console.log(newsd.get(11));
- console.log(newsd.get(false));
- let ob = {};
- let myEmtyobject = Object.create(null);
- let obj = new Map();

- let news = {
-   10: "number",
-   ["10"]: "string",
-   alaa: 10,
- };
- let ne = Object.keys(news).length;
- console.log(ne);
- let newss = new Map();
- newss.set(10, "number");
- newss.set("10", "string");
- newss.set(true, "bolean");
- newss.set({ as: "alaa" }, "object");
- newss.set(function dos() {}, "function");
- console.log(ob);
- console.log(obj);
- console.log(myEmtyobject);
- console.log(news[10]);
- console.log(newss.get(10));
- console.log(newss.get("10"));

- console.log(newss);
- const pro = {
-   name: "dome",
-   age: 35,
- };

- const pros = new Map();
- pros.set("name", "dome");
- pros.set("age", 35);

- console.log(pros);
- console.log(pro);
*/
// ====================================================================
/* map vs WeakMap جاربتج كوليكتو بتشيل الحاجه ال ملهاش ريفرنس من الميموري
- weakmap 
-------------------------
map => تقدر تضيف اي شي في الماب
weakmap => هنا بضيف object bs 
اما نتلم عن weakmap 
حاجه بتسمح للجاربدج  كولكتر تعمل التاسك بتاعتها 
ال هي لو في الاوبجيكت ملهاش قيمه اور ريفرنس 
بيشيلو اوتوماتك من الممومري
* الجاربدج كولكتور 
بيشتغل بمزاجو 
*/
let mapUser = {
  thName: "alaa",
};

let myMap = new Map();

myMap.set(mapUser, "alaa");
mapUser = null;
console.log(myMap);

let mapUsers = {
  ff: "pop",
};

let vv = new WeakMap();
// mapUsers = null;
vv.set(mapUsers, "aa");
mapUsers = null;
console.log(vv);

/* 
let al = [1, 2, 3, 4, 5];
let ysd = al.map(function (v) {
  return v * 20;
});
console.log(ysd);
*/

let mUser = {
  thName: "alaa",
};
let os = new Map();

os.set(mUser, "alols");

mUser = null;
console.log(os);

let mw = { thNamed: "mw" };
let md = { thNamed: "mw" };

let mywk = new WeakMap();

mywk.set(mw, "alolc");
mywk.set(md, "alo");

mw = undefined;
md = null;
console.log(mywk);
// ===================================
/* array from method
بتعملك اريه  من الاتربول ال انت بتدهولو 

array from  بتقل مني 
itrbole , mapFunction, this argoment



*/

console.log(Array.from("alaa"));
console.log(
  Array.from("1235", function (a) {
    return +a + +a;
  })
);
console.log(Array.from("1235", (a) => +a + +a)); // arrow function

let myARR = [1, 2, 2, 4, 9];

console.log(
  Array.from(new Set(myARR), function (a) {
    return a + a;
  })
);

console.log(Array.from(new Set(myARR), (a) => a + a));

console.log(...new Set(myARR)); // دي حاجه من المستقبل اسمها SPRED OBRETOR

function testArg() {
  return Array.from(arguments); // الارجو منت  بترجع الارجو منت ال انت بتكتبهاولو
  // بديل للبراميتر
  // ال حصل دلوقتي ان الارجو منت حولتها لي اريه
}

console.log(testArg(10, 20, "alaa"));
// ========================================
/* array copy within  
هي بتنسح جز من الاريه بتاعك من لوكيشن لي لوكيشن تاني في نفس الاريه 
هنا بحافظ علي نفس عدد الاريه الاريه مش بتزيد بنقل عنصر مكان عنصر

* بيطلب مني 3 حاجات اول حاجه العنصر ال انت هتنقل مكانو 
* تاني حاجه الاستارت هتبداء منين 
* ثالث حاجه الايند هتنتهي  فين  زي كدا 
myArray.copyWithin(0,2,4)
لو النسخ ال هتنسخو ده اكبر من عدد الاريه مش هينسخ حاجه 
لو مكتبتش الاستارت هيعد من انديكس صفر 
ولو مكتبتش الايند هيعد لحد الاخر 
العد في الاريه دايما من الشمال حتي لو هتعد بقيمه سالبه
*/

let myArray = [1, 2, 3, 4, 5, "a", "b"];

// myArray.copyWithin(3)//[1, 2, 3, 1, 2, 3, 4] هنا انت مكتبتش start or end
// علشان كدا بداء من اندكس 3 ونسخ الاريه كلها بس عدد عناصر الاريه 7
// وهو مش بيزيد فا تجاهل الباقي

// myArray.copyWithin(0,5)
// myArray.copyWithin(4, -1);
// myArray.copyWithin(1, -2);
myArray.copyWithin(1, -2, -1);
// myArray.copyWithin(3, 6);
// myArray.copyWithin(2, 6);
// myArray.copyWithin(1, 6);
// myArray.copyWithin(0, 6);
console.log(myArray);
console.log("#".repeat(25));
// ======================================================
/* array some methods 
بتطبق فانكشن علي كل عنصر في الاريه 
وبنديلها شرط معين لو لقت الشرط ده اتحقق بترجع true 
وبتقف عمل الفانكشن بعد كدا 

* some بتقبل مني call bak function 
ودي الفانكشن ال بترن علي كل عنصر من عناصر الاريه 
وبتقبل مني 3 حاجات 
-1 element
-2 index
-3 array

* this argoment  الخاصه بي الكول باك فانكش دي 
*/

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let chek = arr.some(function(a){
//   return a > 4
// })
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
let argo = 3;
// ======================
let chek = arr.some(function (a) {
  // console.log(this) بتعود علي الارجو منت
  return a > this;
}, argo);
// =====
// let chek = arr.some((a) => a > 4); arrow function
// console.log(chek);
// =====
// function al(arr) {
//   return arr.some(function (a) {
//     return a == this;
//   }, argo);
// }
// console.log(al(arr));
// function al(arr, val) {
//   return arr.some(function (a) {
//     return a === val;
//   });
// }
// console.log(al(arr, 15));
// console.log(al(arr, 5));

// ========================

let cheks = {
  aa: 10,
  bb: 20,
};
// دي طريفه بالفانكشن
// function ss(arr, va) {
//   return arr.some(function (a) {
//     // console.log(va.aa);
//     // console.log(va.bb);
//     return a >= va.aa && a <= va.bb;
//   });
// }
// console.log(ss(arr, cheks));

// دي طريقه بي الارجو منت لي الاوبجيت
// let chekup = arr.some(function (a) {
//   return a >= this.aa && a <= this.bb;
// }, cheks);

let chekup = arr.some((l) => l >= cheks.aa && l <= cheks.bb); // هنبحث في دي

// console.log(this)
console.log(chekup);

// =================================================
/*array every 
هنا عكس ال some 
some اي عنصر بينبطق عليه الشرط بيرجه true 
evrey لازم كل العناصر ينبطق عليها الشرط علشان يرجع true 

* every بتقبل منك 3 حاجات 
-1 element
-2 index
-3 array

* this argoment  الخاصه بي الكول باك فانكش دي 

*/

let ob = {
  20: "place 1",
  30: "place 2",
  19: "place 3",
  50: "place 4",
};

let mine = 15;

// let vs = Object.keys(ob)
// console.log(vs);
let ans = Object.keys(ob)
  .map((a) => +a)
  .every(function (b) {
    return b > this;
  }, mine);

console.log(ans);
// ==========================================
/* spread syntax opreator 
... iterbal  بتساوي
معنها انها بتفك العناصر ال موجوده في الاتربول 


*/
console.log("osama");
console.log(..."osama");
console.log([..."osama"]);

// cancatenate
let myarray1 = [1, 2, 3];
let myarray2 = [4, 5, 6];
let allArays = [...myarray1, ...myarray2];
console.log(allArays);
// copy arrays
let copyArrays = [...myarray1];
console.log(copyArrays);
// push inside arrays
let myfrindesArrays = ["alaa", "mohamed", "amr"];
let frendsOnYear = ["amir", "sayed", "ali"];
// دي طريقه
let allFrend = [...myfrindesArrays, ...frendsOnYear];
console.log(allFrend);
// ودي طريقه
myfrindesArrays.push(...frendsOnYear);
console.log(allFrend);
// use with math object
let pp = [10, 20, 50, 1000, 1004];
console.log(Math.max(...pp));
// spreid with object

let objj = {
  a: 1,
  b: 2,
  c: 3,
};
let objjj = {
  d: 3,
  e: 5,
};

console.log({ ...objj, ...objjj, f: 19 });
// ===========================================
// challenge map and set

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
let chien = [...new Set(n1, n2)],
  [one, , three] = chien;
console.log(one * ++three);
// تم حل المساله
// ===========================================
/* intro regular expression
بتعمل باترن معين تمشي علي الاميل او الاي بي تعرف هو فلد ولا لا

- 1 Email
- 2 ip
- 3 phone
- 4 url
===============================
regular expression modifiers 
بعمل بترن معين وبعمل ماتش لي الترن ده 
بيجبلي الاندكس بتاع العنصر 
وبيجبلي input ال فيه الاسترنج 




syntax 
1- /patern /modefiers (s) 
2- new regular|||  ("patern", "modefiers (s)")
========
modefiers 
بتعدل طريقه البحث  وتقدر تستخدم اكتر من فلاج مع بعض 
i => casse insensitive  لو كتبت الحرف ده معنها الحروف غير حساسه 
e = E دي زي دي 
هيجبلك اول كلمه تقابلو ملوش علاقه هي كابتل ولا سمول 
مثال : /alaa/i;
-----
g => global
بيجبلك كل النتايج ال بنفس الاسم
يني لو عند اسمين alaa ALAA 
هيجبهملك الاثنين 

وبيجبلك length بتاعم 
مثال 
(2) ['Alaa', 'alaa']
0
: 
"Alaa"
1
: 
"alaa"
length
: 
2
-----
m => mulilines
دي لز عندك اكتر من لاين وتبحث فيهم 
=========
serch method
match (pattern)
=========
match 
- بترجع لو اكتر من ماتش في اريه 
- لو بحثت علي نتيجه مش موجوه هيرجع null
==================================================
regular expression - ranges part 1 
part 1 
/(org|info|net)/g  دي لو هتحط اكتر من بترن ده او ده او ده 
g ولو انت عاوز تخليها يجبهملك كلهم بتحط فلاج 
1 - (x|y)=> x or y  ده الباترن لي الاسترنج 
2 - [0-9]=> 0 to 9  ده الباترن بتاع الارقام 
دي علامه ^ النوت 
3 - practice


*/
// كتابه الباترن
let alol = "hello Alaa mohsen i love alol alaa ";
let reg = /alaa/gi;
let rg1 = /mohsen/;
console.log(alol.match(reg));
console.log(alol.match(rg1));

// patern string
let tid = "Org Info Com Net Io";
let tildre = /(org|info|net)/gi;
console.log(tid.match(tildre));

// patern number
let all = "1234567899101112"; // ملوش علاقه بي 10
let ptr = /[0-2]/g;
console.log(all.match(ptr));
// patern number /[^0-2]/ دي نوت يعني هنا بقولو جبلي كل البترن معادا
// ^ دي علامه النوت
let Notall = "1234567899101112";
let Notptr = /[^0-2]/g;
console.log(Notall.match(Notptr));
// patern number /[^0-9]/ انا هنا بقولو جبلي اي حاجه غير الارقام
// ال هو الاسبيشيل كراكتر
let spechil = "12!34%56##7899101%112";
let spechilc = /[^0-9]/g;
console.log(spechil.match(spechilc));
// practice /os[5-8]os/g هنا انا حددت اكتر من بترن في نفس الوقت
// قولتلو انا عاوز الدايه os
// ورنج الارقام من 5- 10
// ويكون بعديها os
let practice = "os1 os123 oas12os os7 os8 os8os";
let practiceReg = /os[5-8]os/g;
console.log(practice.match(practiceReg));
// ========================================
// ========================================
// ========================================
// اعاده شرح regular expressions

let names = "hello alaa mohsen Alaa Mohsem welcome";
let nemsre = /Alaa/gim;
console.log(names.match(nemsre));
// new RegExp ("","")

// regluar  renges

let alls = "alol.com ahmed.net pro.org";
let rg = /(.com|.org|.net)/gi;
console.log(alls.match(rg));

let mums = "12345678910";
let numRe = /[0-5]/g;
console.log(mums.match(numRe));

let notmums = "12@#34#$!567891^0alol";
let notnumRe = /[^0-9]/g;
console.log(notmums.match(notnumRe));

let practiceo = "os1 os1os os2 os8 os8os os9os";
let practicet = /os[5-9]os/g;
console.log(practiceo.match(practicet));

let wow = "ABCabcdsefhtxyxmFMYDSLlG1234%*^$&";
let wowre = /[a-z]/g; // هنا بتجيب a-z
let notwowre = /[^a-z]/g; //هنا بتجيب عكس a-z
let cap = /[A-Z]/g; // هنا بتجيب A-Z
let notcap = /[^A-Z]/g; // هنا بتجيب عكس A-Z
let cract = /[acm]/g; //[acm] هنا بتجيب كراكتر معين لو موجود مثلا  small
let Cacract = /[ABC]/g; //[ABC] هنا بتجيب كراكتر معين لو موجود مثلا  captal
let cractre = /[^acm]/g; //[^ABC] هنا بتجيب عكس  كراكتر معين لو موجود مثلا
let ran = /[a-z]/gi; // هنا لو عاوز تجيب من a-z captal and small
let ranA = /[a-zA-Z]/g; // دي طريقه تانيه هنا لو عاوز تجيب من a-z captal and small
let spechils = /[^a-zA-Z]/g; // هنا لو عاوز تجيب عكس a-z A-Z كابتل وسمول
let spechilsbs = /[^a-zA-Z0-9]/g; // هنا بتجيب عكس A-Z and a-z and 0-9
console.log(wow.match(wowre));
console.log(wow.match(notwowre));
console.log(wow.match(cap));
console.log(wow.match(notcap));
console.log(wow.match(cract));
console.log(wow.match(Cacract));
console.log(wow.match(ran));
console.log(wow.match(ranA));
console.log(wow.match(spechils));
console.log(wow.match(spechilsbs));
// [a - z]; بتبحث في الرنج من  a - z smoll
// [A - Z]; بتبحث في الرنج من  A - Z CAPTIAL
// [^a - z] بتبحث عكس a-z
// [^A - Z] بتبحث عكس A-z
// [abc] بيحث هل الكراكتر دول موجودين ولا لا small abc
// [ABC] بيحث هل الكراكتر دول موجودين ولا لا CAPTAL ABC
// [^abc] بيحث هل الكراكتر دول موجودين ولا لا small abc

/*
دول طريقتين علشان تجيب الحروف الانجليزيه كابتل والاسمول مع بعض
let ran = /[a-z]/gi;i اول طريقه بتحط فلاج 
let ranA = /[a-zA-Z]/g; تاني طريقه بتكتب الباترن الاثنين جمب بعض 
*/
// ----------------------------------
/*
reglur exp chracter clasess part1 
.   بيماتش اي كراكتر  معادا النيو لاين  و  ال لاين ترمنيتور
\w بيماتش [a-z , A-Z , underscore]
\W مش بيماتش الورد كراكتر عكس الدبليو الاسمول 
\d   0-9  الديدج  بيماتش من  
\D non degt 0-9 عكس من 
\s دي الاسبيس كراكتر 
\S دي عكس الاسبيس كراكتر 
\b دي انا عاوز لو الكراكتر ده بيبتدي بي او بينتهي بي 
\B هنا عكس الكراكتر لو بيبتدي بحاجه معينه هيبقي عكسو 

method test  دي بترجهلك  true or fasle 
علي حسب البترن ده موجود ولا لا 
وبتستخدم في الكوندشن 
rspamer.test(spmer) لتاخد منك البترن ال انت عملتو الاول 
وبعد كدا بيطلب منك input بتاعك
عكس match 
*/
let Email = "o@@@...com o@g.com o@g.net A@Y.com o-g.com o@s.org 1@1.com";
let dot = /./g;
let word = /\w/g;
let wordCP = /\W/g;
let deg = /\d/g;
let nondeg = /\D/g;
let space = /\s/g;
let spaceC = /\S/g;
console.log(Email.match(dot));
console.log(Email.match(word));
console.log(Email.match(wordCP));
console.log(Email.match(deg));
console.log(Email.match(nondeg));
console.log(Email.match(space));
console.log(Email.match(spaceC));
let viled = /\w@\w.(com|net)/g;
console.log(Email.match(viled));
// =========================================
let spmer = "sayed spam123 123spam snam alaa";
let rspamer = /\bspam/gi; // هنا بيتبدي بكلمه اسبام
let rspamers = /spam\b/gi; // هنا بينتهي بكلمه اسبام
let rspamersl = /(spam\b|\bspam)/gi;
console.log(spmer.match(rspamer));
console.log(spmer.match(rspamers));
console.log(spmer.match(rspamersl));
// --------------------
// test method
// دي طريقتين للكتابه
console.log(rspamer.test(spmer));
console.log(/spam\b/gi.test("sayed spam123 123spam snam alaa"));
// ===============================================
/* regluar quantifiers part 1 هي بتساعدك علي تحديد الكميه 
n+ one or more  ورد كراكتر او اكتر 
n* zero or more دي معانها في رقم او اكتر  ولا لا 
في بينهم رقم يعني ولا لا 
n? zero or one هنا يا موجود رقم مره يا اما مش موجود
*/
// =================================
let mails = "o@nn.com alaa@gmail.com elzero@gmail.net Mohsen123@gmail.org";
// let mailsreg = /\w+@\w+.(net|org)/gi;
let mailsreg = /\w+@\w+.\w+/gi;
console.log(mails.match(mailsreg));

let nums = "0101 10 150 05120 0560 350 00";
let numsre = /0\d*0/gi;
console.log(nums.match(numsre));

let link = "https://alaa.com http://www.mohamed.net web.com";
// let linkre = /https?:\/\/(www.)?\w+.(net|com)/gi;
let linkre = /(https:\/\/)?(www.)?\w+.(net|com)/gi; // تقدر تعمل جروب كدا
console.log(link.match(linkre));
// ====================================================
/* regluar quantifiers part 2 هي بتساعدك علي تحديد الكميه 
ده للارفام 
n{3} number of  هنا بتقوله عاوز 3 ارقام بينهم 
n{x,y} range هنا رنج بين رقمين 
n{x,} at last x  هنا بتديلو رقم مكان الاكس وبتقولو عاوز الرقم ده او اكتر 
*/
let saler = "S100S S3000S S50000S S950000S";

console.log(saler.match(/s\d{3}s/gi)); // هنا بتقوله عاوز 3 ارقام بينهم
console.log(saler.match(/s\d{4,5}s/gi)); // هنا رينج بين رقمين
console.log(saler.match(/s\d{4,}s/gi)); //هنا بتديلو رقم وتقولو الرقم ده او اكتر
// ======================================================
/*regluar quantifiers part 3 هي بتساعدك علي تحديد الكميه 
=============
$ معانها الاسترنج بتاعي بينتهي بكلمه معينه ولا لا 
-------
^ معناها الاسترنج بتاعي بيبداء بكلمه معينه ولا لا 
-------
?= يكون متبوع بكراكتر معين 
يعني انا عاوز اجيب عدد حروف معينه وبقولو يكون بعد الحروف 
دي مثلا حرف 
z
-------
?! ده النوت 
عكس الفلود 
بتجيب حروف معينه وتقوله ميكنش بعدها حرف معين 
بمعني اصح 
مش متبوع بحرف معين 
=============
*/
let myString = "we love alaa mohsen";
let namess = "10samaZ 2ahmedZ 3mohamed 4moustfa 5GamalZ";

console.log(/sen$/gi.test(myString));
console.log(/^we/gi.test(myString));
console.log(/lz$/gi.test(namess));
console.log(/^10/gi.test(namess));
console.log(/^\d/gi.test(namess));
console.log(/^\w/gi.test(namess));

console.log(namess.match(/\d\w{5}(?=z)/gi));
console.log(namess.match(/\d\w{7}(?!z)/gi));
// ============================================
/* regluar expr replace and replaceAll
replace بيبدل الكراكتر بحاجه تانيه زي كدا 
- console.log(txt.replace("@","alolsd"))
replaceAll
*/
let txt = "alol king @ coming ahmed @ background alol";
console.log(txt.replace("@", "javascript"));
console.log(txt.replaceAll("@", "javascript"));

// let regl = /(^alol|alol$)/gi;
// console.log(txt.replace(regl, "back"));
console.log(txt.replaceAll(/(^alol|alol$)/gi, "hello"));
// ================================================

document.getElementById("regist").onsubmit = function () {
  let phones = document.getElementById("phone").value;
  let patt = /\d{4}\s\d{3}-\d{5}/g;
  let vialds = patt.test(phones);
  if (vialds === true) {
    return true;
  } else {
    return false;
  }
};
// ============================================
// test alaa
document.getElementById("sing").onsubmit = function () {
  let userss = document.getElementById("users").value;
  let numbrss = document.getElementById("number").value;
  let emals = document.getElementById("email").value;
  // ------------ patern
  let userR = /\w\s\d{2}\w+/gi;
  let numses = /\d{4}\s\d{2}-\d{5}/gi;
  let emaild = /\w+\d{3}@\w+.(com|net)/gi;
  // -------------tests
  let vaildUser = userR.test(userss);
  let vaildNimb = numses.test(numbrss);
  let vaildEmail = emaild.test(emals);

  if (vaildUser == false) {
    return false;
  } else if (vaildNimb == false) {
    return false;
  } else if (vaildEmail == false) {
    return false;
  } else {
    return true;
  }
};
// ======================================
/* درس  الاوبجيكت اورينتد بورجرامنج || Object oreanted programing
opp


*/
let alolvsd = "names";
let aged = "ages";

let alols = {
  names: "alaa",
  ages: 26,
  gitages: () => alols.ages * 365,
};

console.log(alols.gitages());
console.log(alols.alolvsd); // undefined in dot notation
console.log(alols[alolvsd]); // valid in brackt notation
console.log(alols[aged] + 10); // valid in brackt notation

let Alaa = new Object();
Alaa.first = "Alaa";
Alaa.latName = "mohsen";
Alaa.gitfinc = () => `Alaa coming ${Alaa.first} ${Alaa.latName}`;

console.log(Alaa.gitfinc());
console.log(Alaa["first"]);
console.log(Alaa.latName);

let zm = {
  alolk: false,
  show: function () {
    return `this ${this.alolk ? "for you" : "لسه شويه"}`;
  },
};
console.log(zm.show());
let amr = Object.create(zm);
amr.alolk = true;
console.log(amr.show());

// -------------------- object assign
let objs1 = {
  prop1: "alaa",
  prop3: "amr",
  prop2: "mohamed",
  al1: function () {
    return "method 1";
  },
};
let objs2 = {
  prop11: "alaa",
  prop22: "value",
  al2: function () {
    return "method 2";
  },
};

let target = {
  basha: "fof",
};
Object.assign(target, objs1, objs2, { alolv: "pop" }); // دي بتعمل نسخ من اوبجيكت علي طول في اوبجيكت تاني
console.log(target);
const newobjAssing = Object.assign({}, target, { prop: "9" }); // دي بتعمل اوبجيكت جديده وتعمل نسخ من اي اوبجيكت تاني
console.log(newobjAssing);
console.log(newobjAssing.prop);
console.log(newobjAssing["prop3"]);
console.log(newobjAssing["prop22"]);
console.log(newobjAssing.al1());
console.log(newobjAssing.al2());
// --------------------------- delete oprator
// انت بتعمل دليت لي البروبرتي مش لي الاوبجيكت
const users = { bad: "of" };

// delete users.bad;
delete users["bad"];
console.log(users);
console.log(users.bad);
// اول طريقه
// منقدرش نحذف قيمه في متغير اي كان var let const
// زي كدا
const ziz = "ahmed";
// delete ziz; // دي طريقه المسح
// console.log(delete ziz); // وهنا بيجبلك ترو او فولس حذف لا لا وتقدر تغيرها عن طريق الفلاج
// تاني طريقه
// في حاجه اسمها اوبجيكت فريز بتمنع مسح البروبرتي من الاوبجيكت
const frez = Object.freeze({ alaaaa: "35" });
// console.log(frez);
// // console.log(delete frez.alaaaa);
// console.log(frez);
// ثالث طريقه
// بتغير configurable
// علي حسب انت عاوزو true or false
// false مش هتحذف البروبرتي
// defineProperty بيطلب منك 4 حاجات
// بيطلب منك اولا الاوبجيكت بتاعك emty
// تاني حاجه الكي  "ps"
// ثالث حاجه {value:1}
// رابع حاجه {value:1,configurable: false  } الفلاج
const emty = {};
Object.defineProperty(emty, "ps", { value: 1, configurable: false });
console.log(emty);
console.log(emty.ps);
// delete emty.ps;
console.log(emty);
console.log(emty.ps);
// ======================================================
// for in loop
// بيطلب منك الفاريبول وبيطلب منك الاوبيكت ال فيه البروبرتي هتاكسس عليها
const newob = {
  Names: "Alaa",
  ages: 26,
};
let final = "";
for (let no in newob) {
  final += `<div  class="so">the ${no} => ${newob[no]}</div>`;
}
let ele = document.getElementById("lol");
ele.innerHTML = final;
ele.style.color = "green";
ele.style.backgroundColor = "yellow";
ele.style.margin = "10px";
ele.firstChild.className = "wow";
ele.lastChild.className = "wow";
// ==========================================
// constractor function
function Phone(name, options, color) {
  this.namesd = name;
  this.options = options;
  this.color = color;
}
let namessd = new Phone("alaa", "full opthion", "red");
let name1 = new Phone("alaa", "full opthion", "red");
let name2 = new Phone("alaa", "full opthion", "red");

console.log(namessd.color);
console.log(namessd.namesd);
console.log(namessd.options);
console.log("#".repeat(10));
console.log(name1.color);
console.log(name1.namesd);
console.log(name1.options);
console.log("#".repeat(10));
console.log(name2.color);
console.log(name2.namesd);
console.log(name2.options);
// ===============================================
function SyaHelli(anyOne) {
  //constractor function دي الفانكشن العاديه وشبيها لي
  return `HELLO ${anyOne}`;
}
console.log(SyaHelli("Alaa"));
// دي بقي constractor function

function Phonns(colors, models) {
  this.ca = colors;
  this.fa = models + 1;

  console.log(this);
}
let firstObj = new Phonns("red", 2020);
let socondObj = new Phonns("green", 2022);
let thrdObj = Phonns("black", 2022); // لو انت معملتش new
//window بيحط البروبرتي في ال
console.log("#".repeat(25));
console.log(firstObj.ca);
console.log(firstObj.fa);
console.log("#".repeat(25));
console.log(socondObj.ca);
console.log(socondObj.fa);
console.log("#".repeat(25));
console.log(firstObj.ca);
console.log(socondObj.ca);
console.log(window.ca);
// instanceof دي بتسالو الاوبجيكت ده واخد الكونستركتور بتاعو منين
console.log(firstObj instanceof Phonns); //true // هنا بيقولو  البروبرتي دي واخدها الكنستركتور بتاعها من الفون اوبجيكت
console.log(socondObj instanceof Phonns); //true
console.log(thrdObj instanceof Phonns); //false
console.log(thrdObj instanceof Window); //FALSE
console.log(socondObj.constructor === Phonns); // TRUE  دي طريقه تانيه
console.log(Phonns === socondObj.constructor); // TRUE  دي طريقه تانيه
console.log(Window.constructor === firstObj); // FALSE
// ==============================================
// dealing with properties هنشوف ازي نقدر نضيفها بطريقه صحيحه جوه الكونستركتور
function User(theNames, theLastName, thaAges) {
  this.name = theNames;
  this.last = theLastName;
  this.thAge = thaAges;
  this.cont = "Egypt";
  this.fallNames = function () {
    return `fullName ${this.name} ${this.last} and ages ${this.thAge}`;
  };
  this.agesl = function () {
    return `this ages for days ${this.thAge * 365}`;
  };
}
let user1 = new User("alaa", "mohsen", 26);
let user2 = new User("mohame", "mohsen", 22);
let user3 = new User("dina ", "mohsen", 17);
// let user2 = new User();
console.log(user1.name);
console.log(user1.last);
console.log(user1.thAge);
console.log(user1.fallNames());
console.log(user2.fallNames());
console.log(user3.fallNames());
console.log(user1.agesl());
console.log(user2.agesl());
console.log(user3.agesl());
// ==================================
console.log(user1.cont);
// console.log(user2);
// ===========================================
// constructor function tarinings

function upD(NAM, AG, email, show) {
  this.na = NAM;
  this.ag = AG;
  this.mill = email;
  this.emailShow = function () {
    if (show === true) {
      return this.na;
    } else {
      return this.mill;
    }
  };
  this.update = function (news, v) {
    // دي هبتعمل ابديت لي فاليو
    // عن طريق method
    this.ag = news;
    this.na = v;
  };
  this.showName = function () {
    if (this.ag > 15) {
      return this.na;
    } else {
      return `no update`;
    }
  };
}
let end = new upD("ahmed", 20, "alolking@gmaill.com", 19);
console.log("#".repeat(20));
console.log(end.ag);
end.update(20, "alaa");
console.log(end.ag);
console.log(end.na);
console.log(end.emailShow());
console.log(end.showName());
// ===========================================
// conustractor function bilt in consutractor
// let or var.constructor علشان تغرف الكونستركتر بتاع الحاجه دي
function Alaak(neam) {
  this.naa = neam;
  this.gitSay = () => {
    return `hrllo ${this.naa}`;
  };
}
let ab = new Alaak("pop");
let ad = new Alaak("amr");
// const vvv = new Object(); // دي بلت ان فانكشن كونستراكتور جاهزه
const ss = new Object({ vv: 1 }); // دي بلت ان فانكشن كونستراكتور جاهزه
const num = new Number(2); // دي بلت ان فانكشن كونستراكتور جاهزه
const st = new String("st");
const dos = "wow"; //dos.constructor string;
const doss = 1; //doss.constructor number;
let obb = { a: 1 }; //obb.constructor object;

console.log("#".repeat(20));
console.log(ab.naa);
console.log(ad.naa);
// =======================================
// prototype
// بتعرفك الحواص ال بتورثها الفانكشن دي او الحاجه دي
// constructor دي البروبرتي
// object دي الفاليو
// ايا يكن بقي الاوبجيكت ده اي string or number or object or boolean or array  or any thing
// اللغه بدور علي الحاجه ال انت طالبها في الاوبجيكت
// لو ملفاش اليثود دي في الاوبجيكت بيدور عليها في
// prototype
// ملقهاش بيدور في prototype ال بعدها
function vs(neam) {
  this.naa = neam;
  this.gitSay = () => {
    return `hrllo ${this.naa}`;
  };
}
let abs = new vs("pop");
let ads = new vs("amr");
console.log(vs.prototype);
vs.prototype.add = function () {
  // دي انشاء بروتو تيب من غير ما تعدل علي
  // constructor
  return `hello`;
};

// دي انت عملت بروتو تايب في الاوبجكت كله اي حاجه تبع الاوبجيكت
// هتلاقي في method
// prototype ال انت عملتها وحطتها في

// let newOBj = new Object({ a: 1 });
// Object.prototype.adds = "hello alaa"; // دي property
// Object.prototype.ps = function () {
//   // دي method
//   return `طوز`;
// };
// let uss = {
//   da: 12,
// };

// console.log(vs.prototype);
// console.log(abs);
// console.log(Object.prototype);
// ============= تكمله prototype
// console.log(String.prototype); // دي بتجبلك كل الميثود ال في string

// هيتعاد
String.prototype.new = function (a) {
  let van = this; // هتعود علي الاسم ال هيكتبو الشخص

  while (van.length < a) {
    van = `${van}0`;
  }
  return van.toString();
};
console.log(String.prototype);
let dw = "home";
console.log(dw.new(10));

// ---------- تكمله prototype درس 19 لسه هيتذاكر
// كل اوبجيكت بيبقي ليه بروتو تايب
// الفانكشن في الجافا اسكربت عباره عن اوبجيكت

class fd {
  constructor(vs, ks) {
    this.oo = vs;
    this.ss = ks;
  }
  ob() {
    return `back`;
  }
}

let ds = new fd("hello", "worled");
let ussd = new fd("hello", "worled");
console.log(fd.prototype);
console.log(ds);
console.log(`${ds.oo} ${ds.ss} ${ds.ob()}`);
// مثال
const arrs = [1, 2, 3, 4]; // دي اريه
// ال بينشاها الكونستركتر اريه
// وال بينشاء الكونستركتور اريه في البروتو تايب
// هو الكونستركتور اوبجيكت  في البروتو تايب
// -------
// دلوقتي هنحكي اي ال بيحصل وراء الكواليس اما بتعمل كونسركتور فانكشن
// 1- اللغه بتنشاء اوبجيكت فاضي
// 2- وبعد كدا بتعمل assing for this
//  دي بتساوي الاوبجيكت الجديد ال هتنشاء this يعني
// زي كدا  this = {}
// 3- this.____proto____ = ds.____proto____
// المقصود انها بتعمل لينك بين البروتو تايب بتاع الاوبحيكت الجديد
// وبين البرتو تايب بتاع الفانكشن او الكلاس  زي هو موضوح
// 4- reten new object بترجع الاوبجيكت الجديد
// reten this
// ====================================
// ------ تكمله prototype syntax class
// * اول اختلاف بين الكلاس وبين الفانكشن
// الكلاس مينفعش تنادي عليه قبل ما تعملو دكلير
// * تاني حاجه تقدر تحط الميثود بتاعتك علي طول
// بعد الكونستركتر
// * لو عملت اوبجيكت من الكلاس من غير كلمه new هيطلع error
// class M {
//   constructor(w, s) {
//     this.ad = w;
//     this.as = s;
//   }
// }
// let sf = new M("A");
// let dow = new M("ds");
// console.log(sf.ad);
// console.log(dow.ad);

class sd {
  constructor(ddf, b) {
    this.val = ddf;
    this.val2 = b;
  }
  sayhellos() {
    return `hello ${this.val}`;
  }
  ages() {
    return `this is ${this.val2}`;
  }
}
console.log(typeof sd); //
let us = new sd("alaa", 20);
let usd = new sd("m", 30);
console.log(us.sayhellos());
console.log(usd.sayhellos());
console.log(us.ages());
console.log(usd.ages());
// ============== class static properties and method
// static properties and method دي حاجه خاصه بي الكيلاس او الفانكشن
// ملهاش دعوه بي الاوبحيكت ال بتنشاءه
// بتعمل فانكشن لي الكيلاس
class Alaaa {
  static mak = 0;
  constructor(So, See) {
    this.dol = So;
    this.do2 = See;
    Alaaa.mak++;
  }
  sayHello() {
    return `vvv`;
  }
  static get() {
    return this.mak;
  }
}
let facke = new Alaaa("alaa", "M");
console.log(facke.dol);
console.log(facke.do2);
console.log(Alaaa.get());
// ==========================================
// class inheritance التوريث
// بتقدر تورث من الكلاس الرئيسي الخواص بتاعته وتضيف عليها
// عن طريق extends واسم الكلاس ال انت هتستخلص منو
// super(name, parm) وعن طريق
// --------
// لو انت معندكش ميثود  في الكلاس الجديد وعندك الكلاس ال انت هتورث منه
// فيه ميثود بتاكسس عليها عادي
// انما لو عندك الميثود ال في الكيلاس ال انت وارث منه نفس الميثود
// ال في الكلاس ال انت عاملو الجديد بيعمل زي اوفر رايت
class admin extends Alaaa {
  constructor(name, parm) {
    super(name, parm);
  }
  sol() {
    return `visa`;
  }
  sayHello() {
    return `mmmm`;
  }
}
let ll = new admin("bank", "vad");
// ============================================
// geters ,setters
// get تقدر تحول الميثود لي بروبرتي واما
// تيجي تنادي علي الميقود هتنادي عليها من غير الاقواس
// هي تعتبر simbel synatx
// زي كدا
// get back() {
//   return `zoom`;
// }
// set تقدر تحول الميثود لي برورتي وتعدل فيه كمان
// زي كدا
// this.call = "wow" دي طريقه التعديل علي الميثود في set

// get set  فيها تقدر تخلي الكود بتاعك  برايفت
// ومحدش يقدر يخش عليه غير من خلال الكلاس
// وعلشان تخش عليها من خلاص الكلاس عن طريق get

class sl {
  constructor(a, b) {
    this.vi = a;
    this.vw = b;
  }
  get back() {
    // ده get
    return `zoom`;
  }

  //  /**
  //    * @param {any} newName
  //    */ // هنبحث عن دي
  set call(newName) {
    // set
    return (this.vi = newName);
  }
}
// this.call = "wow"
let soCute = new sl("hello", "word");
console.log(soCute.back); // ده get بتبقي من غير اقواس
console.log((this.call = "wow")); // دي طريقه  set وبتعمل ابديت كدا
// ==============================================================
/*/ object meta data معناها معلومات عن معلومات
الاوبحكيت بيبقي ليه اتروبيت زي 3 ال تحت دول 

1- writable object يعني قابل للكتابه نقدر تكتب وتعدل عليه لو هو true 
ولو false  مش هتعرف تعدل عليه 
طب نعدل ازي  زي كدا 
vaulit.c ="how" ده التعديل ومش هيتعدل بسبب
writable: false,
writable: true,  انما لو هيتعدل عادي
--------
2- enumerable دي خاصه بي اللوب 
لو انت مخليها fasle 
الخاصيه ال انت ضايفها دي مش هتظهر في اللوب 
-------
3- configurable object لو 
configurable مش هتعرف تغير في اي حاجه في 
الاتربيوتس ال موجوده 
وكمان لو عاوز تمنع delete  property وهي fasle 
مش هينفع  لازم تكون 
true 
======================
object.defineProperty(object,property,discraptor)
defineProperty دي بتحط بروبتي جديده في الاوبجيكت 
او بتعدل بروبرتي في الاوبجيكت  
بتقبل منك 
1-object الاوبجيت
2-property الخواص 
3-discraptor دي الاتربيوت
*/
const vaulit = {
  caw: "hello",
  maw: "world",
};
Object.defineProperty(vaulit, "cv", {
  writable: false,
  enumerable: true,
  configurable: true,
  value: "ban",
});
// writable
vaulit.cv = "how";
console.log(vaulit);
console.log("#".repeat(15));
// enumerable;
for (let vals in vaulit) {
  console.log(vals, vaulit[vals]);
}
// configurable
console.log(delete vaulit.cv); // ده الدليت
Object.defineProperty(vaulit, "cv", {
  //وده لو هتعمل ابديت والاساسيه في الكونفجربول false
  // مش هتعرف تعمل updadte
  writable: true,
});
vaulit.cv = "wow";
console.log(vaulit);

// getOwnPropertyNames; enumerableملهاش علاقه بي
console.log("#".repeat(15));
console.log(Object.getOwnPropertyNames(vaulit)); // دي ميثود
// بتجبلك البيانات ال في الاوجيكت علي هيئه array
// ================================= defineProperty تكمله
/*منتعلم new method
اول حاجه لو انت مكتبتش حاجه من الاتربيوت دي 
الديفولت فاليو بتاعها بيكون false 
في حاله defineProperty
-------------
1- getOwnPropertyDescriptor(sillt,go) دي ميثود 
بتجيبك الاتربيوتس هي false or true 
(sillt,go) اول حاجه 
sillt دي الاوبجيت ال هتدهولو 
go  دي kye ال هي property
getOwnPropertyDescriptor(sillt,go) يعني بتقبل منك الاوبجيكت والكي الجديد ال هضيفو 
علشان تطلعلك الاتربيوت ال موجود حالته اي true ولا false
-------------
2-Object.keys(sillt) دي بتجبلك ال عناصر ال هيقدر يلوب عليها 
وطبعا go 
مش هيقدر يلوب عليها علشان الاتربيوت بتاعها false
-------------
3- defineProperties()بيطلب منك يضيف اكتر من اوبجيكت 
بضيف الاوجيكت الاساسي الاول  
عكس defineProperty بيطلب منك تضيف اوبجيكت واحد بس 
بضيف الاوجيكت الاساسي الاول  
*/
let sillt = {
  alk: 100,
  alks: 200,
};
Object.defineProperty(sillt, "go", {
  value: "ban",
});
console.log(sillt);
console.log(Object.getOwnPropertyDescriptor(sillt, "go"));
console.log(Object.keys(sillt));
// --------------------------------
Object.defineProperties(sillt, {
  e: { value: 20, enumerable: false },
  a: { value: 30, enumerable: true },
  f: { value: 40, enumerable: false },
});
console.log(Object.getOwnPropertyDescriptor(sillt, "a"));

console.log(sillt);
console.log(Object.keys(sillt));
// ==========================================
// class encpsulations كابسوليشن
/*
علشان تعمل برايفت لي الاوبجيكت 
# بتحط  قبل البروبرتي 
# ولازم تعمل دكلير قبل ما تعمل 
انت متقدرش تاكسس عليها console.log(fok.#bd);
ال يقدر يشوف البرايفت هو الفاملي بتاعت الكيلاس 
كل ال جوه الكيلاس هو ال يقدر يشوفها 
------------------
1- الكلاس بيكون مرئي وتقدر توصلو عادي 
وهنا بيجي دور class encpsulations
علشان يخلي البايانات برايفت  
2- هتحمي البايانات من الدخول الغير مشروع 
3- هيساعدك توصل لي المطلوب من غير ما تظهر البيانات بتاعتك 
4- بيقلل الايررو 
5- بتعرف تدير الابلكيشن بتاعك بسهوله 
6- بيخلي الابلكيشن سهل في التعامل 
*/
class alll {
  #bds;
  constructor(ad, bd) {
    this.fot = ad;
    this.#bds = bd;
    // this.bdsff = this.#bds;
  }
  get mo() {
    return parseInt(this.#bds);
  }
}
let fok = new alll("alol", "200");
// console.log(fok.bds);
// console.log(fok.mo * 13);

// دي تجربه enheart

class vvvd extends alll {
  constructor(ad, bd, soll) {
    super(ad, bd);
    this.sdvb = soll;
  }
}
let lll = new vvvd("sd", "400", "sss");
console.log(lll.mo * 2000);
// console.log(lll.bdsff);

//تجربه برايفت ميثود
// في الميثود مش بتحتاج تعمل دكلير لي البرايفت زي البروبرتي
class def {
  constructor(s) {
    this.sd = s;
    this.vk = this.#dvsf();
  }
  #dvsf() {
    return "to";
  }
  vv() {
    return this.#dvsf();
  }
}
let sj = new def("dd");
console.log(sj.vv());
console.log(sj.vk);

// ===========================
// معلومات  مهمه
// arrow function ملهاش بروتو تايب
// تقدر تسخدم اوبجيكت كامل جوه constructor
// f = function () هي هي  f()
// =========================================
/*Date and time درس الوقت والتاريخ 
Date counstrctor new Date()

Date.now() بيجبلك الوقت بتاعك بي الميل سكند جزء من الثواني 
من اول 1 يناير 1970
Date.now() معلومه مهمه  1000 ميل سكند بتساوي 1 سكند
Date.now() هذا يسمي a book time 
Date.now() ده الطبيعي ال احدناه فوق
// الجديد اننا ممكن نحط في اي تاريخ انت عاوزو
// مثال
let datenow = new Date() ده BOOK DATE 
let myBarthday = new Date("August 15 ,97"); وده االتاريخ ال انا حاطو
let dateMyBarthday = datenow - myBarthday; وده طرح الاثنين من بعض علشان يطللعلي الوقت بي الميل سكند
console.log(dateMyBarthday / 1000 / 60 / 60 / 24 / 365); وهنا عملت العمليه الحسابيه علشان يطلعلي عمري بالسنين 

-------------
get date time 
1- gitTime() دي بترجع االوقت با الملي سكند من اول الوقت ال هتدهوله لحد دلوقتي 
2- gitDate() بتجبلك اليوم ال انت فيه من الشهر 
3- gitFullYear() دي بتجبلك السنه ال انت فيها 
4- gitMonth() دي بتجبلك الشهر ال انت فيه 
بس فيها ملحوظه بتجبلك الشهر عن طريق الانديكس 
يعني شهر يناير هيكون  بيبداء من صفر 
لو عاوز تحل المشكله هنستخدم الاريه 
زي كدا 
علشان تجلك الشهر ال انت فيه بتجيب اريه تكتب فيها كل الشهور 
وتحط جواها new Date().getMonth()
وممكن تحط new Date() في متغير  
let monthes = [
  "yan",
  "fub",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "okt",
  "nov",
  "dic",
];
console.log(monthes[new Date().getMonth()]);
--------
5- gitDay() بتجبلك اليوم ال انت فيه من الاسبوع وبدايه الاسبوع من الحد
بيجبلك الانديكس ممكن نعمل زي  month نعمل array
6- gitHour() بتجبلك الساعه ال انت فيها 
7- gitMinute() بتجيب الدقايق ال انت فيها 
8- gitSecond() بتجيب الثواني ال انت فيها 
------------------
set date time 
بينطبق علي كل الميثود بتاعت set date time 
لو زودت رقم اكتر من ارقام الشهر يعني مقلا 32 بيدخلك علي الشهر ال بعدو
القيمه الومجبه بتزود والسالبه بترجع 
-----------------------------------
1- setTime() بيطلب منك انك تحطلو عدد الميل سكند
لو كتبت صفر هيجبلك من اول 1970  شهر يناير
2- setDate() بيطلب منك تكتب اليوم بتحددلو يبدا من يوم اي 
لو زودت رقم اكتر من ارقام الشهر يعني مقلا 32 بيدخلك علي الشهر ال بعدو
القيمه الومجبه بتزود والسالبه بترجع 
3- setFullYear(year , month) بتديلو السنه ال انت عاوزها السنه بتكتبها اجباري والشهر براحتك
4- setMonth(month, day) بتكتب الشهر ال انت عاوز تجيبو وبتكتب اليوم لو انت عاوز
5- setHours(Hours , minutes) بتجيب الساعات احباري والمنت اختياري 
6- setMinutes(minutes, socnds) هنا بتحط الدقايق ولو عاوز تحط الثواني اختياري 
7- setSecondS(socnds, mil scond) هنا بتحط السكند ولو عاوز تجيب الميل سكند اختياري 
----------------------------------
formating date and time 
تقدر تكتب الفومات بكذا طريقه 
A- newDate(timestamp) تقدر تكتب بالملي سكند
B- newDate(Date string)
C- newDate(Numeric value)

Date.parse("string") بتديلو استرنج يرجعلك الملي سكند بتاعتك
مثال 

1-"oct 25 1992"
2-"10/25/1992"
3-"1992-10-25"  ده بصيغه ISO
4-"1992 10"
5-"1992"
6-"82"
7-1992, 9, 25, 2, 10, 0 الترتيب السنه الشهر اليوم الساعه الدثيقه الثانيه من الشمال
تقدر تستخدم السنه واليوم والشهر والدقيقه والثانيه والساعه
الشهر هنا بالاندكس
8-1992 , 9, 25  هنا بتكتب التاريخ من غير الوقت 
9-"1992-10-25T06:10:00Z" ده الوقت ال فيه التايم زون
حرف T 
ده ال بيفصل بين التاريخ  والوقت
حرف Z 
ده عباره عن التايم زون 
ولو حطيتو  بيغير الوقت علي حسب التايم زون بتاعك
---------------------------
traking opration time
بنعمل التراكنك بنحط البدايه 
والنهايه 
وبينهم بنعمل اوبريشن معين وبنحسب الاوبريشن ده 
خد وقت قد اي في عملو 

زي كدا 

let start = new Date();

// opration هنا حاجه بتتكتب
for (let i = 0; i < 1000; i++) {
  document.write(`<div>${i}</div>`);
}
// هنا النهايه
let ends = new Date();

let deuration = ends - start;

console.log(deuration);

هنبحث عن 
performance.now()
performance.mark()
*/

let dateNow = new Date();
console.log(dateNow);
console.log(Date.now());

const socnds = Date.now() / 1000; //علشان يرجع الوقت من جزء في الثانيه الي الثانيه
console.log(socnds);

let munits = socnds / 60; // بعد مارجعت الثواني بتقسها علي 60 علشان ترجع الدقايق
console.log(munits);

const hours = munits / 60; // بتاخد الدقايق ال رجعت ونقسمها علي 60 علشان نرجع الساعات
console.log(hours);

const dayss = hours / 24; // بناخد الساعات ال رجعت ونقسها علي 24 علشان نرجع الايام
console.log(dayss);

const years = dayss / 365; // هنا بناخد عدد الايام ونقسها علي 365 علشان نرجع عدد السنين
console.log(years);

// ===== تكمله Method date and time

let datenow = new Date(); // ده الطبيعي ال احدناه فوق
// الجديد اننا ممكن نحط في اي تاريخ انت عاوزو
// مثال

let myBarthday = new Date("August 15 ,97");
let dateMyBarthday = datenow - myBarthday;
console.log(dateMyBarthday / 1000 / 60 / 60 / 24 / 365);
console.log(datenow);
console.log(datenow.getTime());
console.log(datenow.getDate());
console.log(datenow.getFullYear());
console.log(datenow.getMonth());
// تجربه getMonth()
let monthes = [
  "yan",
  "fub",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "okt",
  "nov",
  "dic",
];
console.log(monthes[datenow.getMonth()]);
// ------
console.log(datenow.getDay());
console.log(datenow.getHours());
console.log(datenow.getMinutes());
console.log(datenow.getSeconds());
// ---------------------------------
// set date and time مثال
let datesNow = new Date();
console.log(datesNow);
console.log("#".repeat(20));

// datesNow.setTime(0);
// console.log(datesNow);
// console.log("#".repeat(20));

// datesNow.setDate(32);
// console.log(datesNow);
// console.log("#".repeat(20));

// datesNow.setFullYear(2020,12);
// console.log(datesNow);
// console.log("#".repeat(20));

// datesNow.setMonth(0, 12);
// console.log(datesNow);
// console.log("#".repeat(20));

// datesNow.setHours(1, 12);
// console.log(datesNow);
// console.log("#".repeat(20));

// datesNow.setMinutes(1, 12);
// console.log(datesNow);
// console.log("#".repeat(20));

// datesNow.setSeconds(1, 12);
// console.log(datesNow);
// console.log("#".repeat(20));

// datesNow.setMilliseconds(1000);
// console.log(datesNow);
// console.log("#".repeat(20));
// ==================================
// مثال علي formating date and time
console.log(Date.parse("Oct 15 1997"));

let date1 = new Date(0);
console.log(date1);
let date2 = new Date(876866400000);
console.log(date2);
let date3 = new Date("8 15 1997");
console.log(date3);
let date4 = new Date("1997-8-15");
console.log(date4);
let date5 = new Date("1997-8");
console.log(date5);
let date6 = new Date("1997");
console.log(date6);
let date7 = new Date(1992, 9, 25, 5, 10, 0);
console.log(date7);
let date8 = new Date(1992, 9, 25);
console.log(date8);
let date9 = new Date("1992-10-25T06:10:00Z");
console.log(date9);
// ============================
// traking opration time

let start = new Date();

// opration هنا حاجه بتتكتب
// for (let i = 0; i < 1000; i++) {
//   document.write(`<div>${i}</div>`);
// }
// هنا النهايه
let ends = new Date();

let deuration = ends - start;

console.log(deuration);

let sod = performance.now(); // دي بتستدعي حاجه بيجبلك وقت الاستدعاء قد اي
// بي المللي سكند
console.log(sod);

let sodsss = performance.mark("hello");
// console.log(sodsss);
// =========================================================
/* genrator function بمعني العربي المولادات 
دي فانكشن الكود بتاعها مش بيرن غير اما انت بتحتاجو
وهي عباره عن object وتقدر  loop علي الباينات ال جواه 

دي طريقه اللوب 
for (let gs of genrator()) {
  console.log(gs);
}

بتنادي علي الخاصيه بي yield and next()
لو عاوز تجيب الفاليو 
next().value 
لو عاوز تجيب done عاوز تعرف false or true 
next().Done

معلومه  
ال جوه genrator() ده object 
done : بيكون ال keye 
1 : بتكون value 
=========================
dlegate genrator المعني العربي مندوب او نائب 
هي genrator function
تنوب عن genrator function تانيه 
ملعومه =

علشان تجيب بيانات من genrator function 
تانيه 
بتعمل كدا 
function* allgenrator() {
  yield* onegenrator();
}

yiled* قدام الفانكشن ال هتسدعيها 
لو معملتش * قبل yelid 
هيطبعلك الفانكشن او الاريه زي ماهي 
yield علشان تجيب الفاليو ال جواها لازم نعمل * دي قبل 

معلومه مهمه 
console.log(genr.return());
لو عملت return() 
بتقفل عمل الانتاجيه مش هتجبلك البايانات ال بعديها 
هيجبلك undefined 
لي كل البايانات بما فيهم 
ال انت عاملها retern()
retern("اي حاجه ") وممكن تكتب جوه 
وبردو هيوقف عمل الانتاجيه 
هيجبلك كدا 
value: undefined, done: true}
=============================
genrator infinite numbers
use retern inside genrators
ازي ننتج عدد لا نهائي من الارقام 
زي كدا 

function* genratorNumber() {
  let indexs = 0;
  while (true) {
    yield indexs++;
  }
}

let genR = genratorNumber();

console.log(genR.next().value);
console.log(genR.next().value);
console.log(genR.next().value);
*/

function* genrator() {
  yield 1;
  console.log("hello alaa mohsen");
  yield 2;
  yield 3;
  yield 4;
}
let ge = genrator();
//  ملحوظه هنا انت لو عملت لوب قبل طبع عمليه
//  yield
// بالمتغير هيطبعلك الباينات عادي ge
// زي كدا
// for (let gs of ge) {
//   console.log(gs);
// }
// ----
// انما لو طبعت اللوب بعد عمليه yiled
// مش هيطلع بينات علشان هو انت عملت yield
// للباينات فا لو جيت طبعتها هتلاقيها فاضيه
// اللوب منجحش علشان الباينات طلعت في عمليه
// yeild
// ----
// الا في حاله لو انت كتبت اسم الفانكشن
// في اللوب ال هو بتكرر الفانكشن عادي  زي كدا
// for (let gs of genrator()) {
//   console.log(gs);
// }
for (let gs of ge) {
  console.log(gs);
}
console.log(typeof ge);
console.log(ge);
console.log(ge.next());
console.log(ge.next());
console.log(ge.next());
console.log(ge.next());
console.log(ge.next());

for (let gs of genrator()) {
  console.log(gs);
}
// ---------
function* onegenrator() {
  yield 1;
  yield 2;
  yield 3;
  yield 5;
}
function* towgenrator() {
  yield "a";
  yield "b";
  yield "c";
  yield "d";
}
function* allgenrator() {
  yield* onegenrator();
  yield* towgenrator();
  yield* [7, 8, 9];
}
let genr = allgenrator();
console.log(genr.next());
console.log(genr.next());
console.log(genr.next());
console.log(genr.next());
console.log(genr.next());
console.log(genr.next());
console.log(genr.return("hello"));
console.log(genr.next());
console.log(genr.next());
console.log(genr.next());
console.log(genr.next());
console.log(genr.next());
// ===========

function* genratorNumber() {
  let indexs = 0;
  while (true) {
    yield indexs++;
  }
}

let genR = genratorNumber();
console.log(genR.next().value);
console.log(genR.next().value);
console.log(genR.next().value);
// =======================================
/* modeules import and export
import and export
علشان تعمل import 
في ملف جديد 
لازم تعمل 
export الاول للباينات  ال هتنقلها في الملف الجديد

ملعومات 
1- export const backs = 10;  نقدر نعمل export
2- export { backs, backs1, backs2 }; ونقدر نعمل export كدا بردو 
3- نقدر نعمل elas لي import 
عن طريق as  
زي كدا  
{ backs, backs1, backs2 as newName } 


// export ده 
export const backs = 10;
const backs1 = [1, 2, 4, 5];
function backs2() {
  return `hello alaa `;
}
export { backs, backs1, backs2 };

// import ده 
import { backs, backs1, backs2 as s } from "./so.js";
console.log(backs);
console.log(backs1);
console.log(s());

========================
moduels
- export alis | ده عمل اسم مستعار لي export 
 export { backs as alol, backs1 as mona, backs2 };


---------
 - named export  
 هو اني export 
 الحاجه بي اسمها
 واكتبها في 
 import 
 علشان استدعيها 
--------
 - default export  
 عندك ليه  moduel  كل.
 one default export 
 حاجه واحده بس تعملها export as defult 
 وتقدر تسدعيها من اي مكان بدون اسمها
 * ثاني حاجه 
 اما تيجي تسدعي default export
 في import 
 بتسدعيه لوحدو بره  بعد كلمه 
 import
 مثال 
 import sayeHello, { alol, mona, backs2 as s } from "./so.js";
 import sayeHello ,
 وتقدر تسميه بي اسم  
 زي كدا 
 import alol,
 وعادي تستخدم anonmeys function
 وتسمي براحتك 
--------
 - import all 
import * as all from "./so.js"; دي لو عاوز تعمل 
import لي كل ال عندك 

وبتخش عليهم كدا 
console.log(all);
console.log(all.alol);
console.log(all.mona);
console.log(all.default());
*/
// ===============================================
/* Json  
waht json  ما هو الجيسون 
1- هو اختصار لي جافا اسكربت اوبجيكت نوتيشن 
2- بيعمل مشاركه للبايانات بين  clint , server
3- json من مشتقات لغه الجافا اسكربت 
4- XML هي بديل لي 
5- امتداد الملف بتاعنا بيكون JSON

why Json ليه بنستخدم JSON
- لسهوله قراءتها وسهولتها 
- معظم اللغات والفريم ورك بي تسبورت JSON
- تقدر تحول JSON object to object  and والعكس

JSON VS XML
==============================================
- text beasd format       -  markup languge
- ligt weight             -  heavier
- does not tag            -  using tag
- code shortaer           -  not shortaer
- can use array           -  dont use array
- not support commints    -  support commints 
==============================================
json syntax and compaer with js object
json syntax
-----------
- بنحط الداتا جوه كرلي بريسسيز {}
- بنضيف الداتا as  kyes : value
- kyes لازم يكون استرنج وبين دبل كوت  ""
- البايانات بتاعتك بتفصلها بي coma  ,
- 
-
-----------
availble data types انوع البايانات المتاح استخدمها
- string
- number
- object
- array
- boolean values
- null
مفيش اي فانكشن ولا اي  حسابات 
-------------------------------------------------------
what is API هي اختصار لي ابلكيشن برجرامنج انتر فيس
تقدر تقول عليها الوجه البرمجيه
api هو الوسيط لمشاركه الباينات 
request and respons 
--------------------------------------------------------
هنتعلم ازي نحول json object  to java script object
عن طريق 
Json.parse || java script object الي  json object دي بتحول من 
Json.stringify ||json object الي  java script object  ودي بتحول من 
---------------------------------------------------------
Asynchronous  VS synchronous  الفرق بين 
علشان نعرف  Ajax ,Fetch ,promises
---
synchronous معناها متزامن 
- كل عمليه بتم  لازم العمليه  
- ال قبلها تخلص تماما علشان العمليه الجديده تتم
ده مثال لي 
هنا بيمشي واحده واحده واما لقي alert 
وقف طباعه الباقي لحد ماتدوس علي alert 
console.log(1);
console.log(2);
window.alert("hello");
console.log(3);
console.log(4);
---
Asynchronous  معناها غير متزامن 
- كل العمليات بتتم عادي في نفس الوقت
- مش محتاح تستني العمليه ال قبله تخلص علشان العمليه الجديده تتم
ده مثال 
console.log(1);
console.log(2);
setTimeout(() => {
  console.log("ALOLBS");
}, 2000);
console.log(3);
console.log(4);
---
هنبحث عن 
- JAVAScript is a single-threaded
- multi threaded languages
===========================================
CALL stack and web api 
-  علشان تدير الثياق الخاص بتشغيل الفانكشن call stack  الجافا اسكربت انجين بتسخدم 



--------====================
- CALL stack ماشي بي مبداء اخر وحد بيدخل  هو اول واحد  بيخرج
-ملحوظه تراجع عليها 
CALL stack   ماشي بي مبداء اخر وحد بيدخل  هو اخر واحد  بيخرج
---------===================



- call stack الحاجات الخاصه بي web api 
اول مايعملها 
detect  
بيخلي المتصفح يهندلها 
يعني بمعني اصح لو في حاجه تابعه لي  web api 
المتصفح هو ال بهندل ترتيبها 


الكود بتاعنا synchronous
function ones() {
  console.log(`one`);
}
بعد ما فانكشن 2 نادت فانكشن واحده 
هتطبع console ال جواها 
===================================
function tow() {
  ones();
  console.log(`tow`);
}
بعد ما فانكشن ثلاثه نادت فانكشن 2  هتشغل فانكشن 1 
وتطبع console 
===================================
function threes() {
  tow();
  console.log(`three`);
}
 دي اخر فانكشن داخله وهي اول واحده هتخش هتنادي الفانكشن tow()
 وتنادي علي console  
===================================
event loop and call back queue
- java script is a single threaded language  يعني جميع الاوبريشن بتاعتنا بتم في tread واحد 
- call stack  ان احنا بنمشي last in last out
- تهندلها  web api  بتتبعت لي  Asynchronous function  اما بنعمل 
- Asynchronous function زي settimeout
- browser api كانو بيعمل tred تانيه 
- browser api بعد مابيبعتلنا الفانكشن علشان يعملها بيروسيس
بيبعتها علي call back queue
او الطابور الخاص بي callback
- event loop  بتستني اما  call stack  تبقي فاضيه 
- event loop بتجيب call back من  call back queue
call stack  وبعد كدا بتضيفو في 
- call back queue بيتبع نظام first in first out 
=====================================
what is ajax and network information 
- ajax هي اختصار لي Asynchronous java script and xml
- ajax مش لغه برمجه هو عباره عن استخدام اكتر من تقنيه مع بعض like  [html , css , js ,dom]
- ajax بيستخدم "XMLHttpRequest" object عشان يتواصل مع السرفر  
- ajax  تبعت بيانات تستقبل بايانات من السيرفر من غير ما تعمل refresh 
ajax بتعمل منور ريكوست علشان يرجعلك منو response
test new  XMLHttpRequest() => response بيرجعلك منو 
--------------------------------------
request and response from real api 
- open() [get , post] تقدر تحدد  الريكوست ميثود هل هو  
api ال هتجيب منو  json  او ملف  url وتحدد 
علي الابي اي  محتاج يوزر نيم وباسورد بتكتبو هنا  authentcation  ولو في  
Asynchronous or  synchronous وتحدد الكول بتاعتك دي 
- send() دي بتبعت الريكوست بتاعك 
          -------------------------------------
ready state => state of the request 
[0] الركوست لسه في حاله التهيئه 
[1] في اتصال حصل مع السرفر 
[2] معناه انو استلم الريكوست 
[3] الريكوست بيتعملو معالجه 
[4] الريكوست خلص والريسبونس او الاستجابه جاهزه
status 
[200] response is successful 
[404] not found 
ملعومه مهمه 
المفروض اني اتاكد من حاجتين 
1- ان الريكوست بتاعي خلص 
2- انو نجح وجاب بيانات [200]
كل ده بنتاكد منو عند ايفينت معلينه بتحصل 
             ====================================================
loop on data

serch 
- cross origin api [cors]
- Api authentcation 

             =================================
call back hell pyramid of doom
- what is call back :
هي الفانكشن ال بتمررها لي فانكشن تانيه علشان تشتغل بعدين
معلومه 
لو مشيت بنفس السناريو ده هتعمل حاجه اسمها 
call back hell
- call back hell example  الامثله تحت 

            ====================================
promise intro and syntax
- promise في الحافا اسكربت عامل زي الوعد في الحياه العاديه 
- promise حاجه هتحصل في المستقبل 
- promise بنستخدمو علشان تجنب call back hell or pyramid of doom
- promise والنتايج ال راجعه منها  Asynchronous هو الاوبجيكت ال بيمثل حاله 

promise stauts حالات 
- ودي الحاله ال بيبداء بيها pending حاله 
- ودي معانها الوعد اتحقق او العمليه تمت بنجاح  fulfiled حاله 
- الوعد متحققش والعمليه فشلت  reject حاله 
story 
- pending بيكون في حاله  promise اول ما بتنشاء 
- resolved or rejected بعد كدا بينتهي لاما في حاله 
- then ال بنمررها لي  call back function بعد كدا بنادي 
then
- call back  بتاخد 2 ارجو منت لي 
واحده لي success
واحده لي failure
               =============================
promise - then ,catch ,finaly
- then بنهندل بيهم 
resolved and rejected 
defult erro بيطلعلك  rejected لو انت مكتبتش 
// دي علشان تمرمرها لي الفانكشن ال بعديها علشان تعمل   then بتعمل
  // اكشن تانيه مثلا هنا انا عملت ايلمنت فاضي اول اكشن
  // الاكشن هو then
  // تاني اكشن ضيفت text ولونتو
  // تالت اكشن عملت  div فاضي
  //  ده بيمثل انك بتعمل فانكشن ليها call back
  // بتاخدها تحطها في فانكشن تانيه علشان تعمل اكشن تاني
  // promise بيوفر عليك الحكايه دي عن طريق then and catch and finaly

- catch     reject عند  erro هي بتهندل  
example 
  .catch((sod) => {

new Promise((onresolve, onrejected)  onrejected  زي كدا ال  promise ال في  call back  هنا معبره عن  sod 
    console.log(sod);

  });

- finaly 
دي في حاله الوعد اتحقق مش اتحقق هيتنفذ 
تقدر تطبع رساله 
او تعمل اكشن 
زي كدا 

 .finally(() => {
    console.log(`hello`); وده طبعت رساله 
    document.write("sow"); ده اكشن 
  });

              =======================================
promise and XHR ده مثال تحت 
عملنا فانكشن جواها
بروميس 
جوه البروميس 
عملنا جواه ريكوست 
              ==================================
fetch API 






*/
// هنا جبت البايانات من السيرفر وحولتها js
const textob = `{"name":"MOHAMED","age":40}`;
console.log(textob);

const newjsD = JSON.parse(textob);
console.log(newjsD);

// هنا عملت تعديل للباينات وبعت الباينات للسيرفر
newjsD.name = "alol";
newjsD.age = 35;

const vass = JSON.stringify(newjsD);
console.log(vass);
// =======================================
// synchronous
// console.log(1);
// console.log(2);
// // window.alert("hello");
// console.log(3);
// console.log(4);
// ===========
// Asynchronous
// console.log(1);
// console.log(2);
// setTimeout(() => {
//   console.log("ALOLBS");
// }, 2000);
// console.log(3);
// console.log(4);
// ---------------------
// setTimeout(() => {
//   console.log(`web api`);
// }, 0);

function ones() {
  console.log(`one`);
}
function tow() {
  ones();
  console.log(`tow`);
}
function threes() {
  tow();
  console.log(`three`);
}

threes();

/*
===================================
function ones() {
  console.log(`one`);
}
بعد ما فانكشن 2 نادت فانكشن واحده 
هتطبع console ال جواها 
===================================
function tow() {
  ones();
  console.log(`tow`);
}
بعد ما فانكشن ثلاثه نادت فانكشن 2  هتشغل فانكشن 1 
وتطبع console 
===================================
function threes() {
  tow();
  console.log(`three`);
}
 دي اخر فانكشن داخله وهي اول واحده هتخش هتنادي الفانكشن tow()
 وتنادي علي console  
===================================
*/
// exapmle for event loop and call back queue
console.log("1");
setTimeout(() => {
  console.log(`3`);
}, 0);
setTimeout(() => {
  console.log(`4`);
}, 0);
console.log("2");

setTimeout(() => {
  console.log(myVAR);
}, 0);
let myVAR = 100;
myVAR += 100;
// =============================== example for XMLHttpRequest

// let osama = new XMLHttpRequest();
// osama.open("get", "js/sssss.json", true);
// osama.send();
// osama.onreadystatechange = function () {
//   if (this.status == 200 && this.readyState == 4) {
//     console.log(this.responseText);
//   }
// };

// ============================= example loop on data

let osama = new XMLHttpRequest();
osama.open("get", "js/sssss.json", true);
osama.send();
osama.onreadystatechange = function () {
  if (this.status == 200 && this.readyState == 4) {
    // console.log(this.responseText);
    let jsDatas = JSON.parse(this.responseText);
    console.log(jsDatas);
    for (let k = 0; k < jsDatas.length; k++) {
      let div = document.createElement("p");
      div.classList.add("alaa");
      let responsName = document.createTextNode(jsDatas[k].mohsen);
      div.appendChild(responsName);
      document.body.appendChild(div);
    }

    // ===================================== example call back hell pyramid of doom

    function makStyle(a) {
      a.target.style.color = "red";
      a.target.style.backgroundColor = "green";
    }
    let moo = document.querySelector(".alolss");
    moo.addEventListener("click", makStyle);
  }
};

function acall() {
  console.log("alol");
  function alols() {
    let aow = document.createElement("p");
    aow.id = "alaadd";
    document.body.appendChild(aow);
  }
  setTimeout(alols, 1000);
}
setTimeout(acall, 1000);

// كل دي امثله علي call back hell
setTimeout(() => {
  console.log(`1`);
  setTimeout(() => {
    console.log(`2`);
    setTimeout(() => {
      console.log(`3`);
      setTimeout(() => {
        console.log(`4`);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
// ====================================== example promise intro and syntax
// const mypromise = new Promise((resolved, rejected) => {
//   const fi = false;
//   if (fi) {
//     resolved("hello alaa");
//   } else {
//     rejected(Error("im sorry"));
//   }
// }).then(
//   function (resolvedvalue) {
//     console.log(`good ${resolvedvalue}`);
//   },
//   function (rejectvalue) {
//     console.log(`bad ${rejectvalue}`);
//   }
// );
// console.log(mypromise);

const mypromise = new Promise((resolved, rejected) => {
  const fi = true;
  if (fi) {
    resolved("hello alaa");
  } else {
    rejected(Error("im sorry"));
  }
});
// ممكن نحطهم في متغيرات  زي كدا
let so = function (resolvedvalue) {
  console.log(`good ${resolvedvalue}`);
};
let go = function (rejectvalue) {
  console.log(`bad ${rejectvalue}`);
};
mypromise.then(so, go);
// ========================

mypromise.then(
  function (resolvedvalue) {
    console.log(`no ${resolvedvalue}`);
  },
  function (rejectvalue) {
    console.log(`sccs ${rejectvalue}`);
  }
);
mypromise.then(
  function (resolvedvalue) {
    console.log(`good ${resolvedvalue}`);
  },
  function (rejectvalue) {
    console.log(`bad ${rejectvalue}`);
  }
);
console.log(mypromise);
// ======================================= example promise - then ,catch ,finaly
// console.log(ddss);

const thePromise = new Promise((onresolve, onrejected) => {
  let so = document.getElementById("bow"); // عاوز اجرب تجيب التارجت او الفاليو
  if (so.innerHTML === "dfdfd") {
    onresolve((so.style.color = "red"));
    onresolve((so.style.backgroundColor = "yellow"));
  } else {
    onrejected(Error`this not`);
  }
})
  // دي علشان تمرمرها لي الفانكشن ال بعديها علشان تعمل   then بتعمل
  // اكشن تانيه مثلا هنا انا عملت ايلمنت فاضي اول اكشن
  // الاكشن هو then
  // تاني اكشن ضيفت text ولونتو
  // تالت اكشن عملت  div فاضي
  //  ده بيمثل انك بتعمل فانكشن ليها call back
  // بتاخدها تحطها في فانكشن تانيه علشان تعمل اكشن تاني
  // defult erro بيطلعلك  rejected لو انت مكتبتش
  // promise بيوفر عليك الحكايه دي عن طريق then and cach and finly

  .then(function (resolved) {
    resolved = document.createTextNode(" alol123");
    return resolved;
  })
  .then((resolved) => {
    document.getElementById("bow").appendChild(resolved);
    return resolved;
  })
  .then((resolved) => {
    resolved = document.createElement("div");
    document.getElementById("bow").appendChild(resolved);
  })

  .catch((sod) => {
    console.log(sod);
  })
  .finally(() => {
    console.log(`hello`);
    document.write("sow");
  });
// ========================================== example promise and XHR

const rook = (sk, apis) => {
  return new Promise(function (resolveds, rjected) {
    let so = new XMLHttpRequest();

    so.open(sk, apis);
    so.send();

    so.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolveds(JSON.parse(this.responseText));
      } else {
        rjected(Error("this erro "));
      }
    };
  });
};
rook("GET", "https://api.github.com/users/AlaaMohsen12/repos")
  .then((resolved) => {
    resolved.length = 2;
    return resolved;
  })
  .then((resolveds) => {
    resolveds = document.getElementById("llll").innerHTML = "alaa mohsen";
  })
  .catch((sol) => {
    console.log(sol);
  });

// =========================================== example fetch API















