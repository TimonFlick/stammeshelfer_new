import { ActionButton } from "@/components/ui/actionButton";
import { Input } from "@/components/ui/input";

export function Auth({
  actionText,
  onSubmit,
  status,
  afterSubmit,
}: {
  actionText: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  status: "pending" | "idle" | "success" | "error";
  afterSubmit?: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 bg-white dark:bg-black flex items-start justify-center p-8">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">{actionText}</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(e);
          }}
          className="space-y-4"
        >
          <Input type="email" name="email" id="email" placeholder="Email" />
          <Input type="password" name="password" id="password" />
          <ActionButton type="submit" loading={status === "pending"}>
            {status === "pending" ? "..." : actionText}
          </ActionButton>
          {afterSubmit ? afterSubmit : null}
        </form>
      </div>
    </div>
  );
}
