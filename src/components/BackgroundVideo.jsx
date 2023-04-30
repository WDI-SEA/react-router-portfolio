import waves from "../assets/waves.mp4";
  
  export default function BackgroundVideo() {
    return (
      <div className="videocontainer">
        <video autoPlay loop muted>
          <source src={waves} type="video/mp4" />
        </video>
      </div>
    );
  }