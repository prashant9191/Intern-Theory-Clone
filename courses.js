
let url="Data/data.json"
fetch_data(url);
async function fetch_data(url){
 try {
  let Data= await fetch(url);
  let actualdata= await Data.json();
  append_data(actualdata.courses);
  // filter_data(actualdata.data)
 } catch (error) {
  console.log('error')
 }
} 
function append_data(data) {
  
  document.getElementById("courses_append").innerHTML=null;
  data.forEach(el => {
    let main_div=document.createElement("div");
    let div1=document.createElement("div");
    let image=document.createElement("img");
      image.setAttribute("src",el.img);
      div1.append(image);
    let div2=document.createElement("div");
    let c_name=document.createElement("h3");
    c_name.innerText=el.name;
    let d_name=document.createElement("p");
    d_name.innerText=el.discription;
    div2.append(c_name,d_name);
    let div3=document.createElement("div");
    let price_bef=document.createElement("span");
    price_bef.innerText="₹"+el.price_b;
    price_bef.setAttribute("class","price_dis")
    let price_after=document.createElement("p");
    price_after.innerText="₹"+el.price_a;
    let Emi=document.createElement("p");
    Emi.innerText=el.emi;
    div3.append(price_bef,price_after);
    let div4=document.createElement("div");
    let know=document.createElement("a");
     know.innerText="KNOW MORE";
     know.addEventListener("click",()=>{
      let product_data=JSON.parse(localStorage.getItem("product_to_display"))||[];
      product_data=el;
      localStorage.setItem("product_to_display",JSON.stringify(product_data));
    })
     let add_to=document.createElement("button");
     add_to.innerText="ADD TO CART";
     div4.append(know,add_to);
    add_to.addEventListener("click",()=>{
      let cart_data=JSON.parse(localStorage.getItem("cart"))||[];
      let flag=false;
      
      for(let i=0;i<cart_data.length;i++){
        if(cart_data[i].id===el.id){
          flag=true;
          break;
        }
      }
        if(flag===true){
          alert("Product Already in Cart");
        }else{
          cart_data.push(el);
     localStorage.setItem("cart",JSON.stringify(cart_data));
     alert("Product Added To Cart");
        }
    })
    let div5=document.createElement("div");
    div5.append(Emi);
    main_div.setAttribute("class","product_cards");
      main_div.append(div1,div2,div3,div5,div4);
      document.getElementById("courses_append").append(main_div);
  });
}  