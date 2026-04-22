"use client";
import { MessageSquare, Monitor, RefreshCw, CheckCircle, Rocket } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Syne, DM_Sans } from "next/font/google";
import { BGPattern } from '@/components/ui/bg-pattern'
import { TextRollInView } from '@/components/ui/text-roll-inview'

const syne = Syne({ subsets: ["latin"], weight: ["700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

const timelineData = [
  {
    id: 1,
    title: "Contact",
    date: "Step 1",
    content: "Reach out and tell us about your business. We will get back to you within 24 hours to schedule a free discovery call.",
    category: "Start",
    icon: MessageSquare,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Free Demo",
    date: "Step 2",
    content: "We walk you through what your new site will look like and how it will work. No commitment required.",
    category: "Discovery",
    icon: Monitor,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Revision",
    date: "Step 3",
    content: "You give us feedback and we refine the design until it is exactly right. Your approval drives every decision.",
    category: "Refinement",
    icon: RefreshCw,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 70,
  },
  {
    id: 4,
    title: "Final Product",
    date: "Step 4",
    content: "Your site is built to spec, tested across all devices, and ready for the world.",
    category: "Build",
    icon: CheckCircle,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 40,
  },
  {
    id: 5,
    title: "Deployment",
    date: "Step 5",
    content: "We launch your site and hand over full ownership. Your domain, your hosting, your code. No lock-in.",
    category: "Launch",
    icon: Rocket,
    relatedIds: [4],
    status: "pending" as const,
    energy: 20,
  },
];

export function ProcessSection() {
  return (
    <section id="process" className={`${dmSans.className} relative w-full min-h-fit lg:min-h-screen flex items-center pb-0`} style={{ backgroundColor: '#030303' }}>
      <BGPattern variant="grid" mask="fade-y" fill="#2a2a2a" size={32} className="z-0 opacity-50" />
      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 items-center">

        <div className="flex flex-col gap-8 text-white py-6 lg:py-0">
          <div>
            <p className="text-xs font-mono text-[#0675ff] tracking-widest uppercase mb-3">How It Works</p>
            <h2 className={`${syne.className} text-4xl md:text-5xl font-bold text-white leading-tight`}>
              <TextRollInView>From first contact to</TextRollInView>
              <br />
              <TextRollInView>live site.</TextRollInView>
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {timelineData.map((item) => (
              <div key={item.id} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 hidden sm:flex items-center justify-center text-xs font-mono text-[#0675ff]">
                  {item.id}
                </div>
                <div>
                  <h3 className={`${syne.className} text-base font-bold text-white mb-1`}>{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:block w-full">
          <div className="w-full h-[500px] lg:h-screen relative lg:translate-x-12">
            <RadialOrbitalTimeline timelineData={timelineData} />
            <p className="hidden lg:block absolute bottom-20 left-1/2 -translate-x-1/2 text-white/50 text-xs font-mono tracking-widest animate-pulse text-center whitespace-nowrap">
              CLICK ANY NODE TO EXPLORE
            </p>
          </div>
          <p className="lg:hidden text-center text-white/50 text-xs font-mono tracking-widest animate-pulse py-6">
            CLICK ANY NODE TO EXPLORE
          </p>
        </div>

      </div>
    </section>
  );
}
