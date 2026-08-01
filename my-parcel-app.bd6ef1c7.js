let e;let t={Authorization:"Bearer rc_live_27ae7dd622d646e79d38594fb4c75a72"};var n=(e,t=1e3)=>{let n=document.createElement("div");n.classList.add("notification"),n.innerHTML=`
          <div class="notification-icon">
            !
          </div>
        
          <p>
            ${e}
          </p>
    `,document.documentElement.appendChild(n),setTimeout(()=>{n.style.animation="closeNotification 300ms ease",setTimeout(()=>{n.remove()},200)},t)};let a=document.getElementById("country-input"),s=document.querySelector(".fetch-container");a.addEventListener("input",i=>{clearTimeout(e),e=setTimeout(()=>{let e=a.value.trim();e&&(function(e=""){return fetch(`https://api.restcountries.com/countries/v5/name?q=${e}`,{method:"GET",headers:t}).then(e=>e.json())})(e).then(e=>{s.innerHTML="";let{data:t}=e;if(t.meta.total>1){var a;a=t.objects,s.insertAdjacentHTML("beforeend",`
        <ul class="country-list">
            ${a.map(e=>`
                    <li>${e?.names.common}</li>
                `).join("")}
        </ul>
    `),t.meta.total>=10&&n("To many matches found. Please enter a more specific query",2500)}else(e=>{if(e){let{names:t,capitals:n,population:a,languages:i,flag:o}=e;s.insertAdjacentHTML("beforeend",`
        <main class="container">

          <h1 class="country-name">${t.common}</h1>

          <div class="country-card">

            <div class="country-info">
              <p><strong>Capital: </strong>
                    ${n.map(e=>`<span class="capital"> ${e.name}</span>`)}
              </p>

              <p><strong>Population:</strong>
                <span class="population">${a}</span>
              </p>

              <div class="languages-block">
                <strong>Languages:</strong>
                <ul class="languages">
                    ${i.map(e=>`<li> ${e.name}</li>`).join("")}
                </ul>
              </div>
            </div>

            <div class="flag">
              <img class="flag-img" src="${o.url_svg}" alt="Country flag">
            </div>

          </div>

        </main>

        `)}else n("Country not found!",2500)})(t.objects[0])})},500)});
//# sourceMappingURL=my-parcel-app.bd6ef1c7.js.map
