const url = "http://localhost:8080/users/";

const introduce = (name, age) => {
  return `MY NAME IS ${name} ${age}YO AND THIS IS MY RESUME/CV`;
};

const getUsers = (id) => {
  return fetch(`${url}${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      $("img").attr("src", data.avatar);
      $(".introduce").html(introduce(data.name, data.age));
      $(".describe").html(data.description);
    })
    .catch((err) => console.log(err));
};

const getEducations = (id) => {
  return fetch(`${url}${id}/educations`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((element) => {
      element.sort((a,b)=> a.year-b.year)
      element.forEach((data) => {
        $("ul").append(
          `<li>
          <span class="year">${data.year}</span>
          <section class="describe-content">
            <span class="title">${data.title}</span>
            <p class="describe">${data.description}</p>
          </section>
        </li>`
        );
      });
    })
    .catch((err) => console.log(err));
};

export { getUsers, getEducations };
