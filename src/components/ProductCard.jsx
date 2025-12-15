import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "src/components/ui/card";
import { Button } from "src/components/ui/button";

function ProductCard({ product, onEdit, onDelete }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </div>
          {product.category && (
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
              {product.category}
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="font-semibold mb-2">${product.price}</div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => onEdit(product)}>
            Edit
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => onDelete(product.id)}
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
