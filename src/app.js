import "./style/index.scss";

import { getEducations, getUsers } from "./request";

const id = 1;
getUsers(id);
getEducations(id);