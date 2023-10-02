import ProductData from "../../data/ProductData";
import Filter from "./Filter";

const Accesorios = () => {
  const toyItem = ProductData().TOY_ITEMS.filter((item) => {
    return item.category === "Accesorios";
  });
  const title = "Accesorios varios";

  return (
    <>
      <Filter toyItem={toyItem} title={title} />
    </>
  );
};

export default Accesorios;
