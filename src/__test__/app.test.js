import { getUsersInfo, getEducationsInfo } from "../app";
import { getUsers, getEducations } from "../request";

jest.mock("../request");

test("should call getusers ", async () => {
  getUsers.mockImplementation(() => {});

  getUsersInfo(1);

  expect(getUsers).toHaveBeenCalled();
  expect(getUsers).toHaveBeenCalledTimes(1);
});

test("get educations", async () => {
  getEducations.mockImplementation(() => {});

  getEducationsInfo(1);

  expect(getEducations).toHaveBeenCalled();
  expect(getEducations).toHaveBeenCalledTimes(1);
});
