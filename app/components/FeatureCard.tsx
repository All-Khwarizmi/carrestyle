interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="flex shadow-lg cursor flex-col items-center justify-center space-y-2 border border-gray-200  rounded-xl p-4 hover:shadow-lg transition-transform scale-105 translate-y-1 dark:hover:shadow-lg dark:border-gray-800">
      {icon}
      <h3 className="text-sm font-bold tracking-wide">{title}</h3>
      <p className="text-xs ">{description}</p>
    </div>
  );
}
