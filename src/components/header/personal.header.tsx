"use client";

import { useEffect, useRef, useState } from "react";

const Personal: React.FC = () => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [openTooltip, setOpenTooltip] = useState<boolean>(false);

  const HANDLE = {
    openToolTip: () => {
      setOpenTooltip((prev) => !prev);
    },
  };

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
        setOpenTooltip(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className=' relative flex items-center justify-center'>
      <button onClick={HANDLE.openToolTip}>
        <i className='fa-solid fa-circle-user text-4xl text-[#647081]'></i>
      </button>

      {openTooltip && (
        <div className='w-[300px] h-fit absolute top-[100%] rounded-lg p-2 shadow-md border'>
          <div className='flex items-center gap-2 p-2 hover:bg-slate-200 rounded-lg hover:cursor-pointer'>
            <i className='fa-solid fa-key text-gray-600'></i>
            <p className='text-sm font-medium text-gray-600'>Đổi mật khẩu</p>
          </div>

          <div className='flex items-center gap-2 p-2 hover:bg-slate-200 rounded-lg hover:cursor-pointer'>
            <i className='fa-solid fa-right-from-bracket text-gray-600'></i>
            <p className='text-sm font-medium text-gray-600'>Đăng xuất</p>
          </div>
        </div>
      )}
    </div>
  );
};

Personal.displayName = "Personal";

export default Personal;
