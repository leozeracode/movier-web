import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useMovie } from '@/hooks';




const Room: React.FC = () => {
  const router = useRouter()
  const { loadById, movie } = useMovie()

  useEffect(() => {
    if (router.isReady) {
      const { _id } = router.query
      loadById(_id as string)
    }
  }, [router])



  return (
    <Grid item xs={12} md={12} sm={12} style={{ height: '100vh' }}>
      {movie && (
        <iframe
        width="100%"
        height="100%" src={`https://www.youtube.com/embed/${movie.movie_url.replace('https://www.youtube.com/watch?v=', '')}`}
        title="YouTube video player"
        frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      )}
    </Grid>
  )
}




export default Room;
