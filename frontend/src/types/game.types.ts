export type MemotestId = `${number}`;

export type Memotest = {
    id: MemotestId;
    name: string;
    urls: ImageURLS[];
}

export type ImageURLS = {
    url:string
}