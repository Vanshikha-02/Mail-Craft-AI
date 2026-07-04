import Navbar from "@/components/Navbar";
import EmailForm from "@/components/Generator/EmailForm";

export default function GeneratePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold">
              Generate Your Email
            </h1>

            <p className="mt-4 text-lg text-muted-foreground">
              Create professional emails in seconds.
            </p>

          </div>

          <EmailForm />
        </div>
      </section>
    </main>
  );
}