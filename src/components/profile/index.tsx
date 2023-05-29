const ProfilePage: React.FC = () => {
  return (
    <section>
      <div className='flex items-center justify-between'>
        <h2 className=' font-medium'>Thông tin tài khoản</h2>
        <button className='font-medium text-primary'>Đổi mật khẩu</button>
      </div>
    </section>
  );
};

ProfilePage.displayName = "ProfilePage";
export default ProfilePage;
