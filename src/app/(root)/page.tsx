import { Button } from "~/components/ui/button";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <div className="p-5">
      <h1>Please wait</h1>
      <Button>Click me</Button>
    </div>
  );
}
