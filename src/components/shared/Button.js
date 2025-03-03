export default function Button(Children) {
  return (
    <button className="px-6 py-2 text-nowrap bg-blue-500 text-base text-white font-semibold rounded-lg ">
      {Children}
    </button>
  );
}
