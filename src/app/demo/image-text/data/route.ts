import { ImageItems } from '@/components/organisms/image-text'

const createMockImages = (count: number): ImageItems => {
  const imageItems: ImageItems = []
  for (let i = 0; i < count; i++) {
    imageItems[i] = {
      src: '/assets/kawasaki-z750.jpg',
      alt: 'bright green sport motorcycle',
      id: `image-${Math.random().toString()}`,
    }
  }
  return imageItems
}

export async function GET() {
  return Response.json({
    imageTextItems: [
      {
        id: `image-text-01`,
        title: 'Advice',
        description:
          'This content is provided to demonstrate a simple feature implementation. It’s for demo purposes only, not a finished or production-ready setup.',
      },
      {
        id: `image-text-02`,
        images: createMockImages(4),
        title: 'Enjoy the Ride',
        description:
          'Discover the ultimate riding experience with our powerful sport motorcycles. Engineered for speed, style, and precision.',
        buttonText: 'Learn More',
        textAlign: 'left',
      },
      {
        id: `image-text-03`,
        images: createMockImages(1),
        title: 'Enjoy the Ride',
        description:
          'Discover the ultimate riding experience with our powerful sport motorcycles. Engineered for speed, style, and precision.',
        buttonText: 'Learn More',
        textAlign: 'right',
      },
      {
        id: `image-text-04`,
        images: createMockImages(9),
        title: 'Enjoy the Ride',
        description:
          'Discover the ultimate riding experience with our powerful sport motorcycles. Engineered for speed, style, and precision.',
        buttonText: 'Learn More',
        textAlign: 'right',
      },
    ],
  })
}
