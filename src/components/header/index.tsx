import ImageCustom from "../image";
import Personal from "./personal.header";

const Header: React.FC = () => {
  return (
    <header className='w-full fixed top-0 right-0 left-0'>
      <div className='w-full mx-auto h-[50px] flex items-center justify-between'>
        <figure className='w-[100px] flex items-center justify-center'>
          <ImageCustom
            src='https://sbx-mc.payme.vn/assets/img/login/logo-payme.svg'
            alt='Login logo'
            priority
          />
        </figure>

        <div className=''>
          <Personal />
        </div>
      </div>
    </header>
  );
};

Header.displayName = "Header";
export default Header;
