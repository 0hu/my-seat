import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from '@mui/material';

const DialogContentStyle = { maxHeight: '20rem', whiteSpace: 'pre-line' };

interface Props {
  open: boolean;

  title?: string;
  content: string;
  text?: string;

  onClose: React.ReactEventHandler;
  onClick: React.ReactEventHandler;
}

export default function Modal({
  open,
  title,
  content,
  text = '확인',
  onClose,
  onClick,
}: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle data-testid="title" >
        {title}
      </DialogTitle>

      <DialogContent
        sx={DialogContentStyle}
        data-testid="content"
      >
        {content}
      </DialogContent>

      <DialogActions>
        <Button
          onClick={onClick}
          data-testid="text"
        >
          {text}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
