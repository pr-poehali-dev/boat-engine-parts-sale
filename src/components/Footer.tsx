import React from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle // Заменил Telegram на MessageCircle
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-marine-dark text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">МореМотор</h3>
            <p className="text-marine-light/80 mb-4">
              Специализированный магазин запчастей для лодочных моторов всех популярных марок и моделей.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-marine-light">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-marine-light">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-marine-light">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-marine-light">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/engines" className="text-marine-light/80 hover:text-white">
                  Запчасти для моторов
                </Link>
              </li>
              <li>
                <Link to="/category/propellers" className="text-marine-light/80 hover:text-white">
                  Гребные винты
                </Link>
              </li>
              <li>
                <Link to="/category/electrical" className="text-marine-light/80 hover:text-white">
                  Электрика
                </Link>
              </li>
              <li>
                <Link to="/category/fuel" className="text-marine-light/80 hover:text-white">
                  Топливная система
                </Link>
              </li>
              <li>
                <Link to="/category/oil" className="text-marine-light/80 hover:text-white">
                  Масла и смазки
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-marine-light/80 hover:text-white">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-marine-light/80 hover:text-white">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-marine-light/80 hover:text-white">
                  Гарантия
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-marine-light/80 hover:text-white">
                  Возврат товара
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-marine-light/80 hover:text-white">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 shrink-0 text-marine-light" />
                <span>г. Санкт-Петербург, ул. Морская, 24</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-marine-light" />
                <a href="tel:+78001234567" className="hover:text-marine-light">8 (800) 123-45-67</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-marine-light" />
                <a href="mailto:info@moremotor.ru" className="hover:text-marine-light">info@moremotor.ru</a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 shrink-0 text-marine-light" />
                <span>Пн-Пт: 9:00 - 20:00<br />Сб-Вс: 10:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-marine/30 pt-6 mt-6 text-center text-sm text-marine-light/70">
          <p>© {new Date().getFullYear()} МореМотор. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
