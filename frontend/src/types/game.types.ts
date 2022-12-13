export type MemotestId = `${number}`;

export type Memotest = {
    id: MemotestId;
    name: string;
    urls: string[];
}