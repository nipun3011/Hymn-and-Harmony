var s = 0;
const loginBuyer = document.getElementById("loginBuyer");
const signupBuyer = document.getElementById("signupBuyer");
// if(s==1){
//   loginBuyer.style.display="none";
//   signupBuyer.style.display="flex";
// }
// else{
//   signupBuyer.style.display="none";
//   loginBuyer.style.display="flex";
// }
signupBuyer.style.display="none";
var switchsb = document.getElementById("switchsb");
switchsb.addEventListener("click", function() {
  let id = null;
  let elem1 = loginBuyer;
  let elem2 = signupBuyer;
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 50);
  // elem1.style.display = "flex";
  // function frame() {
  //   if (pos == 350) {
  //     clearInterval(id);
  //   } else {
  //     pos++;
  //     elem1.style.top = pos + 'px';
  //     elem1.style.left = pos + 'px';
  //     elem2.style.height = (elem2.style.height - 1) + 'px';
  //   }
  // }
  loginBuyer.style.display="flex";
  signupBuyer.style.display="none";
});

var switchlb = document.getElementById("switchlb");
switchlb.addEventListener("click", function() {
  let id = null;
  let elem2 = loginBuyer;
  let elem1 = signupBuyer;
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 50);
  // elem1.style.display = "flex";
  // function frame() {
  //   if (pos == 350) {
  //     clearInterval(id);
  //   } else {
  //     pos++;
  //     elem1.style.top = pos + 'px';
  //     elem1.style.left = pos + 'px';
  //     elem2.style.height = (elem2.style.height - 1) + 'px';
  //   }
  // }
  signupBuyer.style.display="flex";
  loginBuyer.style.display="none";
});
// function switchForm() {
//     let id = null;
//     const elem = document.getElementById("loginBuyer");
//     let pos = 0;
//     clearInterval(id);
//     id = setInterval(frame, 5);
//     function frame() {
//       if (pos == 350) {
//         clearInterval(id);
//       } else {
//         pos++;
//         elem.style.top = pos + 'px';
//         elem.style.left = pos + 'px';
//       }
//     }
//     s = 1;
//   }

