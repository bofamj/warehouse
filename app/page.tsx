import Image from "next/image";
import main from "./images/2383.jpg";
import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-white uppercase">
      <div className="h-screen  w-full flex items-center justify-center bg-[url('./images/2383.jpg')] bg-center bg-cover">
        <div className="   flex items-center justify-center bg-slate-400 text-white w-96 pt-9 pb-9">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
