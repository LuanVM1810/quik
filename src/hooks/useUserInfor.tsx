import { useEffect, useState } from "react";
import { UserInfor } from "../interfaces/UserInterface";
import userApi from "../services/userApi";

const useUserInfor = (username: string | null) => {
  const [userInfor, setUserInfor] = useState<UserInfor>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userApi.getUserInfor(username);
        setUserInfor(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [username]);

  return { userInfor, loading };
};

export default useUserInfor;
