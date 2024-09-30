import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { useState, ChangeEvent } from "react";
import Button from "./components/ui/Button";
import { formInputList } from "./components/data/index";
import Input from "../src/components/ui/Input";
import { Description } from "@headlessui/react";
import { IProduct } from "../src/components/interfaces/index";
const App = () => {
  //<--STATE-->
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  });
  const [isOpen, setIsOpen] = useState(false);
  //<--HANDLER-->
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  }
  const renderFormInputList = formInputList.map((input) => (
    <div className="flex flex-col">
      <label
        htmlFor={input.id}
        className="mb-[2px] font-medium text-sm text-gray-500"
      >
        {input.label}
      </label>
      <Input
        type={input.type}
        id={input.id}
        name={input.name}
        // its wrong now
        //value={product[""]}
        onChange={onChangeHandler}
      />
    </div>
  ));
  return (
    <main className=" container mx-auto">
      <Button
        className="bg-indigo-700 hover:bg-indigo-800 "
        width="w-full"
        onClick={openModal}
      >
        Add
      </Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 rounded-md">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add New Product">
        <form className="space-y-3">
          {renderFormInputList}{" "}
          <div className="flex items-center space-x-3">
            <Button
              className="bg-indigo-700 hover:bg-indigo-800 "
              width="w-full"
            >
              Submit
            </Button>
            <Button className="bg-gray-300 hover:bg-gray-800" width="w-full">
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;
