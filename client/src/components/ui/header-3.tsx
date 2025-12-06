'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { createPortal } from 'react-dom';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { LucideIcon } from 'lucide-react';
import {
	CodeIcon,
	GlobeIcon,
	LayersIcon,
	UserPlusIcon,
	Users,
	Star,
	FileText,
	Shield,
	RotateCcw,
	Handshake,
	Leaf,
	HelpCircle,
	BarChart,
	PlugIcon,
	Book,
	Trophy,
} from 'lucide-react';

type LinkItem = {
	title: string;
	href: string;
	icon: LucideIcon;
	description?: string;
};

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn('sticky top-0 z-50 w-full border-b border-transparent', {
				'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg':
					scrolled,
			})}
		>
			<nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
				<div className="flex items-center gap-5">
					<a href="#" className="hover:bg-accent rounded-md p-2 transition-colors">

						{/* ------ TROCA DO ÍCONO POR IMAGEM ------ */}
						<img src="/logo.png" alt="Logo" className="h-4 w-auto" />

					</a>
					<NavigationMenu className="hidden md:flex">
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent">Sobre</NavigationMenuTrigger>
								<NavigationMenuContent className="bg-background p-1 pr-1.5">
									<ul className="bg-popover grid w-lg grid-cols-2 gap-2 rounded-md border p-2 shadow">
										{productLinks.map((item, i) => (
											<li key={i}>
												<ListItem {...item} />
											</li>
										))}
									</ul>
									<div className="p-2">
										<p className="text-muted-foreground text-sm">
											Interessado?{' '}
											<a href="#" className="text-foreground font-medium hover:underline">
												Agende uma demo
											</a>
										</p>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent">Equipe</NavigationMenuTrigger>
								<NavigationMenuContent className="bg-background p-1 pr-1.5 pb-1.5">
									<div className="grid w-lg grid-cols-2 gap-2">
										<ul className="bg-popover space-y-2 rounded-md border p-2 shadow">
											{companyLinks.map((item, i) => (
												<li key={i}>
													<ListItem {...item} />
												</li>
											))}
										</ul>
										<ul className="space-y-2 p-3">
											{companyLinks2.map((item, i) => (
												<li key={i}>
												<NavigationMenuLink
													href={item.href}
													className="flex p-2 hover:bg-accent flex-row rounded-md items-center gap-x-2 transition-colors"
													>
														<item.icon className="text-foreground size-4" />
														<span className="font-medium">{item.title}</span>
													</NavigationMenuLink>
												</li>
											))}
										</ul>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
						<NavigationMenuLink className="px-4" asChild>
							<a href="#" className="hover:bg-accent rounded-md p-2 transition-colors">
								Recursos
							</a>
						</NavigationMenuLink>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			<div className="hidden items-center gap-2 md:flex">
				<Button asChild className="bg-[#5865F2] hover:bg-[#4752C4] text-white border-none">
					<a href="https://discord.gg/g8Tf94V2Cu" target="_blank" rel="noopener noreferrer">
						Entrar no Discord
					</a>
				</Button>

			</div>
				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className="md:hidden"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
				>
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>

			
			{/* ---------------- MOBILE MENU ---------------- */}
			<MobileMenu open={open} className="flex flex-col justify-between gap-2 overflow-y-auto">
				
				<div className="flex w-full flex-col gap-y-2">
					<span className="text-sm">Sobre</span>
					{productLinks.map((link) => (
						<ListItem key={link.title} {...link} mobile />
					))}

					<span className="text-sm mt-3">Equipe</span>
					{companyLinks.map((link) => (
						<ListItem key={link.title} {...link} mobile />
					))}

					{companyLinks2.map((link) => (
						<ListItem key={link.title} {...link} mobile />
					))}
				</div>

				<div className="flex flex-col gap-2 mt-auto">
					<Button className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white border-none">
						Entrar no Discord
					</Button>
				</div>

			</MobileMenu>
		</header>
	);
}

type MobileMenuProps = React.ComponentProps<'div'> & {
	open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div
			id="mobile-menu"
			className={cn(
				'bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg',
				'fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden',
			)}
		>
			<div
				data-slot={open ? 'open' : 'closed'}
				className={cn(
					'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
					'size-full p-4',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
}

function ListItem({
	title,
	description,
	icon: Icon,
	className,
	href,
	mobile = false,
	...props
}: React.ComponentProps<typeof NavigationMenuLink> & LinkItem & { mobile?: boolean }) {

	// ---------------- MOBILE VERSION ----------------
	if (mobile) {
		return (
			<a
				href={href}
				className={cn(
					'flex flex-row gap-2 p-2 rounded-md hover:bg-accent transition-colors',
					className
				)}
			>
				<div className="bg-background/40 flex size-12 items-center justify-center rounded-md border shadow-sm">
					<Icon className="text-foreground size-5" />
				</div>
				<div className="flex flex-col items-start justify-center">
					<span className="font-medium">{title}</span>
					{description && (
						<span className="text-muted-foreground text-xs">{description}</span>
					)}
				</div>
			</a>
		);
	}

	// ---------------- DESKTOP VERSION ORIGINAL ----------------
	return (
		<NavigationMenuLink
			className={cn(
				'w-full flex flex-row gap-x-2 data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-sm p-2',
				className,
			)}
			{...props}
			asChild
		>
			<a href={href}>
				<div className="bg-background/40 flex aspect-square size-12 items-center justify-center rounded-md border shadow-sm">
					<Icon className="text-foreground size-5" />
				</div>
				<div className="flex flex-col items-start justify-center">
					<span className="font-medium">{title}</span>
					<span className="text-muted-foreground text-xs">{description}</span>
				</div>
			</a>
		</NavigationMenuLink>
	);
}

const productLinks: LinkItem[] = [
	{
		title: 'Projetos Open Source',
		href: '#projetos',
		description: 'Acesse projetos e sistemas completos',
		icon: CodeIcon,
	},
	{
		title: 'Tutoriais & Aulas',
		href: '#tutoriais',
		description: 'Aprenda com conteúdo de qualidade',
		icon: Book,
	},
	{
		title: 'Desafios',
		href: '#desafios',
		description: 'Participe de competições e desafios',
		icon: Trophy,
	},
	{
		title: 'Mentoria',
		href: '#mentoria',
		description: 'Code reviews e pair-programming',
		icon: Users,
	},
	{
		title: 'Oportunidades',
		href: '#oportunidades',
		description: 'Vagas exclusivas e freelas',
		icon: Star,
	},
	{
		title: 'Comunidade',
		href: '#comunidade',
		description: 'Conecte-se com outros devs',
		icon: Users,
	},
];

const companyLinks: LinkItem[] = [
	{
		title: 'Sobre a Team Programming',
		href: '#sobre',
		description: 'Conheça nossa história e missão',
		icon: Users,
	},
	{
		title: 'Equipe',
		href: '#equipe',
		description: 'Conheça os administradores',
		icon: Users,
	},
	{
		title: 'Parceiros',
		href: '#parceiros',
		description: 'Colaboradores e influenciadores',
		icon: Handshake,
	},
];

const companyLinks2: LinkItem[] = [];

function useScroll(threshold: number) {
	const [scrolled, setScrolled] = React.useState(false);

	const onScroll = React.useCallback(() => {
		setScrolled(window.scrollY > threshold);
	}, [threshold]);

	React.useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [onScroll]);

	React.useEffect(() => {
		onScroll();
	}, [onScroll]);

	return scrolled;
}

