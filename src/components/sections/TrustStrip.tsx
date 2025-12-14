interface TrustStripProps {
  items: string[];
}

export function TrustStrip({ items }: TrustStripProps) {
  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container-max">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="trust-logo text-xl md:text-2xl font-bold text-foreground"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
