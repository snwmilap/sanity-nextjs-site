import Section from "@/components/ui/Section";

export default function ContactPage() {
  return (
    <main className="grow">
      <Section className="py-8">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          {`We'd love to hear from you! Reach out to us using the information below.`}
        </p>
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">Email</h2>
            <p className="text-gray-600 dark:text-gray-400">contact@example.com</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Phone</h2>
            <p className="text-gray-600 dark:text-gray-400">+1 (123) 456-7890</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Address</h2>
            <p className="text-gray-600 dark:text-gray-400">
              123 Main Street
              <br />
              City, State, ZIP Code
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
