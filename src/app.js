import "./style/index.scss";
import { getEducations, getUsers } from "./request";

// TODO url是 http://localhost:1234/soga/1 的是不是也是能访问到的？
const path = window.location.pathname.split("/");
const id = path[2];
// TODO 这里参数命名index有点歧义
const getUsersInfo = (index) => getUsers(index);
const getEducationsInfo = (index) => getEducations(index);

getUsersInfo(id);
getEducationsInfo(id);

export { getUsersInfo, getEducationsInfo };
