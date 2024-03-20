import moment from "moment";
import type { Repository } from "../util.ts";
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

export const RepositoryCard = ({ repo }: { repo: Repository }) => {
    return (
        <div className="rounded-xl bg-gradient-to-r from-dark to-accent hover:to-accenthover p-3">
            <a href={`https://github.com/${repo.url}`}>
                <h2 className="text-xl text-main">{repo.name}</h2>
                <p className="text-main py-2">{repo.description}</p>
                <div className="flex">
                    <RepositoryInfo icon={shieldIcon} text={repo.license} />
                    <RepositoryInfo
                        icon={forkIcon}
                        text={repo.forks.toString()}
                    />
                    <RepositoryInfo
                        icon={starIcon}
                        text={repo.stars.toString()}
                    />
                    <p className="text-main p-1 my-1 text-sm">
                        updated {moment(repo.lastUpdate, "X").fromNow()}
                    </p>
                </div>
            </a>
        </div>
    );
};
