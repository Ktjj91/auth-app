import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <form className="border h-96 w-full" action="">
        <div>
          <label htmlFor="email">email : </label>
          <input className=" border border-black" id="email" name="email" type="text"/>
        </div>
        <div>
          <label htmlFor="password">password : </label>
          <input className=" border border-black" id="password" name="password" type="password"/>
        </div>
        <button type="submit" className="rounded p-2 bg-green-700 text-white">Send</button>
      </form>

    </main>
  );
}
