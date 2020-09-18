import "./style/index.scss";
import { getEducations, getUsers } from "./request";

const getUsersInfo = (id) => getUsers(id);
const getEducationsInfo = (id) => getEducations(id);

const path = window.location.pathname.split("/");
if(path[1] === "users") {
    const id = path[2];
    getUsersInfo(id);
    getEducationsInfo(id);
}

export { getUsersInfo, getEducationsInfo };
