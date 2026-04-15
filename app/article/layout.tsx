export default function ArticleLayout({
  children,
  atpage,
}: {
  children: React.ReactNode;
  atpage: React.ReactNode;
}) {
  return (
    <>
      {children}
      {atpage}
    </>
  );
}
