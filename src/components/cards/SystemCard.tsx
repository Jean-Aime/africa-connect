import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface SystemCardProps {
  icon: LucideIcon;
  iconBgColor: string;
  title: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaVariant?: "default" | "accent" | "success" | "warning";
  className?: string;
}

export function SystemCard({
  icon: Icon,
  iconBgColor,
  title,
  description,
  features,
  ctaLabel,
  ctaHref,
  ctaVariant = "default",
  className,
}: SystemCardProps) {
  return (
    <div className={cn("system-card p-8 card-hover", className)}>
      <div
        className={cn(
          "w-16 h-16 rounded-lg flex items-center justify-center mb-6",
          iconBgColor
        )}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-semibold text-foreground mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
      <ul className="text-sm text-muted-foreground space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button asChild variant={ctaVariant}>
        <Link to={ctaHref}>{ctaLabel}</Link>
      </Button>
    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  sublabel?: string;
}

export function StatCard({ value, label, sublabel }: StatCardProps) {
  return (
    <div className="p-6 text-center">
      <div className="text-3xl font-bold text-primary mb-2">{value}</div>
      <div className="text-foreground">{label}</div>
      {sublabel && <div className="text-sm text-muted-foreground mt-1">{sublabel}</div>}
    </div>
  );
}

interface FeatureCardProps {
  icon: LucideIcon;
  iconBgColor: string;
  title: string;
  description: string;
  features?: string[];
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  iconBgColor,
  title,
  description,
  features,
  className,
}: FeatureCardProps) {
  return (
    <div className={cn("text-center p-6", className)}>
      <div
        className={cn(
          "w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6",
          iconBgColor
        )}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-4">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      {features && (
        <ul className="text-xs text-muted-foreground space-y-1">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  bgColor: string;
  textColor?: string;
}

export function StepCard({ number, title, description, bgColor, textColor = "text-white" }: StepCardProps) {
  return (
    <div className="text-center">
      <div
        className={cn(
          "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6",
          bgColor
        )}
      >
        <span className={cn("font-bold text-2xl", textColor)}>{number}</span>
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-4">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}

interface PartnerCardProps {
  icon: LucideIcon;
  iconBgColor: string;
  title: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaColor: string;
}

export function PartnerCard({
  icon: Icon,
  iconBgColor,
  title,
  description,
  features,
  ctaLabel,
  ctaHref,
  ctaColor,
}: PartnerCardProps) {
  return (
    <div className="bg-card rounded-xl p-8 shadow-card card-hover border border-border">
      <div
        className={cn(
          "w-16 h-16 rounded-lg flex items-center justify-center mb-6",
          iconBgColor
        )}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-4">{title}</h3>
      <p className="text-muted-foreground text-sm mb-6">{description}</p>
      <ul className="text-xs text-muted-foreground space-y-1 mb-6">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
      <Link
        to={ctaHref}
        className={cn("hover:underline font-semibold text-sm", ctaColor)}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
