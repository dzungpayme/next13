import Header from "@/components/header";
import ProfilePage from "@/components/profile";

export default function Home() {
  return (
    <>
      <Header />
      <main className='pt-[55px] mx-auto'>
        <ProfilePage />
      </main>
    </>
  );
}
