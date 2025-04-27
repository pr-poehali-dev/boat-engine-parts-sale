import React from "react";
import { Link } from "react-router-dom";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { Search, ShoppingCart, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-marine-dark text-white py-3 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu className="h-6 w-6" />
            </Button>
            <Link to="/" className="text-2xl font-bold text-white">МореМотор</Link>
          </div>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="text-white hover:text-marine-light px-4 py-2">
                  Главная
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-marine-light bg-transparent hover:bg-marine-dark/50">
                  Каталог
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] bg-white text-foreground">
                    <div className="grid grid-cols-2 gap-3">
                      <Link to="/category/engines" className="group hover:bg-secondary rounded-md p-3">
                        <h3 className="font-medium">Моторы</h3>
                        <p className="text-sm text-muted-foreground">Запчасти для различных типов моторов</p>
                      </Link>
                      <Link to="/category/propellers" className="group hover:bg-secondary rounded-md p-3">
                        <h3 className="font-medium">Гребные винты</h3>
                        <p className="text-sm text-muted-foreground">Разные размеры и материалы</p>
                      </Link>
                      <Link to="/category/electrical" className="group hover:bg-secondary rounded-md p-3">
                        <h3 className="font-medium">Электрика</h3>
                        <p className="text-sm text-muted-foreground">Катушки, свечи, проводка</p>
                      </Link>
                      <Link to="/category/fuel" className="group hover:bg-secondary rounded-md p-3">
                        <h3 className="font-medium">Топливная система</h3>
                        <p className="text-sm text-muted-foreground">Карбюраторы, фильтры, шланги</p>
                      </Link>
                    </div>
                    <div className="pt-3 border-t">
                      <Link to="/catalog" className="text-primary hover:underline">
                        Все категории →
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/delivery" className="text-white hover:text-marine-light px-4 py-2">
                  Доставка
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/contacts" className="text-white hover:text-marine-light px-4 py-2">
                  Контакты
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-white">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-destructive text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
