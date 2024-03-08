export interface Repository {
    url: String;
    name: String;
    description: String;
    license?: String;
    forks: number;
    stars: number;
    lastUpdate: EpochTimeStamp;
}