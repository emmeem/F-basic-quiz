import "./style/index.scss";
import { getEducations, getUsers } from "./request";

const path = window.location.pathname.split("/");
const id = path[2];
const getUsersInfo = (index) => getUsers(index);
const getEducationsInfo = (index) => getEducations(index);

getUsersInfo(id);
getEducationsInfo(id);

export { getUsersInfo, getEducationsInfo };
