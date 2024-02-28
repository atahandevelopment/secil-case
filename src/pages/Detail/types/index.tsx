export type DetailType = {
    id: number;
    image: string;
    price: number;
    description: string;
    rating: {
      rate: number;
      count: number;
    };
    title: string;
  };