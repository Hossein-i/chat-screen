"use client";

import { ThemeSwitcherUI } from "@/shared/ui/theme-switcher";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ChatTopBarUIProps {}

export const ChatTopBarUI: React.FC<ChatTopBarUIProps> = () => {
  return (
    <Card className="flex-row">
      <CardHeader className="w-auto"></CardHeader>
      <CardBody className="w-auto flex-auto items-center justify-center">
        <h1 className="text-xl font-semibold">WELCOME</h1>
      </CardBody>
      <CardFooter className="w-auto">
        <ThemeSwitcherUI variant="flat" radius="full" />
      </CardFooter>
    </Card>
  );
};
