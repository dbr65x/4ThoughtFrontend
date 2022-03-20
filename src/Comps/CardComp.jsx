import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './StylesCards.css';
export default function CardComp(props) {

  return (
    <Card style={{borderRadius:props.br}}>
      <CardMedia
        component="img"
        height="120"
        src={props.image}
        alt="Political Protest"
      />
    <CardContent style={{backgroundColor:props.color,fontSize:'12px'}}>
      {props.content}
    </CardContent>

    </Card>
  );
}
