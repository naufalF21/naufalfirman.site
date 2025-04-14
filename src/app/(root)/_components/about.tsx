import { ContentLayout } from "~/components/layouts/content-layout";

const About = () => {
  return (
    <ContentLayout title="What I am up to now">
      <ul className="flex flex-col gap-6" id="about">
        <li className="flex flex-col gap-3 border-b pb-6">
          <div className="flex flex-col text-lg">
            <span>Freelance - Present</span>
            <span>Web Developer</span>
          </div>
          <p className="font-normal">
            Collaborated with clients to build custom websites and web
            applications, focusing on responsive design, functionality, and user
            experience. Developed solutions using modern frameworks while
            adapting to project requirements and feedback.
          </p>
        </li>
        <li className="flex flex-col gap-3 border-b pb-6">
          <div className="flex flex-col text-lg">
            <span>Algostudio - 2023</span>
            <span>Fullstack Web Developer Intern</span>
          </div>
          <p className="font-normal">
            Worked alongside a cross-functional team of 3 developers and
            designers to build and optimize web applications using laravel.
            Contributed to both frontend and backend development while improving
            system performance and user experience.
          </p>
        </li>
      </ul>
    </ContentLayout>
  );
};

export { About };
