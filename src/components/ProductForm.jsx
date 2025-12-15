import { useState, useEffect } from "react";
import { Input } from "src/components/ui/input";
import { Button } from "src/components/ui/button";
import { CATEGORIES } from "src/lib/constants";

function ProductForm({ onSubmit, initialData, isEditing, onCancel }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name,
        description: initialData.description,
        price: initialData.price,
        category: initialData.category || "",
      });
    } else {
      setForm({ name: "", description: "", price: "", category: "" });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.category) return;
    onSubmit(form);
    setForm({ name: "", description: "", price: "", category: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex flex-col md:flex-row gap-2"
    >
      <Input
        name="name"
        placeholder="Product Name"
        value={form.name}
        onChange={handleChange}
        required
        className="md:w-1/4"
      />
      <Input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="md:w-1/3"
      />
      <Input
        name="price"
        placeholder="Price"
        type="number"
        min="0"
        value={form.price}
        onChange={handleChange}
        required
        className="md:w-1/6"
      />
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        required
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:w-1/6"
      >
        <option value="">Select Category</option>
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <Button type="submit">{isEditing ? "Update" : "Add"}</Button>
      {isEditing && (
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      )}
    </form>
  );
}

export default ProductForm;
