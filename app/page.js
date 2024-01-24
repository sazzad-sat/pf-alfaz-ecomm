import SubHeader from "@/app/_components/sub_header";
import Header from "@/app/_components/header";
import MainContent from "@/app/_components/main_content";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-50 shadow-lg">
        <SubHeader/>
        <Header/>
      </div>
      <main className="flex flex-col overflow-x-hidden">
        <MainContent/>
      </main>
    </>
  );
}
