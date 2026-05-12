
import ToyCard from "./ToyCard";

function ToyContainer({ toys = [], deleteToy, likeToy }) {
  return (
    <div className="toy-container">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          deleteToy={deleteToy}
          likeToy={likeToy}
        />
      ))}
    </div>
  );
}

export default ToyContainer;