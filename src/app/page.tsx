import Image from "next/image";
import { Chakana, Quechua, TocapuBand } from "@/components/inca";
import { formatPrice, menu, restaurant, signatureDishes } from "@/lib/restaurant";

const cordColor = {
  red: "bg-cochenille",
  yellow: "bg-mais",
  purple: "bg-chicha",
  stone: "bg-pierre",
} as const;

function ReserveButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#reserver"
      className={`inline-flex items-center gap-2 bg-mais px-6 py-3 font-semibold text-nuit transition hover:bg-[#ffc93f] ${className}`}
    >
      <Chakana className="size-4" />
      Réserver
    </a>
  );
}

export default function Home() {
  return (
    <>
      <TocapuBand id="tocapu-top" />
      <header className="bg-nuit text-papier">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-3">
            <Chakana className="size-9 text-mais" />
            <span className="font-heading text-2xl font-bold tracking-wide">{restaurant.name}</span>
            <span className="hidden text-sm text-pierre sm:inline">{restaurant.fullName}</span>
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="#plats" className="hidden hover:text-mais md:inline">Plats</a>
            <a href="#carte" className="hidden hover:text-mais md:inline">Carte</a>
            <a href="#infos" className="hidden hover:text-mais md:inline">Infos</a>
            <ReserveButton className="px-4 py-2" />
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Le ceviche d'abord */}
        <section className="relative grid bg-nuit text-papier lg:grid-cols-[2fr_3fr]">
          <div className="flex flex-col justify-center gap-6 px-5 py-14 lg:py-24 lg:pl-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))] lg:pr-12">
            <Quechua word="Allin hamusqayki" meaning="bienvenue" className="text-mais" />
            <h1 className="font-heading text-5xl leading-[1.05] font-bold sm:text-6xl">
              Ceviche, braises <span className="text-mais">&amp;</span> pisco sour
            </h1>
            <p className="max-w-md text-lg text-pierre">{restaurant.intro}</p>
            <div className="flex flex-wrap items-center gap-4">
              <ReserveButton />
              <a href="#carte" className="border-b-2 border-cochenille pb-1 font-semibold hover:text-mais">
                Voir la carte
              </a>
            </div>
          </div>
          <div className="relative min-h-[22rem] sm:min-h-[30rem] lg:min-h-[40rem]">
            <Image
              src={restaurant.images.hero}
              alt="Ceviche clásico : poisson mariné au citron vert, patate douce, oignon rouge"
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
            <p className="absolute bottom-4 left-4 bg-cochenille px-3 py-1 text-sm font-semibold">
              Ceviche clásico · {formatPrice(signatureDishes[0].price)}
            </p>
          </div>
        </section>

        <TocapuBand id="tocapu-hero" />

        {/* Plats phares */}
        <section id="plats" className="mx-auto max-w-6xl px-5 py-20">
          <Quechua word="Mikhuna" meaning="ce qu'on mange" className="text-cochenille" />
          <h2 className="mt-2 font-heading text-4xl font-bold text-nuit">Nos plats phares</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {signatureDishes.map((dish) => (
              <article key={dish.name} className="group bg-white shadow-[6px_6px_0_var(--pierre)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-heading text-2xl font-bold text-nuit">{dish.name}</h3>
                    <span className="text-xl font-bold whitespace-nowrap text-cochenille">{formatPrice(dish.price)}</span>
                  </div>
                  <p lang="qu" className="mt-1 text-xs tracking-[0.2em] text-chicha uppercase">{dish.quechua}</p>
                  <p className="mt-3 text-nuit/80">{dish.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Table partagée */}
        <section className="relative">
          <div className="relative h-[28rem] sm:h-[34rem]">
            <Image
              src={restaurant.images.table}
              alt="Une grande table d'amis qui partagent des plats"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-chicha/90 via-chicha/50 to-transparent" />
          </div>
          <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-center gap-4 px-5 text-papier">
            <Quechua word="Ayni" meaning="donner et recevoir" className="text-mais" />
            <h2 className="max-w-md font-heading text-4xl font-bold sm:text-5xl">Ici, tout se partage</h2>
            <p className="max-w-md text-lg">
              On commande pour la table, les plats arrivent au milieu, chacun pioche. Comme un dimanche à Lima.
            </p>
          </div>
        </section>

        {/* La carte en quipu */}
        <section id="carte" className="bg-pierre/40 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <Quechua word="Khipu" meaning="la carte, nœud par nœud" className="text-cochenille" />
            <h2 className="mt-2 font-heading text-4xl font-bold text-nuit">La carte</h2>
            <div className="relative mt-12">
              <div className="h-2 rounded-full bg-nuit" aria-hidden="true" />
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {menu.map((cord) => (
                  <div key={cord.category} className="relative pl-8">
                    <span className={`absolute top-0 left-3 h-full w-1 ${cordColor[cord.color]}`} aria-hidden="true" />
                    <p lang="qu" className="pt-4 text-xs tracking-[0.2em] text-chicha uppercase">{cord.quechua}</p>
                    <h3 className="font-heading text-2xl font-bold text-nuit">{cord.category}</h3>
                    <ul className="mt-4 space-y-4">
                      {cord.items.map((item) => (
                        <li key={item.name} className="relative flex items-baseline justify-between gap-3">
                          <span
                            className={`absolute top-1.5 -left-[1.6rem] size-3.5 rounded-full ring-2 ring-nuit ${cordColor[cord.color]}`}
                            aria-hidden="true"
                          />
                          <span className="text-nuit">{item.name}</span>
                          <span className="font-semibold whitespace-nowrap text-nuit">{formatPrice(item.price)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bande rouge */}
        <section id="reserver" className="bg-cochenille text-papier">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold">Une table pour ce soir ?</h2>
              <p className="mt-2 text-lg">
                Appelez-nous au{" "}
                <a href={`tel:${restaurant.phone.replace(/\s/g, "")}`} className="font-semibold underline">
                  {restaurant.phone}
                </a>{" "}
                ou réservez en ligne.
              </p>
            </div>
            <ReserveButton className="text-lg" />
          </div>
        </section>
      </main>

      <footer id="infos" className="bg-nuit text-papier">
        <TocapuBand id="tocapu-footer" />
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Chakana className="size-8 text-mais" />
              <span className="font-heading text-2xl font-bold">{restaurant.fullName}</span>
            </div>
            <p className="mt-4 text-pierre">
              <span lang="qu" className="font-semibold text-mais">Añay</span> · merci de votre visite.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-mais">Horaires</h3>
            <ul className="mt-3 space-y-1 text-pierre">
              {restaurant.hours.map((h) => (
                <li key={h.days}>
                  <span className="text-papier">{h.days}</span> · {h.time}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-mais">Nous trouver</h3>
            <address className="mt-3 space-y-1 text-pierre not-italic">
              <p>{restaurant.address}</p>
              <p>{restaurant.phone}</p>
              <p>{restaurant.email}</p>
            </address>
          </div>
        </div>
      </footer>
    </>
  );
}
