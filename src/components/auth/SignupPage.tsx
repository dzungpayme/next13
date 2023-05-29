"use client";
import { useState } from "react";
import ImageCustom from "../image";
import Link from "next/link";

import features from "./payme.features.json";

interface FeaturesProps {
  title: string;
  content: string;
}

const SignupPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [hidePassword, setHidePassword] = useState<boolean>(false);

  const HANDLE = {
    unHidePassword: () => {
      setHidePassword((prev) => !prev);
    },
  };

  return (
    <main className='w-full min-h-screen bg-[url("https://sbx-mc.payme.vn/assets/img/login/background-login.svg")] flex justify-center items-center gap-20 laptop:flex-col-reverse tablet:flex-col-reverse tablet:py-10'>
      <div className='-mt-10 tablet:mt-0 mobile:px-4'>
        <figure className='w-[136px] flex items-center justify-center mb-[33px] laptop:hidden tablet:hidden'>
          <ImageCustom
            src='https://sbx-mc.payme.vn/assets/img/login/logo-payme.svg'
            alt='Login logo'
          />
        </figure>

        <div className='flex flex-col gap-y-10'>
          {features.map((item: FeaturesProps, index: number) => {
            return (
              <div className='flex items-start' key={index}>
                <figure className='w-5 mr-6'>
                  <ImageCustom
                    src='https://sbx-mc.payme.vn/assets/img/login/form-checkbox.svg'
                    alt='box'
                  />
                </figure>

                <div className='-mt-1 flex-1'>
                  <h2 className='mb-[9px] font-medium text-xl'>{item.title}</h2>
                  <p className='max-w-[483px] text-[#647081]'>{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex items-center flex-col'>
        <div className='items-center justify-center mb-[33px] hidden laptop:flex tablet:flex'>
          <figure className='w-[136px] flex items-center justify-center'>
            <ImageCustom
              src='https://sbx-mc.payme.vn/assets/img/login/logo-payme.svg'
              alt='Login logo'
            />
          </figure>
        </div>

        <section className='bg-white p-20 py-12 shadow-[0_20px_46px_0_rgba(0,0,0,.1)] rounded-[20px] mobile:px-4 mobile:rounded-none mobile:shadow-none'>
          <h1 className='text-[28px] font-bold text-[#272b41] max-w-[450px] mb-8 text-center'>
            Đăng nhập tài khoản của bạn
          </h1>

          <div className='w-[450px] mobile:w-full'>
            <div className='w-full mb-[15px]'>
              <label className='text-[15px] mb-1'>ID tài khoản</label>
              <input
                type='text'
                placeholder='Tên tài khoản'
                className='text-[15px] p-[5px] pl-[10px] w-full h-[50px] outline-none bg-[#eff2f7] rounded-xl'
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className='mb-[15px]'>
              <div className='flex items-center justify-between'>
                <label className='text-[15px] mb-1'>Mật khẩu</label>
                <Link
                  className='text-[15px] text-primary hover:underline'
                  href={"#"}
                >
                  Quên mật khẩu?
                </Link>
              </div>
              <div className=' relative w-full flex items-center justify-center'>
                <input
                  type={hidePassword ? "text" : "password"}
                  placeholder='Nhập mật khẩu'
                  className='text-[15px] p-[5px] pl-[10px] w-full h-[50px] outline-none bg-[#eff2f7] rounded-xl'
                  onChange={(e) => setPassword(e.target.value)}
                />

                {password && password.length > 0 && (
                  <div
                    className='absolute right-3 hover:cursor-pointer'
                    onClick={HANDLE.unHidePassword}
                  >
                    {hidePassword ? (
                      <i className='fa-solid fa-eye'></i>
                    ) : (
                      <i className='fa-solid fa-eye-slash'></i>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className='flex items-center mb-[30px]'>
              <input
                type='checkbox'
                id='remember-login'
                className='w-[15px] h-[15px] mr-1'
              />
              <label
                htmlFor='remember-login'
                className='text-[15px] cursor-pointer select-none -mb-[2px]'
              >
                Lưu mật khẩu cho lần đăng nhập sau.
              </label>
            </div>

            <button className='h-[50px] flex items-center justify-center w-full outline-primary bg-primary text-white rounded-xl text-lg hover:bg-primaryHover'>
              Tiếp tục
            </button>
          </div>
        </section>

        <div className='flex items-center mt-10 font-medium text-[15px]'>
          <p className='mr-4'>Đã có tài khoản?</p>
          <Link
            href='/login'
            className='text-primary hover:underline cursor-pointer'
          >
            Đăng nhập
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignupPage;
