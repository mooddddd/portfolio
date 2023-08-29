import { About, Projects } from '@/components';
import { Contact } from '@/components/contact';

export default async function Home() {
  return (
    <div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
