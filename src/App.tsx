import './App.css';

export const App = () =>{
  return (
    <div className="App">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fCn8zs912OE"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      />
    </div>
  );
}
