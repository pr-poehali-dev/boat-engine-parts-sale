import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Featured from "@/components/Featured";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

// Временные данные о продуктах (в реальном приложении это будет приходить с API)
const popularProducts = [
  {
    id: 1,
    name: "Гребной винт Yamaha 10-1/4 x 14",
    price: 12500,
    image: "https://images.unsplash.com/photo-1561210178-e3c0fcbb6354?q=80&w=600&auto=format&fit=crop",
    category: "Гребные винты",
    isPopular: true
  },
  {
    id: 2,
    name: "Карбюратор для Mercury 9.9-15 л.с.",
    price: 18900,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad00f?q=80&w=600&auto=format&fit=crop",
    category: "Топливная система",
    isNew: true
  },
  {
    id: 3,
    name: "Комплект прокладок Suzuki DF9.9A/15A",
    price: 4500,
    image: "https://images.unsplash.com/photo-1595079465825-f52dd5ac1801?q=80&w=600&auto=format&fit=crop",
    category: "Двигатель"
  },
  {
    id: 4,
    name: "Масляный фильтр Honda BF20-250",
    price: 1200,
    image: "https://images.unsplash.com/photo-1635784081112-2aef2afe43c9?q=80&w=600&auto=format&fit=crop",
    category: "Масла и фильтры",
    isPopular: true
  }
];

const newProducts = [
  {
    id: 5,
    name: "Свечи зажигания NGK для Yamaha F250",
    price: 950,
    image: "https://images.unsplash.com/photo-1599768793949-2da217e9f691?q=80&w=600&auto=format&fit=crop",
    category: "Электрика",
    isNew: true
  },
  {
    id: 6,
    name: "Термостат Tohatsu M25/30/40",
    price: 2800,
    image: "https://images.unsplash.com/photo-1580983218765-f663bec07b37?q=80&w=600&auto=format&fit=crop",
    category: "Система охлаждения",
    isNew: true
  },
  {
    id: 7,
    name: "Импеллер водяной помпы Mercury 75-125",
    price: 3600,
    image: "https://images.unsplash.com/photo-1562204938-2b0702089bc3?q=80&w=600&auto=format&fit=crop",
    category: "Система охлаждения",
    isNew: true
  },
  {
    id: 8,
    name: "Анод для Suzuki DF60-140",
    price: 1400,
    image: "https://images.unsplash.com/photo-1633601994729-0d1953b8bf8b?q=80&w=600&auto=format&fit=crop",
    category: "Аноды",
    isNew: true
  }
];

const brands = [
  { id: 1, name: "Yamaha", logo: "https://images.unsplash.com/photo-1636203951779-89486c0f5fa2?q=80&w=200&auto=format&fit=crop" },
  { id: 2, name: "Mercury", logo: "https://images.unsplash.com/photo-1636203951779-89486c0f5fa2?q=80&w=200&auto=format&fit=crop" },
  { id: 3, name: "Honda", logo: "https://images.unsplash.com/photo-1636203951779-89486c0f5fa2?q=80&w=200&auto=format&fit=crop" },
  { id: 4, name: "Suzuki", logo: "https://images.unsplash.com/photo-1636203951779-89486c0f5fa2?q=80&w=200&auto=format&fit=crop" },
  { id: 5, name: "Tohatsu", logo: "https://images.unsplash.com/photo-1636203951779-89486c0f5fa2?q=80&w=200&auto=format&fit=crop" },
  { id: 6, name: "Evinrude", logo: "https://images.unsplash.com/photo-1636203951779-89486c0f5fa2?q=80&w=200&auto=format&fit=crop" }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero секция */}
        <section className="bg-gradient-to-r from-marine-dark to-marine py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1560246564-e22ff170203e?q=80&w=1200&auto=format&fit=crop" 
              alt="Лодочные моторы"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container mx-auto relative z-10">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Запчасти для лодочных моторов
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Более 5000 оригинальных запчастей для моторов Yamaha, Mercury, Honda, Suzuki и других брендов
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-marine-dark hover:bg-marine-light hover:text-marine-dark text-lg px-6 py-6">
                  Перейти в каталог
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-6 py-6">
                  Подобрать по мотору
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Раздел с брендами */}
        <section className="py-10 bg-white">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Запчасти для популярных брендов</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {brands.map(brand => (
                <a key={brand.id} href={`/brand/${brand.name.toLowerCase()}`} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <img src={brand.logo} alt={brand.name} className="h-16 mx-auto object-contain mb-2" />
                  <h3 className="font-medium">{brand.name}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>
        
        {/* Особенности компании */}
        <Featured />
        
        {/* Раздел с товарами */}
        <section className="py-14 bg-white">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Наш каталог</h2>
              <Button variant="link" className="text-marine flex items-center">
                Весь каталог <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            
            <Tabs defaultValue="popular" className="mb-10">
              <TabsList className="mb-6">
                <TabsTrigger value="popular">Популярные товары</TabsTrigger>
                <TabsTrigger value="new">Новинки</TabsTrigger>
              </TabsList>
              <TabsContent value="popular">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {popularProducts.map(product => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="new">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {newProducts.map(product => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            {/* Категории товаров */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-secondary rounded-lg overflow-hidden relative h-48 group">
                <img 
                  src="https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?q=80&w=600&auto=format&fit=crop" 
                  alt="Двигатели" 
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-marine-dark/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Двигатель и трансмиссия</h3>
                  <Button variant="outline" className="w-max text-white border-white hover:bg-white/20">
                    Подробнее
                  </Button>
                </div>
              </div>
              
              <div className="bg-secondary rounded-lg overflow-hidden relative h-48 group">
                <img 
                  src="https://images.unsplash.com/photo-1544381637-ba4985e07246?q=80&w=600&auto=format&fit=crop" 
                  alt="Электрика" 
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-marine-dark/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Электрооборудование</h3>
                  <Button variant="outline" className="w-max text-white border-white hover:bg-white/20">
                    Подробнее
                  </Button>
                </div>
              </div>
              
              <div className="bg-secondary rounded-lg overflow-hidden relative h-48 group">
                <img 
                  src="https://images.unsplash.com/photo-1554254464-7046778097bf?q=80&w=600&auto=format&fit=crop" 
                  alt="Гребные винты" 
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-marine-dark/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Гребные винты</h3>
                  <Button variant="outline" className="w-max text-white border-white hover:bg-white/20">
                    Подробнее
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Преимущества */}
        <section className="py-12 bg-marine-light/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Почему выбирают нас</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-14 h-14 bg-marine/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-marine">
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Только оригинальные запчасти</h3>
                <p className="text-gray-600">Мы работаем напрямую с производителями и официальными дистрибьюторами, гарантируя подлинность всех запчастей.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-14 h-14 bg-marine/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-marine">
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Быстрая доставка по России</h3>
                <p className="text-gray-600">Отправка в день заказа. Доставка по Москве и Санкт-Петербургу - от 1 дня, по России - от 3 дней.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-14 h-14 bg-marine/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-marine">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Квалифицированные консультации</h3>
                <p className="text-gray-600">Наши специалисты помогут подобрать нужные запчасти для вашего мотора и ответят на все технические вопросы.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Блок подписки */}
        <section className="py-12 bg-marine">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Подпишитесь на наши новости</h2>
              <p className="mb-6">Получайте информацию о новых поступлениях, акциях и скидках</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-grow px-4 py-3 rounded-md text-black focus:outline-none"
                />
                <Button className="bg-marine-dark hover:bg-marine-dark/80 px-6 py-3">
                  Подписаться
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
