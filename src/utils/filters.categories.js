const FILTER_CATEGORIES = [
  [
    {
      key: '1',
      title: 'Roof',
      filters: [
        'Roof type',
        'Roof Material',
      ],
    },
    {
      key: '2',
      title: 'Structure',
      filters: [
        'Basement',
        'Structure Type',
        'Foundation',
      ],
    },
    {
      key: '3',
      title: 'Doors',
      filters: [
        'Interior Door Material',
        'Exterior Door Material',
        'Double sliding Door Material',
      ],
    },
  ],
  [
    {
      key: '4',
      title: 'Walls',
      filters: [
        'Wall Facade Material',
        'Interior Wall Material',
      ],
    },
    {
      key: '5',
      title: 'Windows',
      filters: [
        'Casement Window',
        'Awning Window',
        'Fixed Window',
        'Skylight Flat Window',
        'Skylight Top Hung Window',
        'Fenster Window',
        'Dormer Window',
        'Light Dome',
        'Solarium',
      ],
    },
    {
      key: '6',
      title: 'Floors and Stairs',
      filters: [
        'Floor Finish Material',
        'Stairs and Railing Material',
      ],
    },
    {
      key: '7',
      title: 'TBD',
      disabled: true,
      filters: [
        'Porch',
        'Balcony',
      ],
    },
  ]
];

export default FILTER_CATEGORIES;
