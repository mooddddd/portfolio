import { About, Projects, Skills } from '@/components';

export default async function Home() {
  return (
    <div>
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
