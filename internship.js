let url="Data/data.json"
fetch_data(url);
async function fetch_data(url){
 try {
  let Data= await fetch(url);
  let actualdata= await Data.json();
  append_data(actualdata.intern_ship);
  filterby(actualdata.intern_ship);
  filterby_type(actualdata.intern_ship);
  filterby_pref(actualdata.intern_ship);
  search_data_incl(actualdata.intern_ship);
 } catch (error) {
  console.log('error')
 }
} 
function append_data(data) {
  document.getElementById("allinterships").innerHTML=null;
  data.forEach(el => {
    let div1=document.createElement("div");
    let image=document.createElement("img");
      image.setAttribute("src",el.img);
      div1.append(image);
    let div2=document.createElement("div");
    let job_name=document.createElement("h3");
    job_name.innerText=el.heading;
    let comp_name=document.createElement("p");
       comp_name.innerText=el.company_name;
    let Type=document.createElement("p");
    Type.innerText=el.type;
    let cat_name=document.createElement("p");
    cat_name.innerText=el.category;
    let city_name=document.createElement("p");
    city_name.innerText=el.city;
    let Stipend=document.createElement("p");
    Stipend.innerText=el.stipend;
    div2.append(job_name,comp_name,cat_name,Type,city_name,Stipend);
    let div3=document.createElement("div");
    let time=document.createElement("h4");
    time.innerText="3 Weeks Left";
    let share_img=document.createElement("img");
       share_img.setAttribute("src","https://img.icons8.com/external-others-inmotus-design/512/external-Share-Link-system-ui-set-others-inmotus-design.png")
    let view=document.createElement("a");
    view.innerText="VIEW AND APPLY";
    view.href="./apply_for_internship_page.html";
    view.setAttribute("class","view_internship")
    view.addEventListener("click",()=>{
      let arr=[];
      arr.push(el);
      localStorage.setItem("view_intern",JSON.stringify(arr));
    })
    div3.append(time,share_img,view);
    let div4=document.createElement("div");
    div4.setAttribute("class","in_div")
    div4.append(div2,div3);
    let div5=document.createElement("div");
    div5.setAttribute("class","first_in")
    div5.append(div1,div4);
    document.getElementById("allinterships").append(div5);
})
}



function filterby(data){
  document.getElementById("n_city").addEventListener("change",(e)=>{
    let a=e.target.value;
    let new_data=data.filter((el,index)=>{
      if(a==el.city){
        return el;
      }else if(a==""){
        return el;
      }
    })
    append_data(new_data);
    })
     
}
function filterby_type(data){
  document.getElementById("t_ype").addEventListener("change",(e)=>{
    let a=e.target.value;
    let new_data=data.filter((el,index)=>{
      if(a==el.type){
        return el;
      }else if(a==""){
        return el;
      }
    })
    append_data(new_data);
    })
     
}
function filterby_pref(data){
  document.getElementById("pre").addEventListener("change",(e)=>{
    let a=e.target.value;
    let new_data=data.filter((el,index)=>{
      if(a==el.category){
        return el;
      }else if(a==""){
        return el;
      }
    })
    append_data(new_data);
    })
     
}
// search function 
function search_data_incl(data){
  document.getElementById("s_earch").addEventListener("click",()=>{
    let b=document.getElementById("search_input");
    let c=b.value;
    let newArr=data.filter((el,index)=>{
      return (el.heading.toLowerCase().includes(c.toLowerCase())||el.type.toLowerCase().includes(c.toLowerCase())||el.city.toLowerCase().includes(c.toLowerCase()));
    })
    append_data(newArr);
  })
}

