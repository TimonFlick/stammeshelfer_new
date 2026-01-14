import { Link } from "@tanstack/react-router";
import { ActionButton } from "@/components/ui/actionButton";
import { Text } from "@/components/ui/text";

export function NotFound({ children }: { children?: React.ReactNode }) {
  return (
    <div className="space-y-2 p-2">
      <div className="text-gray-600 dark:text-gray-400">
        {children || <Text>The page you are looking for does not exist.</Text>}
      </div>
      <Text>
        <ActionButton onClick={() => window.history.back()} variant="outline">
          Go back
        </ActionButton>
        <Link
          to="/"
          className="bg-cyan-600 text-white px-2 py-1 rounded-sm uppercase font-black text-sm"
        >
          Start Over
        </Link>
      </Text>
    </div>
  );
}
