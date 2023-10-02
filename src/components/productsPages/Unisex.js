import ProductData from "../../data/ProductData";
import Filter from "./Filter";

const Unisex = () => {
  const toyItem = ProductData().TOY_ITEMS.filter((item) => {
    return item.category === "toys";
  });
  const title = "Unisex";

  return <Filter toyItem={toyItem} title={title} />;
};

export default Unisex;
