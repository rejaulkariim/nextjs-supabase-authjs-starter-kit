type SectionHeaderProps = {
  title: string;
  description: string;
};

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="text-center space-y-4 mb-12">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default SectionHeader;
