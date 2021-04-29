import React from 'react';
import { screen, render } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import VideoCards from './VideoCards';

const videoData = [
  {
    id: 'testVideoId',
    title: 'Title 1',
    description: 'Description',
    thumbnail: 'http://randomurl.com',
  },
  {
    id: 'testVideoId2',
    title: 'Title 2',
    description: 'Description2',
    thumbnail: 'http://randomurl2.com',
  },
];

describe('video detail', () => {
  test('video title is rendered', () => {
    render(
      <BrowserRouter>
        <VideoCards videosMetaInfo={videoData} />
      </BrowserRouter>
    );
    expect(screen.getByText('Title 1')).toBeInTheDocument();
  });

  test('confirm alt text of images', () => {
    render(
      <BrowserRouter>
        <VideoCards videosMetaInfo={videoData} />
      </BrowserRouter>
    );
    const images = screen.getAllByRole('img');
    const altText = images.map((element) => element.alt);
    expect(altText).toEqual(['Title 1', 'Title 2']);
  });
});
