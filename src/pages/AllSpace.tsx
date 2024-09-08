import { useState } from "react";
import RoomDetail from "../components/RoomList/RoomDetail";
import RoomList from "../components/RoomList/RoomList";
import Search from "../components/Search/Search";
import { useParams } from "react-router-dom";

const AllSpace = () => {
  const { roomId } = useParams();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Search placeholder="Tìm kiếm" />
      <RoomList handleClickOpen={handleClickOpen} />
      <RoomDetail open={open} handleClose={handleClose} roomId={roomId} />
    </div>
  );
};

export default AllSpace;
