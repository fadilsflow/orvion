"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-lg font-semibold">Hm... ada yang salah nihhh</p>
      <div className="mt-4 flex gap-4">
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Kembali
        </button>
        <Link
          href="/"
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
        >
          Beranda
        </Link>
      </div>
    </div>
  );
}
