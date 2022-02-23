import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ListAltIcon from '@mui/icons-material/ListAlt';
import jokerImage from "../../assets/images/joker.jpg";
import warImage from "../../assets/images/1917.jpg";
import fast from "../../assets/images/fast-furious.jpg";

export default function Mobile() {
    return (
        <div className="mobile-dashboard">
            <div className="mobile-footer-content">
                <div className="inline-style watch">
                    <PlayArrowIcon className="transform-play-button"/>
                    <div className="watch-now">
                        <span>WATCH NOW</span>
                        <span>2h 28m</span>
                    </div>
                </div>
                <div className="movie-description watch-now">
                    <div style={{marginTop: 15}}>
                        <h2 className="title">SPIDER-MAN</h2>
                        <span className="subtitle">NO WAY HOME</span>
                    </div>
                    <div style={{marginTop: 15, marginLeft: 35, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <AddIcon className="transform-add-button title"/>
                        <span className="subtitle" style={{marginTop: 10}}>ADD TO WISH LIST</span>
                    </div>
                    <div style={{marginTop: 15, marginLeft: 20, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <ListAltIcon className="transform-add-button title"/>
                        <span className="subtitle" style={{marginTop: 10}}>SEE ALL LIST</span>
                    </div>
                </div>
                <h1 className="buy">PURCHASE MOVIES</h1>
                <div className="another-movies">
                    <img src={jokerImage} width={80} height={120}/>
                    <img src={warImage} width={80} height={120}/>
                    <img src={fast} width={80} height={120}/>
                </div>
            </div>
        </div>);
}
