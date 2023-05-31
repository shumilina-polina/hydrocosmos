import { Dialog, DialogContent, Zoom } from "@mui/material";
import s from "./modal.module.scss";
import cn from "classnames";

const Modal = ({ open, setOpen, children }) => {
  return (
    <Dialog
      TransitionComponent={Zoom}
      className={cn(s.dialog, "dialog")}
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogContent className={s.dialog_content}>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
