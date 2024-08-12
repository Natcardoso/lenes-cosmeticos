import { LayoutDashboard, Package, ShoppingBag, UserRound } from 'lucide-react';
import Logo from '../../assets/logo.svg';

export const Menu = () => {
  return (
    <div className="flex flex-col items-center gap-14 h-full w-20 bg-white rounded-lg p-2">
      <img src={Logo} alt="Logo da Lene`s Cosméticos" className="" />
      <div className="flex items-center flex-col gap-8">
        <div className="bg-neutral-900 p-4 rounded-lg">
          <LayoutDashboard className="cursor-pointer text-white" />
        </div>
        <UserRound className="cursor-pointer" />
        <ShoppingBag className="cursor-pointer" />
        <Package className="cursor-pointer" />
      </div>
    </div>
  );
};
