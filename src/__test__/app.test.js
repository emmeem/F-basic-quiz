import { getUsersInfo, getEducationsInfo } from "../app";
import { getUsers, getEducations } from "../request";

jest.mock("../request");

beforeEach(() => {
   jest.clearAllMocks();
})

test("should call getusers ", async () => {

  getUsersInfo(1);

  expect(getUsers).toHaveBeenCalled();
  expect(getUsers).toHaveBeenCalledTimes(1);
});

test("get educations", async () => {

  getEducationsInfo(1);

  expect(getEducations).toHaveBeenCalled();
  expect(getEducations).toHaveBeenCalledTimes(1);
});
