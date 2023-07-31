export default function Header() {
  return (
    <div className="w-screen sm:w-full flex items-center gap-x-3 px-10 py-4 border-b-2">
      <img className="h-10 w-10 sm:h-20 sm:w-20" src="/icon.png" alt="" />
      <h1 className="text-3xl sm:text-5xl font-bold uppercase">Киновтопку</h1>
    </div>
  );
}
