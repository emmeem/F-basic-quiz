import "./style/index.scss";
import { getEducations, getUsers } from "./request";

const path = window.location.pathname.split("/");
const id = path[2];
getUsers(id);
getEducations(id);

export { getUsers, getEducations };
