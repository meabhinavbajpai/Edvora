import  React, {useMemo} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

export default function PokiDetail(props) {
  const [open, setOpen] = React.useState(false);
  const [detail, setDetail] = React.useState([])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useMemo(() => {

    axios.get(props.url).then(res=>{
        console.log(res)
        setDetail(res.data)
    }).catch(err=>{
        console.log(err)
    })


  }, [props.url])



  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {props.name}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Your Pokemon"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
    {/* {JSON.stringify(detail)} */}
    <h1>{detail.name}</h1>
    <h5>Details:</h5>
    {detail.abilities.length>0 && detail.abilities.map((item,index)=>{
        return <li>{item.ability.name}</li>
    })}
        <h5>Moves:</h5>
    {detail.moves.length>0 && detail.moves.map((item,index)=>{
        return <li>{item.move.name}</li>
    })}
    
    

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
