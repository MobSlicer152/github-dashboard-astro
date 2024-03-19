import type { Repository } from "../util";
import shieldIcon from "../images/Chield_alt.svg";
import forkIcon from "../images/Nesting.svg";
import starIcon from "../images/Star.svg";

function RepoInfo({icon, text}: {icon: ImageMetadata, text?: String})
{
    if (text) {
        return (
            <div className="flex text-main">
                <img src={icon.src} />
                <p>{text}</p>
            </div>
        );
    }
}

export const RepositoryCard = ({ repo }: { repo: Repository }) => {
    return (
        <div className="rounded-xl bg-gradient-to-r from-dark to-accent hover:to-accenthover p-3">
            <a href={`https://github.com/${repo.url}`}>
                <h2 className="text-xl text-main">{repo.name}</h2>
                <p className="text-main">{repo.description}</p>
                <div className="flex">
                    <RepoInfo icon={shieldIcon} text={repo.license} />
                    <RepoInfo icon={forkIcon} text={repo.forks.toString()} />
                    <RepoInfo icon={starIcon} text={repo.stars.toString()} />
                    <p>updated {repo.lastUpdate}</p>
                </div>
            </a>
        </div>
    );
};
