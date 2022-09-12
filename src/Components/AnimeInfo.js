import './AnimeInfo.css'

export default function AnimeInfo(props) {
    const {title,source,rank,score,popularity,members,status,rating,duration}=props.data;
    return(
          <div className="anime-content">
           <h2>{title}</h2><br />
           <img src={props.data.images.jpg.large_image_url} alt=''/><br /><br />
           <div className="info">
             <h3>#Rank : {rank}</h3>
             <h3>#Score : {score}</h3>
             <h3>#Popularity : {popularity}</h3>
             <h4>Members : {members}</h4>
             <h4>Source : {source}</h4>
             <h4>Duration : {duration}</h4>
             <h4>Status : {status}</h4>
             <h4>Rating : {rating}</h4>
           </div>
           </div>
        )


}

