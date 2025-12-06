import React, { useState, useEffect } from 'react';
import { Header } from "@/components/ui/header-3";
import { Button } from "@/components/ui/button";
import { OrbitalLoader } from "@/components/OrbitalLoader";
import { MemberModal, type Member } from "@/components/MemberModal";
import { ArrowRight, Code, Users, Zap, Terminal, Cpu, Globe, Check, MessageSquare, Youtube, Server, Smartphone, Shield, BookOpen, Star, Award, BarChart } from "lucide-react";
import TechCarousel from "@/components/TechCarousel";

const TEAM_MEMBERS: Member[] = [
  {
    id: '1',
    name: 'Maike Developer',
    role: 'Gestor・Owner',
    bio: 'Fundador e gestor da Team Programming. Apaixonado por tecnologia e comunidade.',
    tags: ['Node.js', 'React', 'Discord.js', 'Liderança', "Pawn"],
    status: 'online',
    avatar: '/images/team/maike.jpg',
  },
  {
    id: '2',
    name: 'Fenix Gaming',
    role: 'Diretor Executivo',
    bio: 'Diretor executivo focado em crescimento e parcerias estratégicas.',
    tags: ['Estratégia', 'Parcerias', 'Comunidade'],
    status: 'online',
    avatar: '/images/team/fenix.jpg',
  },
  {
    id: '3',
    name: 'Java.Java',
    role: 'Diretor Executivo',
    bio: 'Especialista em arquitetura de sistemas e boas práticas de desenvolvimento.',
    tags: ['Java', 'Arquitetura', 'Backend'],
    status: 'online',
    avatar: '/images/team/java.jpg',
  },
  {
    id: '4',
    name: 'EasyOFC',
    role: 'Diretor Executivo',
    bio: 'Focado em inovação e desenvolvimento de novas ferramentas para a comunidade.',
    tags: ['Inovação', 'Ferramentas', 'DevOps'],
    status: 'online',
    avatar: '/images/team/easyoftc.jpg',
  },
  {
    id: '5',
    name: 'Eriton',
    role: 'Diretor Executivo',
    bio: 'Especialista em segurança e infraestrutura de sistemas.',
    tags: ['Segurança', 'Infraestrutura', 'Cloud'],
    status: 'online',
    avatar: '/images/team/eriton.jpg',
  },
  {
    id: '6',
    name: 'Gabriel Ramos',
    role: 'Administrador',
    bio: 'Administrador responsável pela moderação e suporte da comunidade.',
    tags: ['Moderação', 'Suporte', 'Comunidade'],
    status: 'online',
    avatar: '/images/team/gabriel.jpg',
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Simular carregamento da página
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Scroll suave para seções
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Abrir modal de perfil
  const handleOpenMemberModal = (member: Member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  // Fechar modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMember(null), 300);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center z-[9999]">
        <OrbitalLoader message="Carregando..." messagePlacement="bottom" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  Conectando devs, projetos e oportunidades
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-primary">
                  Team Programming <br/>
                  <span className="text-foreground/80 font-light">Comunidade de Devs</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                  A comunidade mais completa de desenvolvimento do Brasil. Do frontend ao backend, do mobile ao cloud. Aprenda, compartilhe e evolua com os melhores devs brasileiros.
                </p>
                
                <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground bg-muted/50 p-3 rounded-md w-fit border border-border/50 overflow-x-auto">
                   <span className="text-primary">$</span> npm install @team-programming/comunidade
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                  href="https://discord.gg/g8Tf94V2Cu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 px-8 text-base bg-[#5865F2] hover:bg-[#4752C4] text-white border-none inline-flex items-center justify-center rounded-md"
                >
                  <MessageSquare className="mr-2 h-5 w-5" /> Entrar no Discord
                </a>

                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="h-12 px-8 text-base"
                    onClick={() => scrollToSection('projetos')}
                  >
                    <Youtube className="mr-2 h-5 w-5 text-red-600" /> Explorar Projetos
                  </Button>
                </div>
                
                <div className="pt-8 flex items-center gap-8 text-muted-foreground">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                         <img src="/images/a.jpg" alt="User" className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-medium">
                    <span className="text-foreground font-bold">10.000+</span> membros apaixonados
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                  <img 
                    src="/images/hero-community.jpg" 
                    alt="Modern Developer Community" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-24 bg-muted/10 border-y border-border/50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre a Team Programming</h2>
              <p className="text-lg text-muted-foreground">Uma comunidade criada por desenvolvedores, para desenvolvedores.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4 p-8 bg-background border border-border/50 rounded-sm hover:border-primary/40 transition-all hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm text-primary mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Nossa Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Criar um espaço completo para qualquer desenvolvedor — iniciante ou avançado — evoluir, criar projetos, se conectar e transformar ideias em realidade.
                </p>
              </div>
              
              <div className="space-y-4 p-8 bg-background border border-border/50 rounded-sm hover:border-primary/40 transition-all hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm text-primary mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Quem Somos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Somos uma comunidade com mais de 10.000 membros apaixonados por tecnologia, programação, automação, bots, SA-MP, web, Discord.js e muito mais.
                </p>
              </div>
              
              <div className="space-y-4 p-8 bg-background border border-border/50 rounded-sm hover:border-primary/40 transition-all hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm text-primary mb-4">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">O Que Fazemos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Projetos open source, sistemas prontos, tutoriais, desafios, lives, mentoria e um ambiente colaborativo para crescer profissionalmente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Carousel Section */}
        <TechCarousel />

        {/* Tech Stack Section */}
        <section className="py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  Tecnologias <span className="text-primary">Full Stack</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Suporte completo para linguagens e frameworks modernos. Quer começar na programação ou precisa de ajuda com códigos? Oferecemos suporte gratuito 24/7, orientação e conexão com especialistas.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                  {["React", "Node.js", "Python", "Java", "TypeScript", "C++", "Lua", "PHP", "SQL", "Docker", "AWS Cloud", "Go", "Rust", "Kotlin", "SA-MP", "Flutter"].map((tech) => (
                    <div key={tech} className="flex items-center gap-2 p-3 bg-muted/30 rounded-sm border border-border/30 hover:border-primary/30 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                      <span className="font-medium text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-sm bg-muted relative group border border-border/50">
                   <img 
                    src="/images/feature-collaboration.jpg" 
                    alt="Coding Environment" 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                  
                  {/* Floating Cards */}
                  <div className="absolute bottom-8 left-8 right-8 space-y-3">
                    <div className="bg-background/90 backdrop-blur-md p-4 rounded-sm border border-border/50 shadow-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-sm">Suporte 24/7</span>
                        <span className="text-xs text-green-500 flex items-center gap-1">● Online</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Canais dedicados por tecnologia, respostas rápidas e debugging colaborativo.</p>
                    </div>
                    
                    <div className="bg-background/90 backdrop-blur-md p-4 rounded-sm border border-border/50 shadow-lg translate-x-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-sm">Networking Real</span>
                        <Users className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground">Forme equipes, participe de projetos colaborativos e construa sua rede.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projetos" className="py-24 bg-muted/10 border-y border-border/50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos & Bots</h2>
              <p className="text-lg text-muted-foreground">Alguns projetos destacados mantidos pela comunidade</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "JBL 3D - Sistema de Áudio",
                  desc: "Sistema de áudio 3D, proximidade, streaming por URL e controle pelo dono da JBL.",
                  stack: "Node.js • SA-MP • Lua"
                },
                {
                  title: "Bot Discord - Painel Full Stack",
                  desc: "Bot modular com sistema de tickets, painel web e integração com lowdb.",
                  stack: "Node.js • discord.js • Express"
                },
                {
                  title: "Sistema de Tickets Avançado",
                  desc: "Tickets por select menu, categorias configuráveis e persistência de dados.",
                  stack: "discord.js • lowdb • Web UI"
                },
                {
                  title: "Plataforma de Desafios",
                  desc: "Desafios e rankings para membros resolverem problemas e evoluírem no GitHub.",
                  stack: "React • Firebase • GitHub"
                },
                {
                  title: "Academia de Códigos",
                  desc: "Sistema de estudos com trilhas, provas, certificados e progresso salvo.",
                  stack: "Node.js • MongoDB • Next.js"
                },
                {
                  title: "Marketplace de Recursos",
                  desc: "Plataforma para membros venderem e baixarem bots, sites, mapas e sistemas.",
                  stack: "React • Stripe • Express"
                }
              ].map((project, i) => (
                <div key={i} className="group p-6 bg-background border border-border/50 rounded-sm hover:border-primary/50 transition-all">
                  <div className="h-full flex flex-col">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.desc}</p>
                    <div className="pt-4 border-t border-border/30 mt-auto">
                      <span className="text-xs font-mono text-primary/80">{project.stack}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="equipe" className="py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Equipe / Administração</h2>
              <p className="text-lg text-muted-foreground">Pessoas que mantêm a comunidade viva</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {TEAM_MEMBERS.map((member) => (
                <button
                  key={member.id}
                  onClick={() => handleOpenMemberModal(member)}
                  className="text-center p-4 border border-border/30 rounded-sm bg-muted/5 hover:bg-muted/20 hover:border-primary/40 transition-all group cursor-pointer"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-muted mb-3 overflow-hidden border-2 border-background group-hover:border-primary/40 transition-colors">
                    <img src={member.avatar || "/images/avatar-placeholder.jpg"} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-bold text-sm line-clamp-2">{member.name}</h4>
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-1">{member.role}</p>
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500" title="Online"></span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">1967</div>
                <div className="text-primary-foreground/80 font-medium text-sm md:text-base">Desenvolvedores Ativos</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">989</div>
                <div className="text-primary-foreground/80 font-medium text-sm md:text-base">Projetos Open Source</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">45</div>
                <div className="text-primary-foreground/80 font-medium text-sm md:text-base">Tutoriais/Aulas</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                <div className="text-primary-foreground/80 font-medium text-sm md:text-base">Suporte Online</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section id="parceiros" className="py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Parceiros & Colaboradores</h2>
              <p className="text-lg text-muted-foreground">Servidores e influenciadores que colaboram com nossa comunidade</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col md:flex-row gap-6 p-6 border border-border/50 rounded-sm bg-muted/5 hover:bg-muted/10 transition-colors">
                <div className="w-full md:w-1/3 aspect-video bg-black rounded-sm flex items-center justify-center text-white font-bold text-sm md:text-base">
                  Nil Plays
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-lg md:text-xl font-bold mb-2">Nil Plays</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Influenciador oficial da rede Team Programming, reconhecido por seus vídeos de alta qualidade e profissionalismo.
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <Button variant="outline" size="sm" className="h-8 text-xs">Canal do Youtube</Button>
                   <a
                  href="https://discord.gg/seu-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 text-xs border border-border/50 rounded-md inline-flex items-center justify-center px-3 text-muted-foreground hover:bg-muted/10 transition-colors"
                >
                  Discord
                </a>

                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 p-6 border border-border/50 rounded-sm bg-muted/5 hover:bg-muted/10 transition-colors">
                <div className="w-full md:w-1/3 aspect-video bg-black rounded-sm flex items-center justify-center text-white font-bold text-sm md:text-base">
                  Sudeste RP
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-lg md:text-xl font-bold mb-2">Sudeste RolePlay - Full Mobile</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Viva o melhor do roleplay no celular! Sistemas avançados, jogabilidade fluida e uma comunidade ativa.
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <Button variant="outline" size="sm" className="h-8 text-xs">IP de Conexão</Button>
                    <Button variant="outline" size="sm" asChild className="h-8 text-xs">
                    <a href="https://discord.gg/g8Tf94V2Cu" target="_blank" rel="noopener noreferrer">
                      Discord
                    </a>
                  </Button>

                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-muted-foreground">Quer ser nosso parceiro? <a href="#" className="text-primary hover:underline">Entre em contato conosco</a></p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-muted/10 relative overflow-hidden border-t border-border/50">
          <div className="container px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Pronto para Evoluir?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[700px] mx-auto mb-10">
              Junte-se a mais de 12.000 desenvolvedores que estão evoluindo suas carreiras com a Team Programming. É gratuito e sempre será.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/*https://discord.gg/g8Tf94V2Cu*/}
              <Button
              size="lg"
              asChild
              className="h-14 px-8 text-lg font-semibold bg-[#5865F2] hover:bg-[#4752C4] text-white border-none"
            >
              <a
                href="https://discord.gg/g8Tf94V2Cu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="mr-2 h-5 w-5" /> Entrar na Comunidade Agora
              </a>
            </Button>

            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-12 border-t border-border bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="h-6 w-6 text-primary" />
                  <span className="font-bold text-xl">Team Programming</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  A maior comunidade de programadores do Brasil. Programar é criar o futuro.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Recursos</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#projetos" onClick={(e) => { e.preventDefault(); scrollToSection('projetos'); }} className="hover:text-foreground transition-colors">Projetos Open Source</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Documentação</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Tutoriais</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Desafios</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Comunidade</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="https://discord.gg/g8Tf94V2Cu" className="hover:text-foreground transition-colors">Servidor Discord</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Canal do YouTube</a></li>
                  <li><a href="#equipe" onClick={(e) => { e.preventDefault(); scrollToSection('equipe'); }} className="hover:text-foreground transition-colors">Equipe</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Eventos</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Contato</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Suporte</a></li>
                  <li><a href="#parceiros" onClick={(e) => { e.preventDefault(); scrollToSection('parceiros'); }} className="hover:text-foreground transition-colors">Parcerias</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Anunciar</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a></li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © 2025 Team Programming — Todos os direitos reservados.
              </p>
              <div className="flex gap-4">
                <a href="https://discord.gg/g8Tf94V2Cu" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="sr-only">Discord</span>
                  <MessageSquare className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="sr-only">YouTube</span>
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Member Modal */}
      <MemberModal member={selectedMember} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
