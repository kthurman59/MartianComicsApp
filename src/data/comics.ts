export interface Comic {
    id: string;
    title: string;
    pages: string[];
}

export const comics: Comic[] = [
    {
      id: '1',
      title: 'Martian Comics',
      pages: [
          'https://example.com/page1.jpg',
          'https://example.com/page2.jpg',
          'https://example.com/page3.jpg',
        ],
    },
    {
      id: '2',
      title: 'Kemot Ren'
      pages: [
        'https://example.com/kemotren1.jpg'
        'https://example.com/kemotren2.jpg'
      ],
    },
];
