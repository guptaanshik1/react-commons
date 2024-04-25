import useGetUsers from "../hooks/useGetUsers";
import HigherOrder from "./HigherOrder";

const GetUser = () => {
  const { usersData, isUsersLoading } = useGetUsers();

  if (isUsersLoading) return <h1>Loading....</h1>;

  return (
    <div>
      <h1>Users</h1>
      {usersData?.slice(0, 10)?.map((user) => (
        <div>
          <p>{user?.name}</p>
        </div>
      ))}
    </div>
  );
};

const GetUserComp = HigherOrder("Usersssss");

export default GetUserComp;
