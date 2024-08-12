import { LayoutDashboard, Package, ShoppingBag, UserRound } from 'lucide-react';

export const Menu = () => {
  return (
    <div className="flex flex-col items-center gap-14 h-full w-20 border-solid border-2 border-sky-500 rounded-lg">
      <img src="#" alt="Logo da Lene`s Cosméticos" />
      <div className="flex flex-col gap-8">
        <LayoutDashboard className="cursor-pointer" />
        <UserRound className="cursor-pointer" />
        <ShoppingBag className="cursor-pointer" />
        <Package className="cursor-pointer" />
      </div>
    </div>
  );
};
