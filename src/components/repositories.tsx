import type { Repository } from "../util";

export const Repositories = ({
    repositories,
}: {
    repositories: Repository[];
}) => {
    return (
        <div className="mx-auto w-2/3 gap-8 grid-cols-2 grid">
            {repositories.map((repo) => {
                return (
                    <div className="rounded-xl bg-gradient-to-r from-dark to-accent hover:to-accenthover p-3">
                        <a href={`https://github.com/${repo.url}`}>
                            <h2 className="text-xl text-main">{repo.name}</h2>
                            <p className="text-description">
                                {repo.description}
                            </p>
                            <div className="flex"></div>
                        </a>
                    </div>
                );
            })}
        </div>
    );
};
