import type { Repository } from "../util";
import { RepositoryCard } from "./RepositoryCard";

export const Repositories = ({
    repos,
}: {
    repos: Repository[];
}) => {
    return (
        <div className="mx-auto w-2/3 gap-8 grid-cols-2 grid">
            {repos.map((repo) => {
                return <RepositoryCard repo={repo} />;
            })}
        </div>
    );
};
