import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
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
      name: "Golden Star",
      rating: 4.8,
      bonus: "300₽ + 100 FS",
      features: ["Быстрый вывод", "Лицензия", "Русский интерфейс"],
      link: "#",
      badge: "⭐ NEW"
    },
    {
      name: "Fresh Casino",
      rating: 4.7,
      bonus: "400₽ + 120 FS",
      features: ["Cashback 10%", "Live игры", "Мобильная версия"],
      link: "#",
      badge: null
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Diamond" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold">CasinoHub</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#bonuses" className="text-foreground/80 hover:text-primary transition-colors">
              Бонусы
            </a>
            <a href="#casinos" className="text-foreground/80 hover:text-primary transition-colors">
              Казино
            </a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow">
            Регистрация
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent/20 text-accent border-accent/50 text-lg px-4 py-2">
              🎰 Лучшие предложения 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="text-accent">Бездепозитные</span>
              <br />
              <span className="text-primary">бонусы казино</span>
              <br />
              <span className="text-foreground">2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Получите до <span className="text-gold font-bold">500₽</span> и <span className="text-gold font-bold">150 фриспинов</span> без депозита в лучших казино с бездепозитным бонусом за регистрацию с выводом
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-bold text-lg px-8 py-6 glow"
                onClick={() => window.open('https://cryptobosscasinopulse.com/?ref=MTQ2OTQyX3JlZmVycmFs', '_blank')}
              >
                <Icon name="Rocket" className="mr-2" size={24} />
                Получить бонус
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-lg px-8 py-6"
              >
                <Icon name="PlayCircle" className="mr-2" size={24} />
                Как получить
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="bonuses" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Виды бонусов</h2>
            <p className="text-xl text-muted-foreground">Выбери свой бонус и начни выигрывать</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {bonuses.map((bonus, index) => (
              <Card 
                key={index} 
                className="hover-scale border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden group cursor-pointer"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={bonus.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{bonus.title}</CardTitle>
                  <CardDescription className="text-base">{bonus.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3 mb-4">
                    <Badge className="bg-accent/20 text-accent border-accent/50 text-lg px-3 py-1">
                      {bonus.amount}
                    </Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/50 text-lg px-3 py-1">
                      {bonus.freespins}
                    </Badge>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Получить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="casinos" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Топ казино с бонусами</h2>
            <p className="text-xl text-muted-foreground">Проверенные казино с лучшими условиями</p>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            {casinos.map((casino, index) => (
              <Card 
                key={index} 
                className="hover-scale border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center text-3xl font-bold text-white">
                      #{index + 1}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold">{casino.name}</h3>
                        {casino.badge && (
                          <Badge className="bg-accent/20 text-accent border-accent/50">
                            {casino.badge}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Icon 
                              key={i}
                              name="Star" 
                              size={16}
                              className={i < Math.floor(casino.rating) ? "fill-gold text-gold" : "text-muted-foreground"}
                            />
                          ))}
                        </div>
                        <span className="text-gold font-semibold">{casino.rating}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {casino.features.map((feature, i) => (
                          <Badge 
                            key={i}
                            variant="outline"
                            className="border-primary/50 text-primary"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-2 text-lg">
                        <Icon name="Gift" className="text-accent" size={20} />
                        <span className="text-muted-foreground">Бонус:</span>
                        <span className="font-bold text-gold">{casino.bonus}</span>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0 w-full md:w-auto">
                      <Button 
                        size="lg"
                        className="w-full md:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-bold px-8 py-6 glow text-lg"
                        onClick={() => window.open(casino.link, '_blank')}
                      >
                        Играть
                        <Icon name="ArrowRight" className="ml-2" size={20} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
            <CardContent className="p-8 md:p-12 text-center">
              <Icon name="Zap" className="mx-auto mb-6 text-primary" size={64} />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Начни выигрывать прямо сейчас!
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Регистрируйся в топовом казино и получи щедрый бонус
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground font-bold text-lg px-12 py-6 glow-gold"
                onClick={() => window.open('https://cryptobosscasinopulse.com/?ref=MTQ2OTQyX3JlZmVycmFs', '_blank')}
              >
                <Icon name="Trophy" className="mr-2" size={24} />
                Получить 500₽ + 150 FS
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="mb-2">© 2025 CasinoHub. Все права защищены.</p>
          <p className="text-sm">Играйте ответственно. 18+</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
