function ToyCard({ toy, deleteToy, likeToy }) {
  return (
    <div className="card" data-testid="toy-card">
      <img src={toy.image} alt={toy.name} />

      <h2>{toy.name}</h2>

      <p>{toy.likes} Likes </p>

      <button onClick={() => likeToy(toy.id, toy.likes)}>
        Like {"<3"}
      </button>

      <button onClick={() => deleteToy(toy.id)}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;