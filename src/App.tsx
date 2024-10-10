import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { useState, ChangeEvent, FormEvent } from "react";
import Button from "./components/ui/Button";
import { formInputList } from "./components/data/index";
import Input from "../src/components/ui/Input";
import { ProductValidation } from "../src/validations/index";
import { IProduct } from "../src/components/interfaces/index";
import ErrorMessage from "./components/ErrorMessage";
const App = () => {
  const defaultProductObject = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  //<--STATE-->
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [product, setProduct] = useState<IProduct>(defaultProductObject);
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
    setErrors({ ...errors, [name]: "" });
  }
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const errors = ProductValidation({
      title: product.title,
      description: product.description,
      price: product.price,
      imageURL: product.imageURL,
    });
    // console.log(errors);
    const hasErrorMsg =
      Object.values(errors).some((value) => value == "") &&
      Object.values(errors).every((value) => value == "");
    // console.log(hasErrorMsg);
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
    console.log("Send This Product To Our Server");
  };
  const onCancel = () => {
    console.log("cancel");
    setProduct(defaultProductObject);
    closeModal();
  };

  const renderFormInputList = formInputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
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
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage msg={errors[input.name]} />
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
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}{" "}
          <div className="flex items-center space-x-3">
            <Button
              className="bg-indigo-700 hover:bg-indigo-800 "
              width="w-full"
            >
              Submit
            </Button>
            <Button
              className="bg-gray-300 hover:bg-gray-800"
              width="w-full"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;
