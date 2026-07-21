import MainLayout from './layouts/MainLayout';
import HeroSection from './pages/HeroSection';
import AboutSection from './pages/AboutSection';
import EducationSection from './pages/EducationSection';
import SkillsSection from './pages/SkillsSection';
import ExperienceSection from './pages/ExperienceSection';
import ContactSection from './pages/ContactSection';

export default function App() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </MainLayout>
  );
}
