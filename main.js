const elForm = document.querySelector("#form");
const elInput = document.querySelector("#input");
const elBox = document.querySelector("#wrapper");

function renderBayro(bayro) {
  bayro.forEach((item) => {
    elBox.innerHTML += `
        <div class="bg-[#2B3844] w-[265px] p-[30px] text-center ">
<img class="w-[265px] h-[120px] mb-[20px]" src="${item.flags.png}"/>
<h1>${item.name.common}</h1>
        </div>
        `;
  });
}

renderBayro(contries);
