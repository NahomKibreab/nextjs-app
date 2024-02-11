export default function Playlist({ params }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "2rem",
      }}
    >
      <h2>{params.playlist}</h2>
    </div>
  );
}
