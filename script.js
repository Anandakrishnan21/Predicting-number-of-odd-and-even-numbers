const btn = document.querySelector("#btn");
const btn1 = document.querySelector("#btn1");
const inputval = document.querySelector("#inputval");
const even = document.querySelector("#even");
const odd = document.querySelector("#odd");
let list = [];
count = 0
count1 = 0
btn1.addEventListener("click", () => {
   count = 0;
   count1 = 0;
   inputval.value = "";
   odd.textContent = "";
   even.textContent = "";
})
btn.addEventListener("click", () => {
   for (let i = 1; i <= inputval.value; i++) {
      list.push(i);
   }
   for (i = 1; i <= inputval.value; i++) {
      if (list[i] % 2 == 0) {
         count = count + 1;
      } else {
         count1 = count1 + 1;
      }
   }
   even.textContent = count;
   odd.textContent = count1
})