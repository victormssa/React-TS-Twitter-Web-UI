//Criando de fato
const section1 = document.createElement("section");
section1.setAttribute("class", "flex bg-white");
section1.setAttribute("id", "1");

const section2 = document.createElement("section");
section2.setAttribute("class", "");
section2.setAttribute("id", "2");

const div1 = document.createElement("div");
div1.setAttribute("class", "flex flex-row mt-3 ml-3");
div1.setAttribute("id", "3");

const imgProfilePic = document.createElement("img");
imgProfilePic.setAttribute(
  "class",
  "w-12 h-12 rounded-full"
);
imgProfilePic.setAttribute("id", "4");

const div2 = document.createElement("div");
div2.setAttribute("class", "flex flex-col ml-3");
div2.setAttribute("id", "5");

const div3 = document.createElement("div");
div3.setAttribute("class", "flex flex-row");
div3.setAttribute("id", "6");

const heading1 = document.createElement("h2");
heading1.setAttribute("class", "flex bg-white");
heading1.setAttribute("id", "7");
heading1.innerHTML = "Devon Lane";

const p1 = document.createElement("p");
p1.setAttribute("class", "flex bg-white");
p1.setAttribute("id", "8");
p1.innerHTML = "@johndue";

const p2 = document.createElement("p");
p2.setAttribute("class", "flex bg-white");
p2.setAttribute("id", "9");
p2.innerHTML = ". 23s";

const descriptionPost = document.createElement("p");
descriptionPost.setAttribute(
  "class",
  "text-black font-medium text-sm"
);
descriptionPost.setAttribute("id", "10");
descriptionPost.innerHTML = textArea;

const imagePost = document.createElement("img");
imagePost.setAttribute(
  "class",
  "w-[500px] h-[280px] rounded-2xl ml-[72px] border border-blue"
);
imagePost.setAttribute("id", "11");

const underPost = document.createElement("PostUnder");
underPost.setAttribute("id", "12");

const id1: any = document.getElementById("id1") as HTMLElement;
const id2: any = document.getElementById("id2") as HTMLElement;
const id3: any = document.getElementById("id3") as HTMLElement;
const id4: any = document.getElementById("id4") as HTMLElement;
const id5: any = document.getElementById("id5") as HTMLElement;
const id6: any = document.getElementById("id6") as HTMLElement;
const id7: any = document.getElementById("id7") as HTMLElement;
const id8: any = document.getElementById("id8") as HTMLElement;
const id9: any = document.getElementById("id9") as HTMLElement;
const id10: any = document.getElementById("id10") as HTMLElement;
const id11: any = document.getElementById("id11") as HTMLElement;
const id12: any = document.getElementById("id12") as HTMLElement;

//Inserindo
feedLocation.append(section1);
id1.append(section2);
id3.append(section2);
id4.append(div1);
id6.append(div2);
id7.append(div3);
id8.append(div3);
id9.append(div3);
id10.append(div2);
imagePost.append(section2);
underPost.append(section2);

console.log(id1);
console.log(id2);
console.log(id3);
console.log(id4);
console.log(id5);
console.log(id6);
console.log(id7);
console.log(id8);
console.log(id9);
console.log(id10);