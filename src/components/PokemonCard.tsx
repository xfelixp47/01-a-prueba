type PokemonCardProps = {
  id: number;
  name: string;
  image: string;
};

function PokemonCard({ id, name, image }: PokemonCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        width: "180px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      <img src={image} alt={name} width={120} height={120} />
      <h3>{name.toUpperCase()}</h3>
      <p>ID: #{id}</p>
    </div>
  );
}

export default PokemonCard;