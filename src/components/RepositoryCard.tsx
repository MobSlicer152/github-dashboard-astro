import moment from "moment";
import shieldIcon from "../images/Chield_alt.svg";
import forkIcon from "../images/Nesting.svg";
import starIcon from "../images/Star.svg";

function RepositoryInfo({
  icon,
  text,
}: {
  icon: ImageMetadata;
  text?: String;
}) {
  if (text) {
    return (
      <div className="flex text-main">
        <img src={icon.src} />
        <p className="p-1">{text}</p>
      </div>
    );
  }
}

export const RepositoryCard = ({ repo }: { repo: any }) => {
  const license = repo.license != null ? repo.license.name : null;
  return (
    <div className="rounded-xl bg-gradient-to-r from-dark to-accent hover:to-accenthover p-3">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-xl">{repo.name}</h2>
        <p className="py-2 text-description">{repo.description}</p>
        <div className="flex">
          <RepositoryInfo icon={shieldIcon} text={license} />
          <RepositoryInfo icon={forkIcon} text={repo.forks_count.toString()} />
          <RepositoryInfo icon={starIcon} text={repo.stargazers_count.toString()} />
          <p className="px-4 py-1 my-1 text-xs text-description">
            updated {moment(repo.updated_at).fromNow()}
          </p>
        </div>
      </a>
    </div>
  );
};
