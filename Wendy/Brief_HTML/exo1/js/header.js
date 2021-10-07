headerElement = `<header class="header">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="shopwendy.html">ShopWendy <img width = 50px src="./icon/vans.png"></img></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="nike.html">Nike</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="vans.html">Vans</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="puma.html">Puma</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="contact.html">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#">A propos</a>
                </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="Rechercher" placeholder="Rechercher" aria-label="Search">
                <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Rechercher</button>
            </form>
        </div>
    </div>
</nav>
</header>`;
document.getElementById("header").innerHTML = headerElement;
