headerElement =
`<header class="titre">
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">Accueil</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html#intro">Introduction</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html#espece">Caractéristiques</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html#symbolisme">Symbolisme</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html#art">Représentation dans l'art</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="page2.html">Galerie</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="mon-titre">
        <h1>Hiboux et Chouettes</h1>
    </div>
</header>`;
document.getElementById("header").innerHTML = headerElement;