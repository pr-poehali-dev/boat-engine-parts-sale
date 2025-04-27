import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isPopular?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  category,
  isNew = false,
  isPopular = false,
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isNew && (
          <span className="absolute top-2 left-2 bg-marine-dark text-white text-xs px-2 py-1 rounded-md">
            Новинка
          </span>
        )}
        {isPopular && (
          <span className="absolute top-2 right-2 bg-destructive text-white text-xs px-2 py-1 rounded-md">
            Хит продаж
          </span>
        )}
      </div>
      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground mb-1">{category}</div>
        <h3 className="font-medium text-lg mb-2 truncate">{name}</h3>
        <div className="text-xl font-bold text-marine-dark">
          {price.toLocaleString()} ₽
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex justify-between w-full">
          <Button variant="outline" size="sm">
            Подробнее
          </Button>
          <Button size="sm" className="bg-marine hover:bg-marine-dark">
            <ShoppingCart className="h-4 w-4 mr-2" />
            В корзину
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
