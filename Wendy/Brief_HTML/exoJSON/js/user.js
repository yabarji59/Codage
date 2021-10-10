let users = [];
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/users?page=2", true);
xhr.onload = function () {
  console.log(xhr.response);
  users = JSON.parse(xhr.responseText).data;
  console.log(users);

  for (const user of users) {
    let userElement = `<div>
<div>
    ${user.first_name} ${user.last_name}</br>
    ${user.email}</br>
    ${user.id}
</div>
<img src="${user.avatar}">
</div>`;

    document.getElementById("container-users").innerHTML += userElement;
  }
};
xhr.send();
