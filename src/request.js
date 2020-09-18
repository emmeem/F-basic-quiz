import {renderHeader, appendToUl} from "./render"

const url = "http://localhost:8080/users/";

const getUsers = (id) => {
  return fetch(`${url}${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      return renderHeader(data.avatar, data.name, 
        data.age, data.description)
    })
    .catch((err) => console.log(err));
};



const getEducations = (id) => {
  return fetch(`${url}${id}/educations`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((element) => {
      element.sort((a, b) => a.year - b.year);
      element.forEach((data) => {
        return appendToUl(data.year,data.title,data.description)}
        );}
      )
  .catch((err) => console.log(err));
};

export { getUsers, getEducations };
