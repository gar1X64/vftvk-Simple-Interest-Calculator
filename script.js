
document.addEventListener("DOMContentLoaded", function(event) {
    let rate = document.getElementById("rate");
    let output =  document.getElementById("demo");
    output.innerHTML = rate.value/10;

    rate.oninput = function(){
        output.innerHTML = this.value/10;
    }


  });
  function getFocus() {
    document.getElementById("principal").focus();
    result.innerHTML = ``;
  }
  function compute()
  {
      let p = document.getElementById("principal").value;
      let y = document.getElementById("years").value;
      let date = new Date().getFullYear();

      let result = document.getElementById("result");

      let recive = (p*(rate.value/10)*y)/100;

      if(p.value === 0 || p.length === 0 ){
        return result.innerHTML = `<p style="color:red" onclick="getFocus()">You must be enter a positive number</p>`;
      } else{
       return result.innerHTML = `
        <p>if you deposit <span id="color">${p}</span>, </p>
        <p>at an interest rate of <span id="color">${rate.value/10} %,</span></p>
        <p>You will recive an amount of <span id="color">${recive}</span>, </p>
        <p>In the Year <span id="color">${date+Number(y)}.</span></p>
      `;
      }



      

  }

