
import FeatureCard from "./FeatureCard";
import { ActivityIcon, DropletsIcon, ShowerHeadIcon, ThermometerIcon } from "./icons/paintPoints";

export function BenefitsObjectionsData() {
  return (
    <section className="benefits h-full w-screen flex justify-center items-center py-12 md:py-24 lg:py-32 xl:py-40">
      <div className="container grid items-center justify-center gap-12 px-4 text-center md:px-6 lg:gap-16">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Expérimentez la Différence
          </h2>
          <p className="mx-auto max-w-[700px] text-white-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
            Transformez votre salle de bain avec une douche italienne sur
            mesure. Découvrez les avantages et pourquoi nous choisir.
          </p>
        </div>
        <div className="grid max-w-sm w-full grid-cols-2 gap-4 mx-auto md:grid-cols-3 md:max-w-none md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <FeatureCard
            title="Étanche"
            description="Garantit une salle de bain toujours sèche"
            icon={<DropletsIcon className="w-8 h-8 primary-color" />}
          />

          <FeatureCard
            title="Élégance Incomparable"
            description="Apporte une touche de style à votre salle de bain"
            icon={<ShowerHeadIcon className="w-8 h-8 primary-color" />}
          />
          <FeatureCard
            title="Température Constante"
            description="Profitez d’une eau à température constante pour un confort maximal"
            icon={<ThermometerIcon className="w-8 h-8 primary-color" />}
          />
          <FeatureCard
            title="Facilité de Nettoyage"
            description="Économisez temps et effort, simplifiant l'entretien"
            icon={<ActivityIcon className="w-8 h-8 primary-color" />}
          />
          <FeatureCard
            title="Expérience Spa"
            description="Transformez votre routine en un moment de relaxation pure"
            icon={<ActivityIcon className="w-8 h-8 primary-color" />}
          />
          <FeatureCard
            title="Personnalisation"
            description="Adaptez votre douche italienne à vos besoins et à votre style"
            icon={<ActivityIcon className="w-8 h-8 primary-color" />}
          />
        </div>
        <div className="mx-auto max-w-[700px] w-full md:flex h-full  gap-4 md:gap-6 lg:gap-12">
          <div className="grid gap-2 pb-6 md:pb-0 grow">
            <h3 className="text-xl font-bold">Processus d'Installation</h3>
            <p className="text-sm ">
              Notre processus d’installation minimise toute perturbation, grâce
              à une équipe compétente et efficace, veillant à la propreté de
              votre espace tout au long des travaux. Profitez sereinement de
              votre nouvelle douche italienne dès l’achèvement.
            </p>
          </div>
          <div className="grid gap-2  grow">
            <h3 className="text-xl font-bold">Entretien et Confort</h3>
            <p className="text-sm ">
              Les douches italiennes, malgré leur allure moderne et épurée, sont
              conçues pour un entretien facile. Nous vous guidons sur les
              meilleures pratiques de nettoyage. De plus, nous proposons des
              solutions telles que le chauffage au sol ou l’installation
              d’enceintes vitrées pour combattre le froid, garantissant ainsi
              votre confort tout en préservant l'esthétique de la douche
              italienne. Nous discuterons des caractéristiques disponibles et
              des options de personnalisation pour que votre douche italienne
              réponde parfaitement à vos attentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
