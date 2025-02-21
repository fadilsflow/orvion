import { buttonVariants } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  const phoneNumber = "6289678750281"; // Define the phone number

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Hubungi Kami</h1>
      <p className="text-center mb-5">
        Kami siap membantu Anda! Silakan hubungi kami melalui Whatsapp di bawah
        ini
      </p>

      <div className="flex flex-col items-center space-y-4">
        <Link
          href={`https://wa.me/${phoneNumber}?text=Bang%20mau%20order`}
          target="_blank"
          className={buttonVariants({
            variant: "outline",
            className:
              "flex items-center gap-2 border-green-500 hover:bg-green-900 bg-green-800 text-white py-2 px-4 rounded-md transition duration-200",
          })}
        >
          <MessageCircle className="w-4 h-4" />
          Whatsapp
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;
