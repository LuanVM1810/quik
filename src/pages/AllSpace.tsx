import { useEffect, useReducer } from "react";
import RoomList from "../components/RoomList/RoomList";
import Search from "../components/Search/Search";
import Loading from "../components/Loading/Loading";
import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import workingSpaceApi from "../services/WorkingSpaceApi";

const theme = createTheme({
  palette: {
    primary: {
      main: "#506df7", // Your custom primary color
    },
  },
});

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
    allSpaceDispatch({
      type: "GET_ALLSPACE_REQUEST",
    });
    const fetchData = async () => {
      try {
        const fetchWorkingSpace = await workingSpaceApi.getAll();
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

  // console.log(allspaces.data);

  return (
    <div className="mb-10">
      {allspaces.loading ? (
        <Loading />
      ) : (
        <div>
          <Search placeholder="Tìm kiếm" />
          <RoomList roomList={allspaces.data} />
        </div>
      )}
      <div className="my-10 flex justify-center">
        <ThemeProvider theme={theme}>
          <Pagination count={5} color="primary" variant="text" />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default AllSpace;
