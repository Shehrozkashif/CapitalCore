// Header Component (header.js)
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="bg-gray-100 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">CapitalCore</h1>
        <div>
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
