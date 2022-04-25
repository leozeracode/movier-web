import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton, Link } from '@mui/material';
import { PlayCircleOutline } from '@mui/icons-material';
import { MovieModel } from '@/model';

type Props = {
  movie: MovieModel
}

const  formatdate = (date: string) =>{
  var data = new Date(date),
      dia  = data.getDate().toString().padStart(2, '0'),
      mes  = (data.getMonth()+1).toString().padStart(2, '0'), 
      ano  = data.getFullYear();
  return dia+"/"+mes+"/"+ano;
}

 const Moviecard: React.FC<Props> = ({movie})  =>{
  return (
    <Card sx={{ width: 300, height: 650 }}>
      <CardMedia
        component="img"
        height="400"
        image={movie.image_url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        {movie.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">Gender: {movie.gender}</Typography>
        <Typography variant="body2" color="text.secondary">Author: {movie.author}</Typography>
        <Typography variant="body2" color="text.secondary">Release Date: {formatdate(movie.release_date)}</Typography>
        <Typography variant="body2" color="text.secondary">Classification: {movie.classification}</Typography>
      </CardContent>
      <CardActions>
        <Link href={`/room/${movie._id}`}>
        <IconButton size="small"><PlayCircleOutline fontSize='large' color='primary'/></IconButton>
        </Link>
      </CardActions>
    </Card>
  );
}

export default Moviecard