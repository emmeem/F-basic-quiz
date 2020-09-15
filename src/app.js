import "./style/index.scss";
import { getEducations, getUsers } from "./request";

const path = location.pathname.split('/')
const id = path[2];
getUsers(id);
getEducations(id);
