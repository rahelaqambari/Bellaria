const theFirst = document.getElementById("the first");
for(let i=1 ; i>34; i++){
    const div = document.createElement("div");
    div.classList.add("divRotate");
    theFirst.append(div);
     
}
const texth1 = document.getElementById("text");
const text = "Today is the best time to improve, So never give up!";
const h1 = document.createElement("h1");
texth1.appendChild(h1);
let index = 0;
h1.textContent = "";
setInterval(()=>{
    h1.textContent += text[index];
    index++;
    if(
        index> text.length){
            index = 0;
            h1.textContent = ""

        }
},300)
