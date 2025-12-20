export type EventType = {
    id: string;
    title: string;
    image: string;
    description: string;
    options: PriceOptionsType,
    from: string;
    available: number;
    sold: number;
};

export type PriceOptionsType = {
    low: number;
    mid: number;
    high: number;
};