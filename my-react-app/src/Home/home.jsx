import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <div>Hoooome</div>
      <Link to={"/sheet"}>Fiche produit</Link>
    </div>
  );
}
