import { ChatUI } from "@/views/chat/ui";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface RootPageProps {}

const RootPage: React.FC<RootPageProps> = () => {
  return (
    <section className="mx-auto max-w-screen-sm">
      <ChatUI />
    </section>
  );
};

export default RootPage;
