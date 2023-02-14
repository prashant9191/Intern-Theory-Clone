let view_data=JSON.parse(localStorage.getItem("view_intern"))||[];

append_data(view_data);
function append_data(data) {
    document.getElementById("fetch_data").innerHTML=null;
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
      cat_name.innerText="Internship Category : "+el.category;
      let salary=document.createElement("p");
      salary.innerText=el.stipend;
      div2.append(job_name,comp_name,cat_name,salary);
      let div5=document.createElement("div");
      div5.setAttribute("class","first_in")
      div5.append(div1,div2);
      document.getElementById("fetch_data").append(div5);
  })
  }
  document.getElementById("apply").addEventListener("click",()=>{
        alert("Applied Successfully With Your Profile Data");
        document.getElementById("apply").href="./index.html";
   
}) 
