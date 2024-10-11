import { useEffect, useReducer } from "react";
import RoomList from "../components/RoomList/RoomList";
import Search from "../components/Search/Search";
import WorkingSpaceApi from "../services/BusinessApi";
import Loading from "../components/Loading/Loading";
import { Pagination } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#506df7", // Your custom primary color
//     },
//   },
// });

const initState = {
  loading: false,
  data: [],
  error: null,
};

const allSpaceReducer = (state: any, action: any) => {
  switch (action.type) {
    case "GET_ALLSPACE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ALLSPACE_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case "GET_ALLSPACE_ERROR":
      return {
        ...state,
        data: [],
        error: action.data,
      };
  }
};

const AllSpace = () => {
  const [allspaces, allSpaceDispatch] = useReducer(allSpaceReducer, initState);

  useEffect(() => {
    // allSpaceDispatch({
    //   type: "GET_ALLSPACE_REQUEST",
    // });
    const fetchData = async () => {
      try {
        const fetchWorkingSpace = await WorkingSpaceApi.getAll();
        allSpaceDispatch({
          type: "GET_ALLSPACE_SUCCESS",
          data: fetchWorkingSpace.data,
        });
      } catch (error) {
        allSpaceDispatch({ type: "GET_ALLSPACE_ERROR", data: error });
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="mb-10">
      {allspaces.loading ? (
        <Loading />
      ) : (
        <div>
          <Search placeholder="Tìm kiếm" />
          <RoomList />
        </div>
      )}
      <div className="my-10 flex justify-center">
        <Pagination count={10} color="primary" variant="text" />
      </div>
    </div>
  );
};

export default AllSpace;
