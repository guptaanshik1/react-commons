import { IUser } from "../utils/data";
import useQuery from "./common/useQuery";

const useGetUsers = () => {
  const {
    data: usersData,
    error: usersError,
    isLoading: isUsersLoading,
  } = useQuery<Array<IUser>>("/users");

  return { usersData, usersError, isUsersLoading };
};

export default useGetUsers;
