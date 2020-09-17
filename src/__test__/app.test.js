import { getUsersInfo, getEducationsInfo } from "../app";
import { getUsers, getEducations } from "../request";

jest.mock("../request");

// beforeEach(() => {
//   jest.clearAllMocks();
// })

test("should call getusers ", async () => {
  // TODO 不是用这行代码，而是使用上面注释代码进行mock clear
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
