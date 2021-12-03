export interface IGalleryProps {
  // Defines whether it's a gallery with fixed number of items
  // or a flowing, dynamic, endless gallery, supporting unlimited number of items
  isDynamic?: boolean;

  images: IImage[];
  onClick?: (event: any, index?: number) => any;
}

export interface IImage {
  // Image caption as a string, React Node, or a rendered HTML string
  // Shown at the bottom when modal is popped out
  caption?: any;

  alt?: string;
  source: IImageSource;
}

interface IImageSource {
  // Image name is of form "sfd0", where "sf" is name (StoreForce),
  // "d" is download ("t" - thumbnail, "f" - fullscreen, "r" - regular)
  // and 0 is image index

  // url to serve a perfect quality image download from
  download?: string;

  // url to load a very high quality image from
  fullscreen?: string;

  // url to load a high quality image from
  regular: string;

  // url to load a low quality image from
  thumbnail: string;
}
