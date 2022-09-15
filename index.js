var services = document.getElementById("services");
var content =`<div>
<div class="icon"><i class="bi bi-briefcase"></i></div>
<h4 class="title"><a href="">Lorem Ipsum</a></h4>
<p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
</div>`

for (let i = 0; i < 6; i++) {
    var service = document.createElement(`div`)
    service.innerHTML = content
    service.className = 'col-lg-4 col-md-6 icon-box'
    services.appendChild(service)
}
