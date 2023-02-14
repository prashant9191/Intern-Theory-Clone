let url="Data/data.json"
fetch_data(url);
async function fetch_data(url){
 try {
  let Data= await fetch(url);
  let actualdata= await Data.json();
  append_data(actualdata.company_logo);
  append_work_ex(actualdata.work_exp);
  upskilling(actualdata.up_skill);
  testimonials(actualdata.testi_monials);
  // filter_data(actualdata.data)
 } catch (error) {
  console.log('error')
 }
} 

function append_data(data) {
  data.forEach(el => {
      let image=document.createElement("img");
      image.setAttribute("src",el.comp_logo);
      document.getElementById("container_logo").append(image);
  });
} 
function append_work_ex(data) {
  data.forEach(el => {
      let image=document.createElement("img");
      image.addEventListener("click",()=>{
        location.href = './internship.html';
      })
      image.setAttribute("src",el.work_img);
      document.getElementById("workex_pics").append(image);
  });
} 
function upskilling(data) {
  data.forEach(el => {
      let image=document.createElement("img");
      image.addEventListener("click",()=>{
        location.href = './courses.html';
      })
      image.setAttribute("src",el.Img);
      document.getElementById("up_skilling").append(image);
  });
} 
function testimonials(data) {
  data.forEach(el => {
    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");
    div3.setAttribute("class","item")
    let name=document.createElement("h2");
    let comp=document.createElement("h5");
    let para=document.createElement("p");
      
      let image=document.createElement("img");
      image.setAttribute("src",el.Image);
      name.innerText=el.name;
      comp.innerText=el.intern_at;
      para.innerText=el.testimonial;
      div1.append(image,name,comp);
      div2.append(para);
      div3.append(div1,div2)
      document.getElementById("testimonial_parts").append(div3);
  });
} 

