import Image from "./Image";
import Button from "./ui/Button";
import { txtSlicer } from "../utils/functions";
interface IProps {}
const description: string = ` Striking styling; powerful engine; fuel efficient powertrain; standard
        driver-assistance features; sporty driving experience; upscale luxury
        features`;
const ProductCard = ({}: IProps) => {
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image
        imageURL="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Product Card Image"
        className=" rounded-md mb-2"
      />
      <h3>2023 Porsche Panamera</h3>
      <p>{txtSlicer(description)}</p>
      <div className="flex gap-2 items-center my-4">
        {" "}
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer " />
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer " />
        <span className="w-5 h-5 bg-black rounded-full cursor-pointer" />
      </div>
      <div className="flex items-center justify-between ">
        <span className="text-indigo-900 ">$500.000</span>

        <Image
          imageURL="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Product Card Image"
          className=" w-10 h-10 rounded-full object-bottom"
        />
      </div>
      <div className="flex items-center justify-between gap-3  mt-5">
        <Button
          width="w-full"
          className="bg-indigo-700 hover:bg-indigo-800 "
          onClick={() => {
            console.log("clicked");
          }}
        >
          {" "}
          EDIT{" "}
        </Button>
        <Button width="w-full" className="bg-red-700 ">
          DELETE{" "}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
