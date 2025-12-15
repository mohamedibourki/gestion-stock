import { Button } from "../components/ui/button";
import { useAuth } from "src/context/Auth";
import ProductCatalog from "../components/ProductCatalog";

function Home() {
  const { logout } = useAuth();

  return (
    <div>
      <ProductCatalog />
      <Button onClick={async () => await logout()}>Logout</Button>
    </div>
  );
}

export default Home;
