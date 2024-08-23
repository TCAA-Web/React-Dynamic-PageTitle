export async function getAllProducts() {
  let data = await fetch("https://dummyjson.com/products");
  let json = await data.json();
  return json;
}

export async function getProductByID(id) {
  let data = await fetch("https://dummyjson.com/products/" + id);
  let json = await data.json();
  return json;
}

export const productListQuery = () => ({
  queryKey: ["products", "list", "all"],
  queryFn: () => getAllProducts(),
});

export const productDetailsQuery = (id) => ({
  queryKey: ["product", "by_id", id ?? "all"],
  queryFn: () => getProductByID(id),
  enabled: !!id,
});
