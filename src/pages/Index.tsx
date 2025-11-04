import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const bonuses = [
    {
      title: "Бездепозитные бонусы",
      description: "Получите до 500₽ и 150 фриспинов без депозита",
      amount: "500₽",
      freespins: "150 FS",
      icon: "Gift"
    },
    {
      title: "Приветственный бонус",
      description: "200% на первый депозит + 200 фриспинов",
      amount: "+200%",
      freespins: "200 FS",
      icon: "Sparkles"
    },
    {
      title: "Кэшбэк каждую неделю",
      description: "Возврат до 20% от проигранных средств",
      amount: "20%",
      freespins: "Еженедельно",
      icon: "RotateCcw"
    }
  ];

  const casinos = [
    {
      name: "CryptoBoss Casino",
      rating: 4.9,
      bonus: "500₽ + 150 FS",
      features: ["Криптовалюты", "Мгновенный вывод", "Без верификации"],
      link: "https://cryptobosscasinopulse.com/?ref=MTQ2OTQyX3JlZmVycmFs",
      badge: "🔥 ТОП"
    },
    {
      name: "Beef Contest",
      rating: 4.8,
      bonus: "300₽ + 100 FS",
      features: ["Быстрый вывод", "Лицензия", "Русский интерфейс"],
      link: "https://beef-contest.com/start/registration?refcode=LY1K7",
      badge: "⭐ NEW"
    },
    {
      name: "Martin Contest",
      rating: 4.7,
      bonus: "400₽ + 120 FS",
      features: ["Cashback 10%", "Live игры", "Мобильная версия"],
      link: "https://martin-contest1.com/start/registration?refcode=K2YEX",
      badge: null
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/30 backdrop-blur-md sticky top-0 z-50 bg-background/95">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Diamond" className="text-white" size={20} />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Bezdep.love</span>
          </div>
          
          <nav className="hidden md:flex gap-6">
            <a href="#how-to" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">
              Как получить
            </a>
            <a href="#bonuses" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">
              Бонусы
            </a>
            <a href="#casinos" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">
              Казино
            </a>
          </nav>
          
          <button 
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        
        {menuOpen && (
          <div className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-md animate-in slide-in-from-top-2 duration-200">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <a 
                href="#how-to" 
                className="text-foreground/80 hover:text-primary transition-colors text-base font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Как получить
              </a>
              <a 
                href="#bonuses" 
                className="text-foreground/80 hover:text-primary transition-colors text-base font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Бонусы
              </a>
              <a 
                href="#casinos" 
                className="text-foreground/80 hover:text-primary transition-colors text-base font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Казино
              </a>
              <Button 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold rounded-xl mt-2"
                onClick={() => {
                  window.open('https://cryptobosscasinopulse.com/?ref=MTQ2OTQyX3JlZmVycmFs', '_blank');
                  setMenuOpen(false);
                }}
              >
                <Icon name="Rocket" className="mr-2" size={18} />
                Получить бонус
              </Button>
            </nav>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-primary/5 to-background"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
              <span className="text-accent">Бездепозитные</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">бонусы казино</span>
              <br />
              <span className="text-foreground">2025</span>
            </h1>
            <h2 className="text-lg md:text-2xl text-foreground font-semibold mb-8 leading-relaxed">
              Фриспины за регистрацию без депозита с выводом
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Получите до <span className="text-gold font-bold">500₽</span> и <span className="text-gold font-bold">150 фриспинов</span> без депозита в лучших казино с бездепозитным бонусом за регистрацию с выводом
            </p>
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold text-base py-6 rounded-2xl shadow-lg shadow-primary/30"
                onClick={() => window.open('https://cryptobosscasinopulse.com/?ref=MTQ2OTQyX3JlZmVycmFs', '_blank')}
              >
                <Icon name="Rocket" className="mr-2" size={20} />
                Получить бонус
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full border-2 border-border/50 text-foreground hover:bg-card font-semibold text-base py-6 rounded-2xl"
                onClick={() => {
                  const element = document.getElementById('how-to');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Icon name="PlayCircle" className="mr-2" size={20} />
                Как получить
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="how-to" className="py-12 md:py-16 bg-card/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Как получить бонус</h2>
            <p className="text-base text-muted-foreground">Четыре простых шага до выигрыша</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                step: 1,
                title: "Выбери казино",
                description: "Перейди по ссылке из нашего топа казино с лучшими бонусами",
                icon: "MousePointerClick"
              },
              {
                step: 2,
                title: "Зарегистрируйся",
                description: "Укажи email и создай пароль. Регистрация занимает менее 1 минуты",
                icon: "UserPlus"
              },
              {
                step: 3,
                title: "Получи бонус",
                description: "Бонус автоматически зачислится на твой счет сразу после регистрации",
                icon: "Gift"
              },
              {
                step: 4,
                title: "Начни играть",
                description: "Используй бонус и фриспины, выигрывай и выводи деньги",
                icon: "Rocket"
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className="border-border/30 bg-card/90 backdrop-blur-sm hover:border-primary/50 transition-all"
              >
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent via-secondary to-primary rounded-2xl flex items-center justify-center text-xl font-bold text-white">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon name={item.icon as any} className="text-primary" size={20} />
                      <h3 className="text-lg font-bold">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold text-base px-8 py-6 rounded-2xl shadow-lg shadow-primary/30"
              onClick={() => window.open('https://cryptobosscasinopulse.com/?ref=MTQ2OTQyX3JlZmVycmFs', '_blank')}
            >
              <Icon name="Zap" className="mr-2" size={20} />
              Получить бонус сейчас
            </Button>
          </div>
        </div>
      </section>

      <section id="bonuses" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Виды бонусов</h2>
            <p className="text-base text-muted-foreground">Выбери свой бонус и начни выигрывать</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {bonuses.map((bonus, index) => (
              <Card 
                key={index} 
                className="border-border/30 bg-card/90 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all cursor-pointer"
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent via-secondary to-primary rounded-xl flex items-center justify-center mb-3">
                    <Icon name={bonus.icon as any} className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-xl">{bonus.title}</CardTitle>
                  <CardDescription className="text-sm">{bonus.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex gap-2 mb-3">
                    <Badge className="bg-accent/20 text-accent border-accent/50 text-sm px-2 py-1">
                      {bonus.amount}
                    </Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/50 text-sm px-2 py-1">
                      {bonus.freespins}
                    </Badge>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold rounded-xl">
                    Получить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="casinos" className="py-12 md:py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Топ казино с бонусами</h2>
            <p className="text-base text-muted-foreground">Проверенные казино с лучшими условиями</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {casinos.map((casino, index) => (
              <Card 
                key={index} 
                className="border-border/30 bg-card/90 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all"
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent via-secondary to-primary rounded-xl flex items-center justify-center text-xl font-bold text-white">
                      #{index + 1}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-lg font-bold">{casino.name}</h3>
                        {casino.badge && (
                          <Badge className="bg-accent/20 text-accent border-accent/50 text-xs">
                            {casino.badge}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Icon 
                              key={i}
                              name="Star" 
                              size={14}
                              className={i < Math.floor(casino.rating) ? "fill-gold text-gold" : "text-muted-foreground"}
                            />
                          ))}
                        </div>
                        <span className="text-gold font-semibold text-sm">{casino.rating}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {casino.features.map((feature, i) => (
                          <Badge 
                            key={i}
                            variant="outline"
                            className="border-primary/30 text-primary text-xs px-2 py-0.5"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Gift" className="text-accent" size={16} />
                        <span className="text-muted-foreground">Бонус:</span>
                        <span className="font-bold text-gold">{casino.bonus}</span>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold px-6 py-5 rounded-xl shadow-lg shadow-primary/20"
                        onClick={() => window.open(casino.link, '_blank')}
                      >
                        Играть
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/30">
            <CardContent className="p-6 md:p-10 text-center">
              <Icon name="Zap" className="mx-auto mb-4 text-primary" size={48} />
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Начни выигрывать прямо сейчас!
              </h2>
              <p className="text-base text-muted-foreground mb-6">
                Регистрируйся в топовом казино и получи щедрый бонус
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white font-bold text-base px-8 py-6 rounded-2xl shadow-lg shadow-accent/30"
                onClick={() => window.open('https://cryptobosscasinopulse.com/?ref=MTQ2OTQyX3JlZmVycmFs', '_blank')}
              >
                <Icon name="Trophy" className="mr-2" size={20} />
                Получить 500₽ + 150 FS
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border/30 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="mb-1 text-sm">© 2025 Bezdep.love. Все права защищены.</p>
          <p className="text-xs">Играйте ответственно. 18+</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;