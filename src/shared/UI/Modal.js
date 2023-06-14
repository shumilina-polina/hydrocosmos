import { Dialog, DialogContent, Zoom } from "@mui/material";
import SvgSelector from "./SvgSelector";

const Modal = ({ open, setOpen, children, className = "" }) => {
  return (
    <Dialog
      TransitionComponent={Zoom}
      className={`dialog ${className}`}
      open={open}
      onClose={() => setOpen(false)}
    >
      <button onClick={() => setOpen(false)}>
        <SvgSelector svg={"close"} />
      </button>
      <DialogContent style={{ padding: 0 }}>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
