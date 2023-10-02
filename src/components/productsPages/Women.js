import ProductData from "../../data/ProductData";
import Filter from "./Filter";

const Women = () => {
  const toyItem = ProductData().TOY_ITEMS.filter((item) => {
    return item.category === "fountains";
  });
  const title = "Accesorios para Mujeres";

  return <Filter toyItem={toyItem} title={title} />;
};

export default Women;
