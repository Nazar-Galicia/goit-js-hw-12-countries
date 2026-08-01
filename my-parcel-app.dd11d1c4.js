let e;let t={Authorization:"Bearer rc_live_27ae7dd622d646e79d38594fb4c75a72"},n=document.getElementById("country-input"),a=document.querySelector(".fetch-container");n.addEventListener("input",s=>{clearTimeout(e),e=setTimeout(()=>{let e=n.value.trim();e&&(function(e=""){return fetch(`https://api.restcountries.com/countries/v5/name?q=${e}`,{method:"GET",headers:t}).then(e=>e.json())})(e).then(e=>{var t;a.innerHTML="";let{data:n}=e;n.meta.total>1?(t=n.objects,a.insertAdjacentHTML("beforeend",`
        <ul class="country-list">
            ${t.map(e=>`
                    <li>${e?.names.common}</li>
                `).join("")}
        </ul>
    `)):(e=>{if(e){let{names:t,capitals:n,population:s,languages:i,flag:o}=e;a.insertAdjacentHTML("beforeend",`
        <main class="container">

          <h1 class="country-name">${t.common}</h1>

          <div class="country-card">

            <div class="country-info">
              <p><strong>Capital: </strong>
                    ${n.map(e=>`<span class="capital"> ${e.name}</span>`)}
              </p>

              <p><strong>Population:</strong>
                <span class="population">${s}</span>
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

        `)}else((e,t=1e3)=>{let n=document.createElement("div");n.classList.add("notification"),n.innerHTML=`
          <div class="notification-icon">
            !
          </div>
        
          <p>
            ${e}
          </p>
    `,document.documentElement.appendChild(n),setTimeout(()=>{n.style.animation="closeNotification 300ms ease",setTimeout(()=>{n.remove()},200)},t)})("Country not found!")})(n.objects[0])})},500)});
//# sourceMappingURL=my-parcel-app.dd11d1c4.js.map
