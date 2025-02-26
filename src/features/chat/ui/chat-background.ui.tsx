import { Pattern01 } from "@/shared/assets/patterns";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ChatBackgroundUIProps {}

export const ChatBackgroundUI: React.FC<ChatBackgroundUIProps> = () => {
  return (
    <Image
      alt="Chat background"
      src={Pattern01}
      className="-z-10 bg-gradient-to-br from-secondary to-primary object-cover text-primary"
      fill
    />
  );
};
