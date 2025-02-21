import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8">
      <div className="container mx-auto text-center text-gray-400">
        <p>2025 Orvion. All Rights Reserved.</p>
        <p>
          Build your website with{" "}
          <Link
            href="https://webtron.biz.id"
            target="_blank"
            className="text-blue-500"
          >
            webtron
          </Link>
        </p>
      </div>
    </footer>
  );
}
