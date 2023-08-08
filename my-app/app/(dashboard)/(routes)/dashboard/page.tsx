"use client"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs'; 
import { LayoutDashboard, TerminalSquare, Layout, Home, Settings} from "lucide-react";
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const tools = [
    {
        label: "Website Generation",
        icon: Layout,
        href: "/webgen",
        color: "text-pink-500",
        bgColor: "text-pink-500/10",
    },
    {
        label: "Apartment Search",
        icon: Home,
        href: "/apartmentsearch",
        color: "text-orange-500"
    },
    {
        label: "Developer Tools",
        icon: TerminalSquare,
        href: "/code",
        color: "text-violet-500"
    },
]

export default function DashboardPage() {
    const router = useRouter();
  return (
    <div>
        <div className="mb-8 space-y-4 font-mono">
            <h2 className='text-2xl md:text-4xl text-center'>Explore Ai Integral</h2>
            <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
                Automate with Ai Prompts
            </p>
        </div>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
            <Card onClick={() => router.push(tool.href)} key={tool.href} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
                </div>
                <div className="font-semibold">
                {tool.label}
                </div>
            </div>
            <ArrowRight className="w-5 h-5" />
            </Card>
        ))}
        </div>
    </div>
  )
}