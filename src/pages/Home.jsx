import { Input } from "src/components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "src/components/ui/card";

function Home() {
  return (
    <div>
      <Button>Click me</Button>
      <Input placeholder="Type here..." />
      <Card>
        <h2>Welcome to the Home Page</h2>
        <p>This is a simple card component.</p>
        <CardContent>
          <p>Card content goes here.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
