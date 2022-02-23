import WatchLaterIcon from '@mui/icons-material/WatchLater';

export default function Browser() {
    return(
        <div className="desktop-dashboard">
            <div className="center-content">
                <h1 className="gideon-roman">Component under construction for this device</h1>
                <div className="inline-style">
                    <WatchLaterIcon className="transform-icon" />
                    <h1 className="gideon-roman" style={{marginLeft: 50}}>Coming soon</h1>
                </div>
            </div>
        </div>
    );
}
