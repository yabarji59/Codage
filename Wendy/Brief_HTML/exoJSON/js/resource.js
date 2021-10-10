let resources = [];
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/unknown", true);
xhr.onload = function () {
  console.log(xhr.response);
  resources = JSON.parse(xhr.responseText).data;
  console.log(resources);

  for (const resource of resources) {
    let resourceElement = `<div>
<div>
    ${resource.id}</br>
    ${resource.name}</br>
    ${resource.year}</br>
    ${resource.color}</br>
    ${resource.pantone_value}
</div>
</div>`;

    document.getElementById("container-resource").innerHTML += resourceElement;
  }
};
xhr.send();
