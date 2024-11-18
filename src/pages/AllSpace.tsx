import { useEffect, useReducer, useState } from "react";
import RoomList from "../components/RoomList/RoomList";
import Search from "../components/Search/Search";
import Loading from "../components/Loading/Loading";
// import { Pagination } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import workingSpaceApi from "../services/WorkingSpaceApi";
import EmptyList from "../components/EmptyList/EmptyList";

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
    case "SEARCH_SPACE":
      return {
        ...state,
        loading: false,
        data: action.data,
      };
  }
};

const AllSpace = () => {
  const location = useLocation();
  const { search, type } = location.state;
  const [searchValue, setSearchValue] = useState(search ?? "");
  const [roomType, setRoomType] = useState(type ?? "");
  const [allspaces, allSpaceDispatch] = useReducer(allSpaceReducer, initState);

  // console.log(search, type);

  useEffect(() => {
    const fetchData = async () => {
      allSpaceDispatch({
        type: "GET_ALLSPACE_REQUEST",
      });
      try {
        const fetchWorkingSpace = await workingSpaceApi.search(
          searchValue,
          roomType
        );
        allSpaceDispatch({
          type: "GET_ALLSPACE_SUCCESS",
          data: fetchWorkingSpace.data,
        });
      } catch (error) {
        allSpaceDispatch({ type: "GET_ALLSPACE_ERROR" });
        console.log(error);
      }
    };
    fetchData();
  }, [searchValue, roomType]);

  // console.log(allspaces.data);
  // console.log(searchValue, roomType);

  return (
    <div className="mb-10">
      {allspaces.loading ? (
        <Loading />
      ) : (
        <div>
          <Search
            setRoomType={setRoomType}
            setSearchValue={setSearchValue}
            placeholder="Tìm kiếm qua địa chỉ"
          />
          {allspaces.data.length == 0 ? (
            <EmptyList message="Không có phòng" />
          ) : (
            <RoomList roomList={allspaces.data} />
          )}
        </div>
      )}
      {/* <div className="my-10 flex justify-center">
        <ThemeProvider theme={theme}>
          <Pagination count={5} color="primary" variant="text" />
        </ThemeProvider>
      </div> */}
    </div>
  );
};

export default AllSpace;
