import { Cctv, ShieldAlert, HeartPulse, Vault } from "lucide-react";
import { Button } from "@/components/ui/button";
import { securityOfferings } from "@/lib/security-offerings";
import type { Lang } from "@/lib/i18n";
import camera from "@/assets/home_burglary_short.mp4";

const homeIcons = [Cctv, ShieldAlert, HeartPulse, Vault];

export function SecurityOfferings({ lang, contactLabel }: { lang: Lang; contactLabel: string }) {
  const copy = securityOfferings[lang];
  return <>
    {([{ id: "home-security", copy: copy.home, icons: homeIcons, video: camera }]).map((section) => (
      <section key={section.id} id={section.id} className="scroll-mt-44 border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="reveal grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">// {section.copy.label}</p>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">{section.copy.title}</h2>
              <p className="mt-6 text-muted-foreground">{section.copy.description}</p>
              <Button asChild variant="outline" className="mt-6 border-primary text-primary">
                <a href="#contact">{contactLabel}</a>
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-sm border border-border hud-corner">
              <video src={section.video} autoPlay muted loop playsInline className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {section.copy.items.map((item, i) => {
              const Icon = section.icons[i] ?? ShieldAlert;
              return <article key={item.title} className="reveal bg-background p-6">
                <Icon className="size-7 text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              </article>;
            })}
          </div>
        </div>
      </section>
    ))}
  </>;
}