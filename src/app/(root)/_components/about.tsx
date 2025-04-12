import { ContentLayout } from "~/components/layouts/content-layout";

const About = () => {
  return (
    <ContentLayout title="What I am up to now">
      <ul className="flex flex-col gap-6">
        <li className="flex flex-col gap-3 border-b pb-6">
          <div className="flex flex-col text-lg">
            <span>Scope Client - Present</span>
            <span>Product Designer</span>
          </div>
          <p className="font-normal">
            Voluntary role, working on a 3rd party Discord client with 3 other
            amazing designers improving the usage of Discord.
          </p>
        </li>
        <li className="flex flex-col gap-3 border-b pb-6">
          <div className="flex flex-col text-lg">
            <span>DBS Bank - 2024</span>
            <span>Design Systems Intern</span>
          </div>
          <p className="font-normal">
            Upholding design standards within the bank as well as helm several
            prototyping projects.
          </p>
        </li>
      </ul>
    </ContentLayout>
  );
};

export { About };
