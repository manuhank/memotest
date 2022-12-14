export type MemotestId = `${number}`;

export type Memotest = {
    id: MemotestId;
    name: string;
    images: ImageURLS[];
}

export type ImageURLS = {
    url:string
}