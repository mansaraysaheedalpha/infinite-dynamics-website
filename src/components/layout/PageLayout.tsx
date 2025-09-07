// src/components/layout/PageLayout.tsx

import PageHeader from "./PageHeader";

interface PageLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const PageLayout = ({ title, subtitle, children }: PageLayoutProps) => {
  return (
    <div>
      <PageHeader title={title} subtitle={subtitle} />
      <main className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
