import { IoCloseSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

type Props = {
    show: boolean;
    setShow: (value: boolean) => void;
}

const MobileNavbar = (props: Props) => {
    const { setShow, show } = props;
    const categories = [
        "electronics",
        "jewelry",
        "men's clothing",
        "women's clothing",
      ];
    const navigate = useNavigate();
  return (
    <>
    <div className="w-full h-auto flex justify-end items-center p-3">
          <button onClick={() => setShow(!show)}>
            <IoCloseSharp size={24} />
          </button>
        </div>
        <hr/>
        <ul className="w-full h-auto flex flex-col mx-4 mt-2">
          <li
            onClick={() => {
              setShow(!show);
              navigate(`/`);
            }}
            className="h-[40px] font-bold"
          >
            Home
          </li>
          {categories.map((category, index) => {
            const title = category.charAt(0).toUpperCase() + category.slice(1);
            return (
              <li
                onClick={() => {
                  setShow(!show);
                  navigate(`/${category}`);
                }}
                className="h-[40px] font-bold border-collapse border-b-1"
                key={index}
              >
                {title}
              </li>
            );
          })}
        </ul>
    </>
  )
}

export default MobileNavbar