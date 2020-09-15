import {getUsers,getEducations} from '../app'

jest.mock("../request")

test("should call getusers ", async () => {
  const id = 1;
     
  expect(getUsers).toHaveBeenCalled();
  expect(getUsers).toHaveBeenCalledTimes(1);
  });
  

  test("get educations", async () => {
    const id = 1;

    expect(getEducations).toHaveBeenCalled();
    expect(getEducations).toHaveBeenCalledTimes(1);
  });
  

