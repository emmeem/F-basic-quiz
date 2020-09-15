import {getUsers,getEducations} from '../request'

jest.mock("../request")

test("get users info", async () => {
  const id = 1;
  getUsers.mockImplementation(() => {});
  getUsers(id);
     
  expect(getUsers).toHaveBeenCalled();
  expect(getUsers).toHaveBeenCalledTimes(1);
  });
  

  test("get educations", async () => {
    const id = 1;
    getEducations.mockImplementation(()=>{});
    getEducations(id);
    
    expect(getEducations).toHaveBeenCalled();
    expect(getEducations).toHaveBeenCalledTimes(1);
  });
  

