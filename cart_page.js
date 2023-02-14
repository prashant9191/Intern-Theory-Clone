

let cart_data=JSON.parse(localStorage.getItem("cart"))||[];
if(cart_data.length==0){
  document.getElementById("h4_empty_cart").innerText="Your Cart Is Empty";
  document.getElementById("h4_empty_cart_url").innerText="CLICK HERE TO VISIT COURSES PAGE TO BUY";
  document.getElementById("h4_empty_cart_url").addEventListener("click",()=>{
    location.href = './courses.html';
  })
}

append_data(cart_data)

function append_data(data) {
    document.getElementById("appendcart").innerHTML=null;
    append_details(data);
    data.forEach((el,index)=> {
        let container=document.createElement("div");
        let cont_1=document.createElement("div");
        let cont_2=document.createElement("div");
        let c_name=document.createElement("h2");
        c_name.innerText=el.name;
        let Price_b=document.createElement("p");
         Price_b.innerText="₹"+el.price_b;
         Price_b.setAttribute("class","price_before")
         let Price_a=document.createElement("p");
         Price_a.innerText="₹"+el.price_a;
        let remove=document.createElement("button");
        remove.innerText="X"
        remove.addEventListener("click",()=>{
         data.splice(index,1);
           localStorage.setItem("cart",JSON.stringify(data));
           append_data(data);
           if(data.length==0){
            document.location.reload();
        }
        })
        let image=document.createElement("img");
        image.setAttribute("src",el.img);
        cont_1.append(remove,c_name)
        cont_2.append(Price_b,Price_a)
        container.append(cont_1,cont_2)
        container.setAttribute("class","sub_container")
        document.getElementById("appendcart").append(container);
    });
    
  }
  function append_details(data){
    let a=0;
    let to=0;
    data.forEach((el,index)=>{
        let amount=document.getElementById("amt");
        a=a+(+el.price_a);
        amount.innerText="₹"+a;
        let Cgst=document.getElementById("cgst");
        Cgst.innerText="₹"+Math.floor(a*0.09);
        let Sgst=document.getElementById("sgst");
        Sgst.innerText="₹"+Math.floor(a*0.09);
        let tot=document.getElementById("total_price");
        tot.innerText= "₹"+ Math.floor(a+(a*0.09)*2);
        let EMI=document.getElementById("emis");
        EMI.innerText="EMI Starting From "+"₹"+Math.floor(a*0.09);
        to=Math.floor(a+(a*0.09)*2);
    });
    document.getElementById("form").addEventListener("submit",(e)=>{
      e.preventDefault();
        let c=form.coupon.value;
        if(c=="FIRSTCOURSE"){
            let tot=document.getElementById("total_price");
            tot.innerText= "₹"+ Math.floor((a+(a*0.09)*2)-500);
        }
    })
  }


function openPopup(){
  // alert("HI")
  popup.classList.add("signupPopupdivOpen");
}


function closeSignup(){
  popup.classList.remove("signupPopupdivOpen");
}


// payment gatway code
show_detail(cart_data)
function show_detail(data){
  let i=1;
   document.getElementById("cour_detail").innerHTML=null;
  data.forEach((el)=>{
    let name_1=document.createElement("h4");
     name_1.innerText=i+":-"+el.name;
     i++;
     document.getElementById("cour_detail").append(name_1)
  })

}
document.getElementById("sub_mit_pay").addEventListener("click",()=>{
  alert("PAYMENT SUCCESSFUL !!!")
  location.href = './index.html';
})