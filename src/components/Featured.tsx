import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Featured = () => {
  return (
    <section className="bg-marine-light/30 py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-marine-dark">
              Оригинальные запчасти для вашего лодочного мотора
            </h2>
            <p className="text-lg">
              Мы предлагаем широкий выбор качественных запчастей от ведущих производителей 
              с гарантией подлинности и быстрой доставкой по всей России.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-marine-dark hover:bg-marine text-white">
                Перейти в каталог
              </Button>
              <Button variant="outline" className="border-marine-dark text-marine-dark">
                Связаться с нами
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-marine-dark">5000+</div>
                <div className="text-sm">Наименований</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-marine-dark">24/7</div>
                <div className="text-sm">Поддержка</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-marine-dark">1-3 дня</div>
                <div className="text-sm">Доставка</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1552310168-c1ca7a580b89?q=80&w=600&auto=format&fit=crop" 
                alt="Лодочный мотор" 
                className="w-full object-cover h-[400px]"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg max-w-[200px]">
              <div className="font-bold text-marine-dark mb-1">Скидка 15%</div>
              <div className="text-sm">На все запчасти для моторов Yamaha</div>
              <Button variant="link" className="text-marine p-0 mt-2 h-auto flex items-center">
                Подробнее <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
