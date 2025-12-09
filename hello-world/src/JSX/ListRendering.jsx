export const ListRendering = () => {
  
    const productList = [
    {
      id: 1,
      prodName: "Laptop",
      price: 999,
    },
    {
      id: 2,
      prodName: "Phone",
      price: 599,
    },
    {
      id: 3,
      prodName: "Keyboard",
      price: 399,
    },
  ];

  const productElements = productList
    .filter(product=> product.price > 500)
    .map((product) => {
      return (
        <div key={product.id}>
          <h4>{product.prodName}</h4>
          <p> Cost: ${product.price}</p>
        </div>
      );
    });

  return (
    <div>
      <h3>Our Products</h3>
      {productElements}
    </div>
  );
};
