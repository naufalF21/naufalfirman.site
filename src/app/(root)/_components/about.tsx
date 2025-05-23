import { ContentLayout } from "~/components/layouts/content-layout";

const About = () => {
  const carrers = [
    {
      company: "Freelance",
      year: "Present",
      role: "Web Developer",
      desc: "Collaborated with clients to build custom websites and web applications, focusing on responsive design, functionality, and user experience. Developed solutions using modern frameworks while adapting to project requirements and feedback.",
    },
    {
      company: "Algostudio",
      year: "2023",
      role: "Fullstack Web Developer Intern",
      desc: "Worked alongside a cross-functional team of 3 developers and designers to build and optimize web applications using laravel. Contributed to both frontend and backend development while improving system performance and user experience.",
    },
  ];

  return (
    <ContentLayout title="What I am up to now">
      <ul className="flex flex-col gap-6" id="about">
        {carrers.map((carrer, index) => (
          <li className="flex flex-col gap-3 border-b pb-6" key={index}>
            <div className="flex flex-col text-lg font-semibold">
              <span>
                {carrer.company} - {carrer.year}
              </span>
              <span>{carrer.role}</span>
            </div>
            <p className="font-normal">{carrer.desc}</p>
          </li>
        ))}
      </ul>
    </ContentLayout>
  );
};

export { About };
