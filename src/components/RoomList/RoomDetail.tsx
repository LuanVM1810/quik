import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

type Props = {
  open: boolean;
  handleClose: () => void;
  roomId: string | undefined;
};

export default function RoomDetail({ open, handleClose, roomId }: Props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Chi tiết phòng số: {roomId}
        </DialogTitle>
        <DialogContent>
          <img
            className="rounded-2xl"
            src="https://s3-alpha-sig.figma.com/img/09a2/0737/d9c552ee0defebbecf4d4aa52437f2c7?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NUlXysMlH48Qwj5moqR0a5LnGBDUNyv9JFtAxc45WgJUYJGKPOUisfZw06hNbu0hsCXMeejqUJcQp~NNV994x5EKQGPyyWo7FvP2NvyGYEsdaJYhSs8jbQ7jR1Ss19CNlSxYPXGQH9F~5XbjifawB54ctv7pQa-t8KxiiLgkRjhRKMliGNnqHVw9jN3zITLvHe9PKRjuNBtg3DweaG8dXUiWRFy2v79AWeYyXgt810WCAEPp25paijwglq7Q3eEdy1AmfowJ6JFyYRAG~BKHhXwWoRT~xCc342crfMtnIwXEUMCoZRyU~vaeQo4hLuK5ka8SC3EPohZdpB-htDFGvw__"
          />
        </DialogContent>
        <DialogActions>
          <button
            className="text-[#506DF7] px-4 py-2 border-2 border-[#506DF7] rounded-[8px]"
            autoFocus
            onClick={handleClose}
          >
            Đóng
          </button>
          <button
            className="bg-[#506DF7] px-4 py-2 text-white rounded-[8px]"
            onClick={handleClose}
            autoFocus
          >
            Đặt ngay
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
