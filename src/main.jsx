function Main({ img, placeName, description }) {

  return (

    
      <div className="card">
        <img src={img} />
        <h1>{placeName}</h1>
        <p>{description}</p>
      </div>
    
  );
}

export default Main;
