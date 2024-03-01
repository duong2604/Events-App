import { Link } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="flex justify-between items-center wrapper">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently logo"
          />
        </Link>
      </div>
    </header>
  );
};
export default Header;
