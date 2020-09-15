import { getUsers, getEducations } from "../app";

jest.mock("../request");

test("should call getusers ", async () => {
  expect(getUsers).toHaveBeenCalled();
  expect(getUsers).toHaveBeenCalledTimes(1);
});

test("get educations", async () => {
  expect(getEducations).toHaveBeenCalled();
  expect(getEducations).toHaveBeenCalledTimes(1);
});
